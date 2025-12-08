import Image from "next/image";
import Link from "next/link";
import { Sree_Krushnadevaraya } from "next/font/google";

const skFont = Sree_Krushnadevaraya({ weight: "400", subsets: ["telugu"], display: "swap" });

export default function StatusPoster() {
  return (
    <div className={`min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 ${skFont.className}`}>
      
      {/* Back Button */}
      <div className="mb-4 w-full max-w-[360px]">
        <Link href="/" className="text-orange-300/70 text-xs border border-orange-300/30 px-3 py-1 rounded-full font-sans hover:bg-orange-300/10 hover:text-orange-300 transition flex items-center w-fit">
            <span>←</span> Home
        </Link>
      </div>

      {/* ================= MOBILE STATUS POSTER (Responsive Wrapper) ================= */}
      {/* FIX: 'w-full max-w-[360px]' ensures it fits small screens but stops at poster size */}
      <div className="w-full max-w-[360px] h-[640px] bg-gray-900 rounded-xl overflow-hidden shadow-2xl relative flex flex-col border-[3px] border-orange-600 shrink-0">
        
        {/* === LAYER 1: UDYAMAM PHOTO (Background - Top 65%) === */}
        <div className="absolute top-0 left-0 w-full h-[65%] z-0 overflow-hidden">
            <Image 
                src="/udyamam1.jpg" 
                alt="Uppal Rail Roko" 
                fill 
                className="object-cover object-right opacity-80" 
                priority
            />
            
            {/* Gradients for Text Visibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/90 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
        </div>

        {/* === LAYER 2: TEXT CONTENT (Top & Middle) === */}
        <div className="relative z-10 p-4 pt-10 text-left">
            
            {/* Emotional Badge */}
            <div className="inline-block bg-red-600 px-3 py-1 rounded-full border border-orange-400 shadow-md mb-4 ml-1">
                <p className="text-yellow-100 text-[10px] font-bold tracking-wider uppercase">
                    🔥 జై తెలంగాణ - జై మాదన్నపేట
                </p>
            </div>

            {/* MAIN HEADING */}
            <div className="pl-1">
                <h1 className="text-3xl font-extrabold text-white leading-tight drop-shadow-xl">
                    నాడు <span className="text-yellow-400">తెలంగాణ జెండా</span><br/>
                    పట్టిన చేతులే...
                </h1>
                
                <h2 className="text-2xl font-bold text-orange-100 leading-tight drop-shadow-md mt-3">
                    నేడు మన <span className="text-orange-500 text-3xl">తలరాత</span> <br/>
                    మార్చే చేతులు!
                </h2>
            </div>

            {/* Quote Box */}
            <div className="mt-8 bg-black/60 backdrop-blur-sm border-l-4 border-orange-500 p-3 rounded-r-lg text-left max-w-[90%]">
                <p className="text-gray-200 text-sm italic leading-relaxed">
                    "ఉప్పల్ రైల్ రోకోలోనైనా... <br/>నేడు మన ఊరి సమస్యలోనైనా... <br/>
                    <span className="text-yellow-400 font-bold not-italic">ముందుండేది మన రమేషన్నే!</span>"
                </p>
            </div>
        </div>

        {/* === LAYER 3: BOTTOM SECTION (Current Photo & Symbol) === */}
        <div className="mt-auto h-[35%] relative z-20">
            
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900 via-orange-900/90 to-transparent"></div>

            <div className="absolute bottom-0 w-full h-full flex items-end justify-between px-2 pb-2">
                
                {/* LEFT: SYMBOL & NAME */}
                <div className="flex flex-col items-center justify-center w-[45%] pb-4 pl-2">
                     <p className="text-orange-200 text-[10px] font-bold uppercase mb-1">మీ స్వతంత్ర అభ్యర్థి</p>
                     <h3 className="text-2xl font-extrabold text-white mb-2 leading-none">కత్తి రమేష్</h3>
                     
                     <div className="bg-white p-2 rounded-xl shadow-lg border-2 border-orange-500">
                        <div className="relative w-12 h-12">
                            <Image src="/symbol.png" alt="Scissors" fill className="object-contain" />
                        </div>
                     </div>
                     <p className="text-yellow-400 font-extrabold text-lg mt-1">కత్తెర గుర్తు</p>
                </div>

                {/* RIGHT: CURRENT PHOTO */}
                <div className="relative w-[55%] h-[240px] -mr-4 -mb-0">
                    <Image 
                        src="/ramesh-namaste.png" 
                        alt="Kathi Ramesh Current" 
                        fill 
                        className="object-contain object-bottom drop-shadow-md" 
                        priority 
                    />
                </div>
            </div>
        </div>

        {/* Footer Stripe */}
        <div className="bg-orange-700 text-white text-center py-1 z-30 border-t border-orange-400">
            <p className="text-[10px] font-bold">పోలింగ్ తేదీ: 11-12-2025 (గురువారం)</p>
        </div>

      </div>
      
      <p className="text-gray-500 mt-4 text-xs font-sans text-center">
        Ready for Mobile Screenshot 📸
      </p>
    </div>
  );
}