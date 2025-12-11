import Image from "next/image";
import Link from "next/link";
import { Sree_Krushnadevaraya } from "next/font/google";

const skFont = Sree_Krushnadevaraya({ weight: "400", subsets: ["telugu"], display: "swap" });

export default function ResultPoster() {
  return (
    <div className={`min-h-screen bg-gray-900 flex flex-col items-center justify-center p-0 ${skFont.className}`}>
      
      {/* Back Button (Floating Outside) */}
      <div className="absolute top-4 left-4 z-50">
        <Link href="/" className="text-white/50 text-xs border border-white/20 px-3 py-1 rounded-full font-sans hover:bg-white/10 hover:text-white transition">
            ← Home
        </Link>
      </div>

      <p className="text-gray-500 text-[10px] mb-2 font-sans">👇 Exact Mobile Screenshot Size (360x640) 👇</p>

      {/* ================= RESULT POSTER (Fixed Mobile Size) ================= */}
      <div className="w-[360px] h-[640px] bg-white overflow-hidden shadow-2xl relative flex flex-col border-0">
        
        {/* --- 1. WINNER HEADER SECTION --- */}
        <div className="h-[240px] bg-gradient-to-b from-orange-600 via-orange-500 to-white relative shrink-0">
            {/* Confetti Pattern */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/confetti.png')]"></div>
            
            {/* Title */}
            <div className="absolute top-4 w-full text-center z-10">
                <p className="text-yellow-100 text-[10px] font-bold tracking-widest uppercase mb-0.5 shadow-sm">MAADANNAPET RESULTS</p>
                <h1 className="text-2xl font-extrabold text-white drop-shadow-md">
                    కత్తి రమేష్ విజయం!
                </h1>
            </div>

            {/* Winner Photo */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[220px] h-[190px] z-10">
                <Image 
                    src="/ramesh-namaste.png" 
                    alt="Winner Ramesh" 
                    fill 
                    className="object-contain object-bottom drop-shadow-2xl" 
                    priority
                />
            </div>
            
            {/* Majority Badge */}
            <div className="absolute bottom-2 right-4 bg-green-600 text-white px-3 py-1 rounded-lg text-center shadow-lg border-2 border-white z-20">
                <p className="text-[9px] font-bold opacity-80 uppercase">MAJORITY</p>
                <p className="text-xl font-black leading-none">174</p>
            </div>
        </div>

        {/* --- 2. DETAILED SCORECARD (The List) --- */}
        <div className="flex-1 bg-white p-4 pt-0 flex flex-col">
            
            {/* Winner Row (Highlighted) */}
            <div className="flex justify-between items-center bg-orange-50 p-2.5 rounded-lg border-l-4 border-orange-500 mb-2 shadow-sm">
                <div className="flex items-center gap-2">
                    <span className="text-lg">👑</span>
                    <div>
                        <p className="text-xs font-bold text-gray-500 uppercase">విజేత (Winner)</p>
                        <p className="text-lg font-extrabold text-orange-700 leading-none">కత్తి రమేష్</p>
                    </div>
                </div>
                <p className="text-2xl font-black text-gray-800">643</p>
            </div>

            {/* Full List Table */}
            <div className="border border-gray-200 rounded-lg overflow-hidden flex-1">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-100 text-gray-500 text-[10px] uppercase font-bold">
                        <tr>
                            <th className="py-2 px-3 border-b border-gray-200">అభ్యర్థి పేరు</th>
                            <th className="py-2 px-3 text-right border-b border-gray-200">ఓట్లు</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm font-bold text-gray-700">
                        {/* Runner Up */}
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-2 px-3 text-gray-800">2. గొల్ల తిరుపతి</td>
                            <td className="py-2 px-3 text-right text-base text-black">469</td>
                        </tr>
                        {/* Third */}
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="py-2 px-3 text-gray-600">3. అబ్బరబోయిన అనిల్</td>
                            <td className="py-2 px-3 text-right text-base text-gray-800">375</td>
                        </tr>
                        {/* Fourth */}
                        <tr className="border-b border-gray-100">
                            <td className="py-1.5 px-3 text-gray-500 text-xs">4. కుమారస్వామి</td>
                            <td className="py-1.5 px-3 text-right text-gray-600 text-sm">58</td>
                        </tr>
                        {/* Fifth */}
                        <tr className="border-b border-gray-100">
                            <td className="py-1.5 px-3 text-gray-500 text-xs">5. రాజు</td>
                            <td className="py-1.5 px-3 text-right text-gray-600 text-sm">17</td>
                        </tr>
                        {/* Sixth */}
                        <tr>
                            <td className="py-1.5 px-3 text-gray-500 text-xs">6. బండి కుమార్ (ఇతరులు)</td>
                            <td className="py-1.5 px-3 text-right text-gray-600 text-sm">1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        {/* --- 3. FOOTER INFO --- */}
        <div className="bg-gray-50 p-2 text-center border-t border-gray-200 shrink-0">
            <div className="flex justify-center gap-4 text-[10px] text-gray-500 font-bold mb-1">
                <span>మొత్తం ఓట్లు: 1563</span>
                <span>•</span>
                <span>చెల్లనివి: --</span>
            </div>
            <p className="text-[9px] text-gray-400 font-sans">Official Count Summary | Date: 11-12-2025</p>
        </div>

      </div>
    </div>
  );
}