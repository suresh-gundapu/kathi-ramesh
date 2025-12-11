import Image from "next/image";
import Link from "next/link";
import { Sree_Krushnadevaraya } from "next/font/google";

const skFont = Sree_Krushnadevaraya({ weight: "400", subsets: ["telugu"], display: "swap" });

export default function ResultPoster() {
  return (
    <div className={`min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 ${skFont.className}`}>
      
      {/* Back Button */}
      <div className="mb-6">
        <Link href="/" className="text-white/50 text-xs border border-white/20 px-4 py-2 rounded-full font-sans hover:bg-white/10 hover:text-white transition">
            ← Home
        </Link>
      </div>

      {/* ================= RESULT CARD (Clean & Direct) ================= */}
      <div className="w-[360px] bg-white rounded-2xl overflow-hidden shadow-2xl border-[4px] border-orange-600 relative">
        
        {/* --- HEADER --- */}
        <div className="bg-orange-600 p-6 text-center text-white border-b-4 border-yellow-400">
            <p className="text-yellow-200 text-[10px] font-bold tracking-widest uppercase mb-1">OFFICIAL COUNT</p>
            <h1 className="text-2xl font-extrabold leading-tight drop-shadow-md">
                మాదన్నపేట<br/>
                <span className="text-3xl">ఎన్నికల ఫలితాలు</span>
            </h1>
        </div>

        {/* --- WINNER HIGHLIGHT --- */}
        <div className="bg-orange-50 p-6 flex flex-col items-center border-b border-gray-200">
            <div className="relative w-32 h-32 mb-3">
                <div className="absolute inset-0 bg-yellow-400 rounded-full animate-pulse opacity-50"></div>
                <div className="relative w-32 h-32 rounded-full border-[4px] border-yellow-500 overflow-hidden shadow-xl">
                    <Image 
                        src="/ramesh-namaste.png" 
                        alt="Winner" 
                        fill 
                        className="object-cover object-top" 
                    />
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-0.5 rounded-full border-2 border-white shadow-md">
                    <p className="text-xs font-extrabold uppercase tracking-wider">WINNER</p>
                </div>
            </div>
            
            <h2 className="text-2xl font-extrabold text-orange-700">కత్తి రమేష్</h2>
            <p className="text-4xl font-black text-gray-800 mt-1">643 <span className="text-sm text-gray-500 font-bold">ఓట్లు</span></p>
        </div>

        {/* --- SCORECARD (As per Slip) --- */}
        <div className="p-0">
            <table className="w-full text-left border-collapse">
                <thead className="bg-gray-800 text-white text-xs uppercase">
                    <tr>
                        <th className="py-3 px-4 font-bold">అభ్యర్థి పేరు</th>
                        <th className="py-3 px-4 font-bold text-right">వచ్చిన ఓట్లు</th>
                    </tr>
                </thead>
                <tbody className="text-sm font-bold text-gray-700">
                    {/* Runner Up */}
                    <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="py-3 px-4">గొల్ల తిరుపతి</td>
                        <td className="py-3 px-4 text-right text-gray-900 text-lg">469</td>
                    </tr>
                    {/* Third Place */}
                    <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">అబ్బరబోయిన అనిల్</td>
                        <td className="py-3 px-4 text-right text-gray-900 text-lg">375</td>
                    </tr>
                    {/* Others */}
                    <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="py-3 px-4">కుమారస్వామి</td>
                        <td className="py-3 px-4 text-right">58</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                        <td className="py-3 px-4">రాజు</td>
                        <td className="py-3 px-4 text-right">17</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                        <td className="py-3 px-4">ఇతరులు (Bandi..)</td>
                        <td className="py-3 px-4 text-right">1</td>
                    </tr>
                </tbody>
            </table>
        </div>

        {/* --- MAJORITY FOOTER --- */}
        <div className="bg-green-600 text-white p-4 text-center">
            <p className="text-xs font-bold opacity-80 uppercase tracking-widest">విజయం మెజారిటీ</p>
            <p className="text-3xl font-extrabold text-yellow-300 drop-shadow-md">174 ఓట్లు</p>
        </div>

      </div>
      
      <p className="text-gray-500 mt-6 text-xs font-sans">Screenshot Ready 📸</p>
    </div>
  );
}