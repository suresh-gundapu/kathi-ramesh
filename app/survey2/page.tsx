import Image from "next/image";
import Link from "next/link";
import { Sree_Krushnadevaraya } from "next/font/google";

const skFont = Sree_Krushnadevaraya({ weight: "400", subsets: ["telugu"], display: "swap" });

export default function SurveyAnalysisPoster() {
  return (
    <div className={`min-h-screen bg-gray-900 p-4 flex flex-col items-center justify-center ${skFont.className}`}>
      
      {/* Navigation */}
      <div className="mb-4">
        <Link href="/" className="text-white/50 text-xs border border-white/20 px-4 py-2 rounded-full font-sans hover:bg-white/10 hover:text-white transition">
            ← Home
        </Link>
      </div>

      {/* ================= POSTER 2: DETAILED ANALYSIS (360x700) ================= */}
      <div className="w-[360px] h-[720px] bg-white rounded-xl overflow-hidden shadow-2xl relative flex flex-col border-[4px] border-blue-800">
          
          {/* Header */}
          <div className="bg-blue-900 text-white p-4 text-center border-b-4 border-yellow-500 relative shrink-0">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <p className="text-yellow-300 text-[10px] font-bold tracking-widest uppercase mb-1">GROUND REPORT 2025</p>
              <h1 className="text-2xl font-extrabold leading-tight">
                  సామాజిక వర్గాల వారీగా<br/>
                  <span className="text-yellow-400 text-3xl">ఓట్ల చీలిక & ఫలితం</span>
              </h1>
          </div>

          {/* Caste Table (Comprehensive) */}
          <div className="p-2 bg-gray-50 border-b border-gray-200 flex-1 overflow-hidden flex flex-col">
              <h3 className="text-gray-800 font-bold text-[11px] mb-2 uppercase tracking-wide border-l-4 border-blue-800 pl-2">క్షేత్ర స్థాయి పక్కా లెక్కలు</h3>
              
              <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm flex-1">
                  <table className="w-full text-[10px] font-sans text-center h-full">
                      <thead className="bg-gray-200 text-gray-900 font-extrabold uppercase">
                          <tr>
                              <th className="py-2 px-1 text-left pl-2 border-r border-gray-300 w-[35%]">వర్గం (ఓట్లు)</th>
                              <th className="py-2 px-1 text-orange-600 border-r border-gray-300 w-[22%]">రమేష్</th>
                              <th className="py-2 px-1 text-red-600 border-r border-gray-300 w-[22%]">తిరుపతి</th>
                              <th className="py-2 px-1 text-blue-600 w-[21%]">అనిల్</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white font-bold text-gray-800">
                          {/* Goud - Strong Ramesh */}
                          <tr className="bg-orange-50">
                              <td className="py-1.5 px-1 text-left pl-2 border-r border-gray-200">గౌడ (200+)</td>
                              <td className="text-orange-700 border-r border-gray-200 text-sm">90%</td>
                              <td className="border-r border-gray-200">8%</td>
                              <td className="text-gray-400">2%</td>
                          </tr>
                          {/* SC - Strong Ramesh */}
                          <tr className="bg-orange-50">
                              <td className="py-1.5 px-1 text-left pl-2 border-r border-gray-200">ఎస్సీ (223)</td>
                              <td className="text-orange-700 border-r border-gray-200 text-sm">75%</td>
                              <td className="border-r border-gray-200">20%</td>
                              <td className="text-gray-400">5%</td>
                          </tr>
                          {/* Peruka - Strong Thirupathi */}
                          <tr>
                              <td className="py-1.5 px-1 text-left pl-2 border-r border-gray-200">పెరుక (200+)</td>
                              <td className="border-r border-gray-200">5%</td>
                              <td className="bg-red-100 text-red-700 border-r border-gray-200 text-sm">93%</td>
                              <td className="text-gray-400">2%</td>
                          </tr>
                          {/* Mudiraj - Split to Anil */}
                          <tr>
                              <td className="py-1.5 px-1 text-left pl-2 border-r border-gray-200">ముదిరాజ్ (200)</td>
                              <td className="border-r border-gray-200">30%</td>
                              <td className="border-r border-gray-200">20%</td>
                              <td className="bg-blue-100 text-blue-700 text-sm">50%</td>
                          </tr>
                          {/* Kapu - Lean Ramesh */}
                          <tr>
                              <td className="py-1.5 px-1 text-left pl-2 border-r border-gray-200">కాపు (200+)</td>
                              <td className="bg-orange-100 text-orange-700 border-r border-gray-200">55%</td>
                              <td className="border-r border-gray-200">35%</td>
                              <td className="text-blue-600">10%</td>
                          </tr>
                          {/* Yadav/Chakali - 50-50 Split */}
                          <tr>
                              <td className="py-1.5 px-1 text-left pl-2 border-r border-gray-200">యాదవ్/చాకలి</td>
                              <td className="bg-gray-100 border-r border-gray-200">50%</td>
                              <td className="bg-gray-100 border-r border-gray-200">50%</td>
                              <td className="text-gray-400">0%</td>
                          </tr>
                          {/* Vaddera/Others - 50-50 Split */}
                          <tr>
                              <td className="py-1.5 px-1 text-left pl-2 border-r border-gray-200">వడ్డెర/ఇతరులు</td>
                              <td className="bg-gray-100 border-r border-gray-200">50%</td>
                              <td className="bg-gray-100 border-r border-gray-200">50%</td>
                              <td className="text-gray-400">0%</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>

          {/* Key Analysis Points */}
          <div className="p-4 bg-white shrink-0">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 space-y-2">
                  <p className="text-[11px] text-gray-800 font-bold border-b border-yellow-200 pb-1">
                      🔍 కీలక పరిశీలన:
                  </p>
                  <ul className="list-disc pl-4 text-[10px] text-gray-700 font-sans leading-relaxed space-y-1">
                      <li>
                          <strong>ఇతరులు (BC) 50-50:</strong> యాదవ్, చాకలి, వడ్డెర వంటి కులాల ఓట్లు ఇద్దరి మధ్యా సమానంగా చీలిపోతున్నాయి. ఇక్కడ ఎవరికీ స్పష్టమైన ఆధిక్యం లేదు.
                      </li>
                      <li>
                          <strong>రమేష్ బలం:</strong> ఇతరులు చీలిపోయినా, <strong>గౌడ మరియు ఎస్సీ</strong> కులాల ఏకపక్ష మద్దతు రమేష్ ని ముందంజలో ఉంచుతోంది.
                      </li>
                      <li>
                          <strong>పెరుక vs ఊరు:</strong> పెరుక ఓట్లు గంపగుత్తగా తిరుపతికి పడినా, మిగతా వర్గాల ఏకీకరణ రమేష్ కి ప్లస్ అయ్యింది.
                      </li>
                  </ul>
              </div>
          </div>

          {/* FINAL VERDICT FOOTER */}
          <div className="bg-gradient-to-r from-orange-700 to-red-700 text-white p-4 text-center shrink-0">
              <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest mb-1">FINAL VERDICT</p>
              <h2 className="text-xl font-extrabold text-yellow-300 drop-shadow-md">కత్తి రమేష్ గెలుపు తథ్యం!</h2>
              <div className="mt-2 inline-flex items-center justify-center gap-2 bg-black/30 px-4 py-1.5 rounded-full border border-white/30">
                  <span className="text-[10px] font-bold text-white uppercase">అంచనా మెజారిటీ:</span>
                  <span className="text-lg font-extrabold text-white">150 - 200 ఓట్లు</span>
              </div>
          </div>
      </div>

    </div>
  );
}