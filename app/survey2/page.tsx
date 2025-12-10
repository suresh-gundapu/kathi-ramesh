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

      {/* ================= POSTER 2: THE LOGIC (Mobile Screenshot Ready) ================= */}
      <div className="w-[360px] h-[680px] bg-white rounded-xl overflow-hidden shadow-2xl relative flex flex-col border-[4px] border-green-700">
          
          {/* Header */}
          <div className="bg-green-800 text-white p-4 text-center border-b-4 border-yellow-500 relative shrink-0">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <p className="text-green-200 text-[10px] font-bold tracking-widest uppercase mb-1">GROUND REPORT 2025</p>
              <h1 className="text-2xl font-extrabold leading-tight">
                  <span className="text-yellow-300">గెలుపు ఎవరిది?</span><br/>
                  ఎందుకు? ఎలా?
              </h1>
              <p className="text-green-100 text-[10px] mt-1 font-sans">కులాల వారీగా క్షేత్ర స్థాయి సర్వే వివరాలు</p>
          </div>

          {/* Caste Table (The Core Content) */}
          <div className="p-3 bg-gray-50 border-b border-gray-200 flex-1">
              <h3 className="text-gray-800 font-bold text-xs mb-2 uppercase tracking-wide border-l-4 border-green-700 pl-2">సామాజిక వర్గాల వారీగా (Caste Split)</h3>
              
              <div className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                  <table className="w-full text-[10px] font-sans text-center">
                      <thead className="bg-gray-200 text-gray-800 font-bold uppercase">
                          <tr>
                              <th className="py-2 px-1 text-left pl-2 border-r border-gray-300">వర్గం (ఓట్లు)</th>
                              <th className="py-2 px-1 text-orange-600 border-r border-gray-300">రమేష్</th>
                              <th className="py-2 px-1 text-red-600 border-r border-gray-300">తిరుపతి</th>
                              <th className="py-2 px-1 text-blue-600">అనిల్</th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white font-bold text-gray-700">
                          {/* Goud */}
                          <tr>
                              <td className="py-1.5 px-1 text-left pl-2 border-r border-gray-200">గౌడ (200+)</td>
                              <td className="bg-orange-100 text-orange-800 border-r border-gray-200">90%</td>
                              <td className="border-r border-gray-200">8%</td>
                              <td className="text-gray-400">2%</td>
                          </tr>
                          {/* SC */}
                          <tr>
                              <td className="py-1.5 px-1 text-left pl-2 border-r border-gray-200">ఎస్సీ (223)</td>
                              <td className="bg-orange-100 text-orange-800 border-r border-gray-200">75%</td>
                              <td className="border-r border-gray-200">20%</td>
                              <td className="text-gray-400">5%</td>
                          </tr>
                          {/* Peruka */}
                          <tr>
                              <td className="py-1.5 px-1 text-left pl-2 border-r border-gray-200">పెరుక (200+)</td>
                              <td className="border-r border-gray-200">5%</td>
                              <td className="bg-red-100 text-red-800 border-r border-gray-200">93%</td>
                              <td className="text-gray-400">2%</td>
                          </tr>
                          {/* Mudiraj */}
                          <tr>
                              <td className="py-1.5 px-1 text-left pl-2 border-r border-gray-200">ముదిరాజ్ (200)</td>
                              <td className="text-orange-600 border-r border-gray-200">30%</td>
                              <td className="border-r border-gray-200">15%</td>
                              <td className="bg-blue-100 text-blue-800">55%</td>
                          </tr>
                          {/* Kapu - ADDED HERE */}
                          <tr>
                              <td className="py-1.5 px-1 text-left pl-2 border-r border-gray-200 bg-yellow-50">కాపు (200+)</td>
                              <td className="bg-orange-100 text-orange-800 border-r border-gray-200">55%</td>
                              <td className="border-r border-gray-200">35%</td>
                              <td className="text-blue-600">10%</td>
                          </tr>
                          {/* Others */}
                          <tr>
                              <td className="py-1.5 px-1 text-left pl-2 border-r border-gray-200">ఇతరులు (500)</td>
                              <td className="bg-orange-100 text-orange-800 border-r border-gray-200">55%</td>
                              <td className="border-r border-gray-200">35%</td>
                              <td className="text-blue-600">10%</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>

          {/* Key Analysis Points */}
          <div className="p-4 flex-1 bg-white flex flex-col justify-center">
              <h3 className="text-gray-800 font-bold text-xs mb-3 uppercase tracking-wide border-l-4 border-yellow-500 pl-2">విజయం వెనుక ఉన్న కారణాలు</h3>
              <div className="space-y-3 font-sans">
                  
                  <div className="flex gap-2 items-start bg-orange-50 p-2 rounded-lg border border-orange-100 shadow-sm">
                      <span className="text-lg">🤝</span>
                      <div>
                          <h4 className="font-bold text-orange-900 text-xs">కులం vs ఊరు (Consolidation)</h4>
                          <p className="text-[10px] text-gray-700 leading-tight mt-0.5">
                              పెరుక మినహా గౌడ, ఎస్సీ, కాపు, బీసీ కులాలన్నీ రమేష్ వైపు ఏకమవడం (Consolidation) గెలుపుకు ప్రధాన కారణం.
                          </p>
                      </div>
                  </div>

                  <div className="flex gap-2 items-start bg-blue-50 p-2 rounded-lg border border-blue-100 shadow-sm">
                      <span className="text-lg">📉</span>
                      <div>
                          <h4 className="font-bold text-blue-900 text-xs">అనిల్ పరిమిత ప్రభావం</h4>
                          <p className="text-[10px] text-gray-700 leading-tight mt-0.5">
                              గౌడ, పెరుక వంటి ప్రధాన కులాల్లో అనిల్ ప్రభావం 1-2% మాత్రమే. కేవలం ముదిరాజ్ ఓట్లు చీల్చినా ఫలితం మారదు.
                          </p>
                      </div>
                  </div>

                  <div className="flex gap-2 items-start bg-green-50 p-2 rounded-lg border border-green-100 shadow-sm">
                      <span className="text-lg">🤫</span>
                      <div>
                          <h4 className="font-bold text-green-900 text-xs">సైలెంట్ వేవ్ (Women)</h4>
                          <p className="text-[10px] text-gray-700 leading-tight mt-0.5">
                              మహిళల్లో రమేష్ పట్ల ఉన్న సానుభూతి, చివరి నిమిషంలో నిర్ణయాత్మక శక్తిగా మారనుంది.
                          </p>
                      </div>
                  </div>

              </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-800 text-gray-400 p-2 text-center shrink-0">
              <p className="text-[9px] font-sans">Independent Survey | Date: Dec 10, 2025</p>
          </div>
      </div>

    </div>
  );
}