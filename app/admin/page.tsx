"use client";
import { useState } from "react";
import Link from "next/link";

export default function AdminPage() {
  // --- STATE VARIABLES ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const [feedbacks, setFeedbacks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Search & Pagination State
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // --- LOGIN FUNCTION ---
  const handleLogin = (e: any) => {
    e.preventDefault();
    if (username === "admin" && password === "Ramesh@123") {
      setIsAuthenticated(true);
      fetchData();
    } else {
      setError("తప్పు వివరాలు!");
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
      console.error("Error fetching data:", err);
    }
    setLoading(false);
  };

  // --- FILTERING LOGIC (Search) ---
  const filteredData = feedbacks.filter((item) => {
    const term = searchTerm.toLowerCase();
    return (
      (item.name && item.name.toLowerCase().includes(term)) ||
      (item.mobile && item.mobile.includes(term)) ||
      (item.issue && item.issue.toLowerCase().includes(term))
    );
  });

  // --- PAGINATION LOGIC ---
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      
      {/* --- NAVBAR --- */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-50 border-b-4 border-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center border-2 border-green-600">
                    <span className="text-2xl">🏛️</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-green-800 leading-none font-[family-name:var(--font-sk)]">
                        కత్తి రమేష్
                    </span>
                    <span className="text-xs text-gray-500 font-bold uppercase mt-1">
                        సర్పంచ్ (Admin)
                    </span>
                </div>
              </Link>
            </div>
            <div className="flex items-center">
              <Link href="/" className="text-gray-600 hover:text-green-700 font-bold flex items-center gap-2">
                <span>←</span> వెనక్కి వెళ్ళు
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <div className="pt-28 pb-12 flex-1 px-4">
        
        {/* IF NOT LOGGED IN */}
        {!isAuthenticated ? (
          <div className="max-w-md mx-auto mt-10">
             <div className="bg-white rounded-2xl shadow-xl p-8 border-t-8 border-green-600">
                <div className="text-center mb-8">
                    <span className="text-6xl">🔒</span>
                    <h2 className="text-2xl font-bold text-gray-900 mt-4">సర్పంచ్ లాగిన్</h2>
                    <p className="text-gray-500 text-sm">అధికారిక కార్యకలాపాలు మాత్రమే</p>
                </div>
                <form onSubmit={handleLogin} className="space-y-5">
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-green-500" />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-green-500" />
                    {error && <p className="text-red-500 text-sm font-bold text-center">{error}</p>}
                    <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition shadow-lg">
                        లాగిన్ అవ్వండి
                    </button>
                </form>
             </div>
          </div>
        ) : (
          /* IF LOGGED IN: DASHBOARD */
          <div className="max-w-6xl mx-auto">
             
             {/* Header & Logout */}
             <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                 <h1 className="text-3xl font-bold text-gray-900 font-[family-name:var(--font-sk)]">
                     ప్రజా సమస్యల పట్టిక
                 </h1>
                 <button onClick={() => { setIsAuthenticated(false); setUsername(""); setPassword(""); }} className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 font-bold shadow transition">
                     Logout
                 </button>
             </div>

             {/* Search Bar */}
             <div className="mb-6">
                <div className="relative max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500">🔍</span>
                    </div>
                    <input 
                        type="text" 
                        placeholder="పేరు, ఫోన్ లేదా సమస్య ద్వారా వెతకండి..." 
                        value={searchTerm}
                        onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                        className="w-full pl-10 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 outline-none"
                    />
                </div>
             </div>

             {/* Table Container */}
             <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200">
                {loading ? (
                    <div className="p-10 text-center text-gray-500">లోడ్ అవుతోంది...</div>
                ) : (
                    <>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-green-50">
                                <tr>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-green-800 uppercase tracking-wider">తేదీ</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-green-800 uppercase tracking-wider">పేరు</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-green-800 uppercase tracking-wider">ఫోన్</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-green-800 uppercase tracking-wider">సమస్య</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {currentData.length > 0 ? currentData.map((row: any) => (
                                    <tr key={row.id} className="hover:bg-green-50 transition">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            {new Date(row.created_at).toLocaleDateString('en-IN')}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                                            {row.name || "-"}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                            <a href={`tel:${row.mobile}`} className="hover:text-green-600 font-medium">{row.mobile || "-"}</a>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-700">
                                            {row.issue}
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan={4} className="px-6 py-10 text-center text-lg text-gray-500">
                                            ఫలితాలు లేవు.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination Controls */}
                    {filteredData.length > itemsPerPage && (
                        <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-t border-gray-200">
                            <span className="text-sm text-gray-700">
                                పేజీ <span className="font-bold">{currentPage}</span> / {totalPages}
                            </span>
                            <div className="flex gap-2">
                                <button 
                                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                    disabled={currentPage === 1}
                                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Previous
                                </button>
                                <button 
                                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                    disabled={currentPage === totalPages}
                                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}
                    </>
                )}
             </div>
          </div>
        )}
      </div>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 text-white py-8 text-center border-t border-gray-800 mt-auto">
          <p className="text-xl font-bold font-[family-name:var(--font-sk)] mb-2">మాదన్నపేట గ్రామ పంచాయతీ</p>
          <div className="mt-4 text-sm text-gray-600">
            Designed & Developed by <span className="text-green-500 font-bold">SG</span>
          </div>
      </footer>
    </div>
  );
}