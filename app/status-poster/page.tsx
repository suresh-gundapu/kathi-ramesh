import Image from "next/image";
import Link from "next/link";
import { Sree_Krushnadevaraya, Ramabhadra } from "next/font/google";

const ramaFont = Ramabhadra({ weight: "400", subsets: ["telugu"], display: "swap" });
const skFont = Sree_Krushnadevaraya({ weight: "400", subsets: ["telugu"], display: "swap" });

export default function InvitationPoster() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-0">
      
     

      {/* ================= INVITATION POSTER (Fixed Head Visibility) ================= */}
      <div className={`w-[380px] h-[740px] bg-gradient-to-b from-[#4a0404] via-[#8b0000] to-[#2e0202] relative overflow-hidden shadow-2xl border-[3px] border-[#ffd700] flex flex-col ${skFont.className}`}>
        
        {/* --- BACKGROUND PATTERN --- */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] z-0"></div>
        {/* Top Toranam */}
        <div className="absolute top-0 left-0 w-full h-8 z-20 flex justify-between px-1">
             {[...Array(12)].map((_, i) => (
                <div key={i} className="w-8 h-10 bg-green-700 rounded-b-full border border-yellow-400 -mt-4 shadow-sm"></div>
            ))}
        </div>

        {/* --- 1. HEADER SECTION --- */}
        <div className="relative z-10 pt-10 text-center px-2">
            <h1 className={`${ramaFont.className} text-2xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] leading-tight`}>
                మాదన్నపేట గ్రామ పంచాయతీ <br/>
                <span className="text-yellow-400 text-xl">నూతన పాలకవర్గం</span>
            </h1>
            
            {/* Title Badge */}
            <div className="mt-2 mb-2">
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white px-5 py-1 text-lg font-bold border-y-2 border-yellow-500 shadow-[0_0_15px_rgba(255,215,0,0.4)] inline-block rounded-lg">
                    ప్రమాణస్వీకారోత్సవ ఆహ్వానము
                </span>
            </div>

            {/* Date Line */}
            <p className="text-yellow-300 text-base font-bold drop-shadow-md">
                తేదీ: <span className="text-white">22-12-2025</span> సోమవారం
            </p>
        </div>

        {/* --- 2. TIME & VENUE BOXES --- */}
        <div className="relative z-10 flex justify-between px-4 mt-2 gap-3">
            <div className="border border-yellow-500/50 bg-black/20 rounded-lg p-1.5 w-1/2 text-center backdrop-blur-sm">
                <p className="text-orange-300 text-[10px] font-bold">స్థలం:</p>
                <p className="text-white text-xs leading-tight font-bold">
                    గ్రామ పంచాయతీ కార్యాలయం, <br/> మాదన్నపేట
                </p>
            </div>
            <div className="border border-yellow-500/50 bg-black/20 rounded-lg p-1.5 w-1/2 text-center backdrop-blur-sm flex flex-col justify-center">
                <p className="text-orange-300 text-[10px] font-bold">సమయం:</p>
                <p className="text-white text-base font-bold leading-none mt-0.5">
                    ఉ|| 11:00 గం.లకు
                </p>
            </div>
        </div>

        {/* --- 3. HERO IMAGE (Head Fully Visible Fix) --- */}
        <div className="relative flex-1 w-full flex justify-center items-end overflow-hidden z-0 -mt-8">
            
            {/* Aura Glow - Lowered */}
            <div className="absolute bottom-10 w-[260px] h-[260px] bg-orange-500 rounded-full blur-[70px] opacity-40"></div>
            
            {/* IMAGE CONTAINER */}
            {/* Changed styling to ensure head is visible and image is pushed down */}
            <div className="relative w-[420px] h-[450px] z-10 translate-y-2"> 
                <Image 
                    src="/ramesh-new.png" 
                    alt="Kathi Ramesh" 
                    fill 
                    className="object-contain object-center drop-shadow-[0_-5px_15px_rgba(0,0,0,0.6)] scale-105"
                    // Removed 'maskImage' from top, applied only slightly at very bottom if needed
                    // object-contain ensures the full head fits if crop is tight
                    // object-bottom aligns it to the bottom
                />
              
            </div>
        </div>

        {/* --- 4. NAME PLATE (Overlapping Chest/Waist) --- */}
        <div className="relative z-20 -mt-24 mb-2 px-4">
             {/* Trapezoid Shape Background */}
            <div className="bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600 h-16 w-full transform -skew-x-12 border-2 border-white shadow-2xl flex items-center justify-center relative">
                 <div className="transform skew-x-12 text-center leading-none">
                    <h2 className={`${ramaFont.className} text-3xl font-black text-[#4a0404] drop-shadow-sm`}>
                        కత్తి రమేష్
                    </h2>
                    <p className="text-white font-extrabold text-sm tracking-widest bg-[#4a0404] px-4 py-0.5 rounded-full inline-block mt-1 shadow-inner">
                        సర్పంచ్ - మాదన్నపేట
                    </p>
                 </div>
            </div>
             <p className="text-center text-yellow-200 text-[10px] font-bold mt-2 opacity-90">
                 మరియు గ్రామపంచాయతీ పాలకవర్గం
             </p>
        </div>

        {/* --- 5. FOOTER CONTENT --- */}
        <div className="relative z-10 bg-black/50 px-3 py-3 text-center border-t border-white/10 backdrop-blur-md">
            <p className="text-white text-[10px] leading-relaxed font-bold opacity-90 px-2">
                మా మీద నమ్మకంతో మమ్ములను ఆశీర్వదించి మాదన్నపేట గ్రామ సర్పంచ్ గా, ఉప సర్పంచ్ గా, వార్డు సభ్యులుగా ఎన్నుకున్న గ్రామ ప్రజలకు ధన్యవాదాలు. 
                ఈ ప్రమాణస్వీకార మహోత్సవానికి ప్రజలందరూ అధిక సంఖ్యలో పాల్గొని జయప్రదం చేయగలరని కోరుతున్నాము.
            </p>

            <div className="mt-2 text-yellow-400 text-[9px] font-bold border-t border-white/10 pt-2">
                మిత్రులకు, శ్రేయోభిలాషులకు, అధికారులకు, అనధికారులకు, పాత్రికేయ మిత్రులకు...
            </div>
            
            <div className="mt-1 pb-1">
                <span className={`${ramaFont.className} text-xl font-bold text-white drop-shadow-md`}>
                    స్వాగతం - సుస్వాగతం
                </span>
            </div>
        </div>

        {/* Bottom Border Decoration */}
        <div className="h-2 w-full bg-[url('https://www.transparenttextures.com/patterns/az-subtle.png')] bg-yellow-500"></div>

      </div>
    </div>
  );
}