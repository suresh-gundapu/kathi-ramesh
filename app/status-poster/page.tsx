import Image from "next/image";
import Link from "next/link";
import { Sree_Krushnadevaraya } from "next/font/google";

const skFont = Sree_Krushnadevaraya({ weight: "400", subsets: ["telugu"], display: "swap" });

export default function StatusPoster() {
  return (
    <div className={`min-h-screen bg-gray-900 p-2 flex flex-col items-center justify-center ${skFont.className}`}>
      
      {/* Back Button */}
      <div className="mb-2">
        <Link href="/" className="text-white/50 text-xs border border-white/20 px-3 py-1 rounded-full font-sans hover:bg-white/10 hover:text-white transition">
            ← Home
        </Link>
      </div>

      {/* ================= MOBILE STATUS POSTER CONTAINER ================= */}
      {/* Increased Height to 800px to fit ALL points perfectly without cutting */}
      <div className="w-[360px] h-[800px] bg-white rounded-xl overflow-hidden shadow-2xl relative flex flex-col border-[3px] border-orange-600">
        
        {/* --- 1. HEADER SECTION --- */}
        <div className="bg-gradient-to-br from-orange-600 via-red-600 to-red-800 h-[180px] relative overflow-hidden shrink-0">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            {/* Left Side: TEXT & SYMBOL */}
            <div className="absolute top-4 left-3 z-20 w-[55%]">
                <p className="text-yellow-300 text-[10px] font-bold tracking-widest uppercase mb-0.5">
                    స్వతంత్ర సర్పంచ్ అభ్యర్థి
                </p>
                <h1 className="text-2xl font-extrabold text-white leading-tight drop-shadow-md">
                    మాదన్నపేట<br/>
                    <span className="text-3xl text-yellow-100">ప్రగతికి బాట</span>
                </h1>
                
                <div className="mt-2 bg-white rounded-lg p-1.5 pr-3 inline-flex items-center shadow-[0_4px_10px_rgba(0,0,0,0.3)] border-l-4 border-yellow-400">
                    <div className="relative w-8 h-8 mr-2">
                        <Image src="/symbol.png" alt="Scissors" fill className="object-contain" />
                    </div>
                    <div>
                        <p className="text-[9px] text-gray-500 font-bold leading-none">మన గుర్తు</p>
                        <p className="text-lg font-extrabold text-red-600 leading-none mt-0.5">కత్తెర</p>
                    </div>
                </div>
            </div>

            {/* Right Side: RAMESH PHOTO */}
            <div className="absolute bottom-0 right-[-10px] w-[180px] h-[180px] z-10">
                <Image 
                    src="/ramesh-namaste.png" 
                    alt="Kathi Ramesh" 
                    fill 
                    className="object-cover object-top drop-shadow-[-5px_0_10px_rgba(0,0,0,0.3)]" 
                    priority 
                />
            </div>
        </div>

        {/* --- 2. MANIFESTO BODY (FULL CONTENT RESTORED) --- */}
        <div className="flex-1 bg-gradient-to-b from-orange-50 to-white p-2.5 pt-4 relative flex flex-col justify-start">
            
            <div className="absolute -top-3 left-3 bg-yellow-400 text-red-900 px-4 py-1 rounded-full border-2 border-white shadow-sm z-20">
                <h3 className="text-xs font-extrabold tracking-wide">నా ప్రణాళిక - నా వాగ్దానం</h3>
            </div>

            <div className="space-y-1.5 mt-2">
                
                {/* 1. YOUTH SECTION (Green) */}
                <div className="bg-green-50 p-1.5 rounded-lg border-l-4 border-green-600 shadow-sm border border-green-100">
                    <h4 className="text-green-800 text-[10px] font-extrabold mb-0.5 uppercase border-b border-green-200 pb-0.5">
                        🏏 యువత & ఉపాధి
                    </h4>
                    <ul className="text-[9px] font-bold text-gray-800 leading-tight space-y-0.5 pl-1">
                        <li>👉 గ్రామంలో గ్రంథాలయం (Library) ఏర్పాటు.</li>
                        <li>👉 విద్య, ఉద్యోగ గైడెన్స్ & స్కిల్ డెవలప్‌మెంట్.</li>
                        <li>👉 క్రీడా మైదానం (Playground) ఏర్పాటు.</li>
                    </ul>
                </div>

                {/* 2. Culture (Orange) */}
                <div className="bg-white p-1.5 rounded-lg border-l-4 border-orange-500 shadow-sm">
                    <h4 className="text-orange-800 text-[10px] font-extrabold mb-0.5 uppercase">🛕 సంస్కృతి & అభివృద్ధి</h4>
                    <ul className="text-[9px] font-bold text-gray-700 leading-tight space-y-0.5 pl-1">
                        <li>👉 గ్రామ దేవతల పునఃప్రతిష్టాపన & బొడ్డు రాయి ఉత్సవం.</li>
                        <li>👉 పోచమ్మ గుడి చుట్టూ CC, మండపం, కల్వర్ట్ నిర్మాణం.</li>
                        <li>👉 మారెమ్మ గుడి ప్రహరీ & స్వర్గ రధం ఏర్పాటు.</li>
                    </ul>
                </div>

                {/* 3. Infrastructure (Blue) */}
                <div className="bg-white p-1.5 rounded-lg border-l-4 border-blue-600 shadow-sm">
                    <h4 className="text-blue-800 text-[10px] font-extrabold mb-0.5 uppercase">💡 మౌలిక వసతులు</h4>
                    <ul className="text-[9px] font-bold text-gray-700 leading-tight space-y-0.5 pl-1">
                        <li>👉 ప్రతి ఇంటికి విద్యుత్, మంచినీరు & పక్కా డ్రైనేజీ.</li>
                        <li>👉 బస్ స్టాండ్ నిర్మాణం & మూత్రశాలల ఏర్పాటు.</li>
                        <li>👉 మిగిలిన CC రోడ్లు, లైటింగ్ & కల్వర్టులు పూర్తి చేయుట.</li>
                        <li>👉 RWS బావులు & చెక్ డ్యామ్ వరకు మెటల్ రోడ్లు.</li>
                    </ul>
                </div>

                {/* 4. Sanitation (Teal) */}
                <div className="bg-white p-1.5 rounded-lg border-l-4 border-teal-600 shadow-sm">
                    <h4 className="text-teal-800 text-[10px] font-extrabold mb-0.5 uppercase">🌿 పారిశుధ్యం</h4>
                    <ul className="text-[9px] font-bold text-gray-700 leading-tight space-y-0.5 pl-1">
                        <li>👉 చెరువుల పూడిక తీత, కట్టల క్లీనింగ్ & SRSP కెనాల్ స్వచ్ఛత.</li>
                        <li>👉 ప్రతి వీధికి 3 చెత్త కుండీలు & ఒకరికి బాధ్యత.</li>
                        <li>👉 కోతుల బెడదకు శాశ్వత పరిష్కారం.</li>
                    </ul>
                </div>

                {/* 5. Governance (Purple) */}
                <div className="bg-white p-1.5 rounded-lg border-l-4 border-purple-600 shadow-sm">
                    <h4 className="text-purple-800 text-[10px] font-extrabold mb-0.5 uppercase">🤝 పాలన</h4>
                    <ul className="text-[9px] font-bold text-gray-700 leading-tight space-y-0.5 pl-1">
                        <li>👉 ఇంటి పర్మిషన్ సులభతరం చేయుట.</li>
                        <li>👉 గ్రామ సభ తీర్మానాలు & జమాఖర్చులు డిస్ప్లే బోర్డులో ప్రదర్శన.</li>
                        <li>👉 కేంద్ర, రాష్ట్ర నిధుల కోసం కొట్లాడి పనులు సాధిస్తా.</li>
                    </ul>
                </div>

            </div>
        </div>

        {/* --- 3. FOOTER (Fixed at Bottom) --- */}
        <div className="bg-gray-900 text-white p-2.5 flex items-center justify-between border-t-4 border-yellow-500 shrink-0 relative z-20 mt-auto">
            <div className="pl-1">
                <p className="text-[10px] text-gray-400 font-sans">అభివృద్ధి కోసం...</p>
                <p className="text-lg font-extrabold text-yellow-400">కత్తెర గుర్తుకే ఓటు!</p>
            </div>
            <div className="text-right pr-1">
                <p className="text-base font-bold text-white">కత్తి రమేష్</p>
                <div className="flex items-center justify-end gap-2 text-[10px] text-gray-300 mt-0.5">
                    <span className="bg-white/10 px-2 py-0.5 rounded border border-white/20">తేదీ: 11-12-2025</span>
                </div>
            </div>
        </div>

      </div>
      
      <p className="text-gray-500 mt-4 text-xs font-sans text-center">
        Screenshot this & Share! 📸
      </p>
    </div>
  );
}