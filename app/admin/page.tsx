"use client";
import { useState, useEffect } from "react";

export default function AdminPage() {
  // --- STATE VARIABLES ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [feedbacks, setFeedbacks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Search & Sort & Pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState<{ key: string; direction: string } | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // --- LOGIN FUNCTION ---
  const handleLogin = (e: any) => {
    e.preventDefault();
    if (username === "admin" && password === "Ramesh@123") {
      setIsAuthenticated(true);
      fetchData(); // లాగిన్ అవ్వగానే డేటా తెచ్చుకో
    } else {
      setError("తప్పు యూజర్ నేమ్ లేదా పాస్ వర్డ్!");
    }
  };

  // --- FETCH DATA ---
  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/feedback");
      const json = await res.json();
      if (json.data) {
        setFeedbacks(json.data);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  // --- SORTING LOGIC ---
  const handleSort = (key: string) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  // --- FILTER & PROCESS DATA ---
  const processedData = [...feedbacks]
    .filter((item) => {
        // Search Logic: Name, Mobile, or Issue matches search term
        const term = searchTerm.toLowerCase();
        return (
            (item.name && item.name.toLowerCase().includes(term)) ||
            (item.mobile && item.mobile.includes(term)) ||
            (item.issue && item.issue.toLowerCase().includes(term))
        );
    })
    .sort((a, b) => {
        // Sort Logic
        if (!sortConfig) return 0;
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

  // --- PAGINATION LOGIC ---
  const totalPages = Math.ceil(processedData.length / itemsPerPage);
  const currentData = processedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // --- IF NOT LOGGED IN: SHOW LOGIN FORM ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center text-orange-600">Admin Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full p-2 border rounded"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" className="w-full bg-orange-600 text-white p-2 rounded hover:bg-orange-700">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- IF LOGGED IN: SHOW DASHBOARD ---
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">ప్రజా సమస్యల వేదిక (Admin)</h1>
            <button 
                onClick={() => setIsAuthenticated(false)}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
            >
                Logout
            </button>
        </div>

        {/* Search Bar */}
        <div className="mb-4">
            <input 
                type="text" 
                placeholder="Search by Name, Mobile or Issue..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-1/3 p-3 border border-gray-300 rounded shadow-sm"
            />
        </div>

        {/* Table Container */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            {loading ? (
                <p className="p-8 text-center text-gray-500">Loading data...</p>
            ) : (
                <>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-orange-100">
                            <tr>
                                <th 
                                    onClick={() => handleSort('created_at')}
                                    className="px-6 py-3 text-left text-xs font-bold text-orange-800 uppercase tracking-wider cursor-pointer hover:bg-orange-200"
                                >
                                    Date {sortConfig?.key === 'created_at' ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : ''}
                                </th>
                                <th 
                                    onClick={() => handleSort('name')}
                                    className="px-6 py-3 text-left text-xs font-bold text-orange-800 uppercase tracking-wider cursor-pointer hover:bg-orange-200"
                                >
                                    Name {sortConfig?.key === 'name' ? (sortConfig.direction === 'ascending' ? '↑' : '↓') : ''}
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-orange-800 uppercase tracking-wider">
                                    Mobile
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-orange-800 uppercase tracking-wider">
                                    Issue
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {currentData.length > 0 ? (
                                currentData.map((row: any) => (
                                    <tr key={row.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {new Date(row.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {row.name || "-"}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {row.mobile || "-"}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {row.issue}
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                                        No feedback found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Controls */}
                <div className="bg-gray-50 px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                    <div className="flex-1 flex justify-between sm:hidden">
                        <button 
                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                            className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                        >
                            Previous
                        </button>
                        <button 
                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm text-gray-700">
                                Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-medium">{Math.min(currentPage * itemsPerPage, processedData.length)}</span> of <span className="font-medium">{processedData.length}</span> results
                            </p>
                        </div>
                        <div>
                            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                <button
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                                >
                                    Next
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
                </>
            )}
        </div>
      </div>
    </div>
  );
}