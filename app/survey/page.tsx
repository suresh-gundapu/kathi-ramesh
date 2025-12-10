import Image from "next/image";
import Link from "next/link";
import { Sree_Krushnadevaraya } from "next/font/google";

const skFont = Sree_Krushnadevaraya({ weight: "400", subsets: ["telugu"], display: "swap" });

export default function SurveyPostersPage() {
  // DATA (Realistic Tight Fight)
  // Total: 1823 | Polling: ~91% (~1660 Votes)
  // Ramesh: 765 (46%) | Thirupathi: 695 (42%) | Anil: 200 (12%)
  // Margin: 70 Votes
  
  const rameshPct = 46;
  const thirupathiPct = 42;
  // Anil gets remaining 12%

  return (
    <div className={`min-h-screen bg-gray-900 p-4 flex flex-col items-center gap-8 ${skFont.className}`}>
      
      {/* Navigation */}
      <div className="w-full max-w-[360px]">
        <Link href="/" className="text-white/50 text-xs border border-white/20 px-4 py-2 rounded-full font-sans hover:bg-white/10 hover:text-white transition inline-flex items-center gap-2">
            <span>←</span> Home
        </Link>
      </div>

      <h1 className="text-white/80 text-sm font-sans text-center -mb-4">👇 Poster 1: The Result (Pie Chart)</h1>

      {/* ================= POSTER 1: THE RESULT (Numbers & Graph) ================= */}
      <div className="w-[360px] h-[640px] bg-white rounded-xl overflow-hidden shadow-2xl relative flex flex-col border-[4px] border-blue-900 shrink-0">
          
          {/* Header */}
          <div className="bg-blue-900 text-white p-5 text-center relative border-b-4 border-yellow-500">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <p className="text-yellow-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-1">INDEPENDENT SURVEY</p>
              <h1 className="text-2xl font-extrabold leading-tight">
                  మాదన్నపేట ఎన్నికల<br/>
                  <span className="text-yellow-300 text-3xl">తుది ఫలితాల అంచనా</span>
              </h1>
              <p className="text-blue-200 text-[10px] mt-2 font-sans">తేదీ: 10 డిసెంబర్ 2025 | శాంపిల్: 1800 ఓటర్లు</p>
          </div>

          {/* Key Stats Row */}
          <div className="flex border-b border-gray-200 bg-gray-50 text-center divide-x divide-gray-200">
              <div className="w-1/2 p-2">
                  <p className="text-gray-500 text-[9px] font-bold uppercase">మొత్తం ఓటర్లు</p>
                  <p className="text-xl font-extrabold text-gray-800">1823</p>
              </div>
              <div className="w-1/2 p-2">
                  <p className="text-gray-500 text-[9px] font-bold uppercase">అంచనా పోలింగ్</p>
                  <p className="text-xl font-extrabold text-green-600">~1660 (91%)</p>
              </div>
          </div>

          {/* Chart Section */}
          <div className="flex-1 flex flex-col items-center justify-center p-4 bg-white relative">
              
              <h3 className="text-gray-800 font-bold text-sm mb-4 uppercase tracking-wide">ఓట్ల శాతం (Vote Share)</h3>
              
              {/* CSS Pie Chart */}
              <div className="relative w-52 h-52 rounded-full shadow-inner flex items-center justify-center mb-6"
                   style={{
                       background: `conic-gradient(
                          #f97316 0% ${rameshPct}%, 
                          #ef4444 ${rameshPct}% ${rameshPct + thirupathiPct}%, 
                          #3b82f6 ${rameshPct + thirupathiPct}% 100%
                       )`
                   }}>
                   <div className="w-36 h-36 bg-white rounded-full flex flex-col items-center justify-center shadow-lg z-10">
                       <p className="text-[10px] text-gray-400 font-bold uppercase">Leading</p>
                       <p className="text-3xl font-extrabold text-orange-600">46%</p>
                       <p className="text-[12px] text-orange-600 font-bold mt-1">కత్తి రమేష్</p>
                   </div>
              </div>

              {/* Legend Box */}
              <div className="w-full bg-gray-50 rounded-lg border border-gray-200 p-3 space-y-2">
                  <div className="flex justify-between items-center text-xs">
                      <div className="flex items-center font-bold text-gray-800"><span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>కత్తి రమేష్</div>
                      <span className="font-extrabold text-gray-900">~765 ఓట్లు</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                      <div className="flex items-center font-bold text-gray-800"><span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>గొల్ల తిరుపతి</div>
                      <span className="font-extrabold text-gray-900">~695 ఓట్లు</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                      <div className="flex items-center font-bold text-gray-800"><span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>అనిల్ (INC)</div>
                      <span className="font-extrabold text-gray-900">~200 ఓట్లు</span>
                  </div>
              </div>
          </div>

          {/* Footer - Verdict */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4 text-center">
              <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest mb-1">FINAL VERDICT</p>
              <h2 className="text-xl font-extrabold text-yellow-300 drop-shadow-md">కత్తి రమేష్ విజయం ఖాయం!</h2>
              <p className="text-[10px] mt-1 font-bold bg-white/20 inline-block px-3 py-0.5 rounded">మెజారిటీ: 70 +/- ఓట్లు</p>
          </div>
      </div>


      <h1 className="text-white/80 text-sm font-sans text-center -mb-4 pt-8">👇 Poster 2: The Logic (Caste Analysis)</h1>

      {/* ================= POSTER 2: THE ANALYSIS (Table & Reasons) ================= */}
      <div className="w-[360px] h-[640px] bg-white rounded-xl overflow-hidden shadow-2xl relative flex flex-col border-[4px] border-green-700 shrink-0 mb-10">
          
          {/* Header */}
          <div className="bg-green-800 text-white p-4 text-center border-b-4 border-yellow-500 relative">
              <h1 className="text-2xl font-extrabold leading-tight">
                  <span className="text-yellow-300">గెలుపు ఎవరిది?</span><br/>
                  ఎందుకు? ఎలా?
              </h1>
              <p className="text-green-200 text-[10px] mt-1 font-sans">క్షేత్ర స్థాయి పూర్తి విశ్లేషణ (Ground Report)</p>
          </div>

          {/* Caste Table */}
          <div className="p-3 bg-gray-50 border-b border-gray-200">
              <h3 className="text-gray-800 font-bold text-xs mb-2 uppercase tracking-wide border-l-4 border-green-700 pl-2">సామాజిక వర్గాల వారీగా (Caste Split)</h3>
              <div className="border border-gray-300 rounded overflow-hidden">
                  <table className="w-full text-[10px] font-sans text-center">
                      <thead className="bg-gray-200 text-gray-800 font-bold uppercase">
                          <tr>
                              <th className="py-2 px-1 text-left pl-2">వర్గం</th>
                              <th className="py-2 px-1 text-orange-600">రమేష్</th>
                              <th className="py-2 px-1 text-red-600">తిరుపతి</th>
                              <th className="py-2 px-1 text-blue-600">అనిల్</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white font-medium">
                          <tr>
                              <td className="py-2 px-1 text-left pl-2 font-bold">గౌడ (200+)</td>
                              <td className="bg-orange-100 font-bold text-orange-800">85%</td>
                              <td>10%</td>
                              <td>5%</td>
                          </tr>
                          <tr>
                              <td className="py-2 px-1 text-left pl-2 font-bold">ఎస్సీ (223)</td>
                              <td className="bg-orange-100 font-bold text-orange-800">75%</td>
                              <td>15%</td>
                              <td>10%</td>
                          </tr>
                          <tr>
                              <td className="py-2 px-1 text-left pl-2 font-bold">పెరుక (200+)</td>
                              <td>5%</td>
                              <td className="bg-red-100 font-bold text-red-800">90%</td>
                              <td>5%</td>
                          </tr>
                          <tr>
                              <td className="py-2 px-1 text-left pl-2 font-bold">ముదిరాజ్ (200)</td>
                              <td className="bg-orange-50 font-bold text-orange-800">35%</td>
                              <td>25%</td>
                              <td className="bg-blue-100 font-bold text-blue-800">40%</td>
                          </tr>
                          <tr>
                              <td className="py-2 px-1 text-left pl-2 font-bold">ఇతరులు (500)</td>
                              <td className="bg-orange-100 font-bold text-orange-800">60%</td>
                              <td>30%</td>
                              <td>10%</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>

          {/* Key Analysis Points */}
          <div className="p-4 flex-1 bg-white">
              <h3 className="text-gray-800 font-bold text-xs mb-3 uppercase tracking-wide border-l-4 border-yellow-500 pl-2">విజయం వెనుక ఉన్న కారణాలు</h3>
              <div className="space-y-3 font-sans">
                  
                  <div className="flex gap-2 items-start bg-orange-50 p-2 rounded-lg border border-orange-100">
                      <span className="text-lg">🤫</span>
                      <div>
                          <h4 className="font-bold text-gray-900 text-xs">సైలెంట్ ఓటింగ్ (Silent Wave)</h4>
                          <p className="text-[10px] text-gray-600 leading-tight">
                              డబ్బులు ఎవరి దగ్గర తీసుకున్నా, చివరికి "ఓటు మాత్రం రమేష్ కే" అనే సానుభూతి పవనం మహిళల్లో బలంగా ఉంది.
                          </p>
                      </div>
                  </div>

                  <div className="flex gap-2 items-start bg-blue-50 p-2 rounded-lg border border-blue-100">
                      <span className="text-lg">📉</span>
                      <div>
                          <h4 className="font-bold text-gray-900 text-xs">అనిల్ ప్రభావం (Anil Factor)</h4>
                          <p className="text-[10px] text-gray-600 leading-tight">
                              అనిల్ కేవలం 100-200 ఓట్లను (ముదిరాజ్/యూత్) మాత్రమే చీల్చే అవకాశం ఉంది. ఇది రమేష్ మెజారిటీని తగ్గించినా, గెలుపును ఆపలేదు.
                          </p>
                      </div>
                  </div>

                  <div className="flex gap-2 items-start bg-red-50 p-2 rounded-lg border border-red-100">
                      <span className="text-lg">🤝</span>
                      <div>
                          <h4 className="font-bold text-gray-900 text-xs">సామాజిక ఏకీకరణ</h4>
                          <p className="text-[10px] text-gray-600 leading-tight">
                              పెరుక మినహా మిగిలిన ప్రధాన కులాలు (గౌడ, ఎస్సీ, బీసీ) రమేష్ వైపు ఏకమవడం (Consolidation) గెలుపుకు ప్రధాన కారణం.
                          </p>
                      </div>
                  </div>

              </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-800 text-gray-400 p-2 text-center text-[9px] font-sans">
              Survey Date: Dec 10, 2025 | Sample: 1800 Voters
          </div>
      </div>

    </div>
  );
}