import Image from "next/image";
import Link from "next/link";
import { Sree_Krushnadevaraya } from "next/font/google";

const skFont = Sree_Krushnadevaraya({ weight: "400", subsets: ["telugu"], display: "swap" });

export default function RajaiahPosters() {
  return (
    <div className={`min-h-screen bg-gray-900 p-4 flex flex-col items-center gap-8 ${skFont.className}`}>
      
      {/* Navigation */}
      <div className="w-full max-w-[360px]">
        <Link href="/" className="text-white/50 text-xs border border-white/20 px-4 py-2 rounded-full font-sans hover:bg-white/10 hover:text-white transition inline-flex items-center gap-2">
            <span>←</span> Back to Home
        </Link>
      </div>

      <h1 className="text-pink-400 text-sm font-sans font-bold text-center -mb-4">👇 Poster 1: Pink Theme</h1>

      {/* ================= POSTER 1: PINK THEME (UNCHANGED - PERFECT) ================= */}
      <div className="w-[360px] h-[640px] bg-gradient-to-b from-pink-700 via-pink-600 to-pink-800 rounded-xl overflow-hidden shadow-2xl relative flex flex-col border-[4px] border-white shrink-0">
          <div className="pt-8 pb-2 text-center relative z-10">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-white/20 px-4 py-1 rounded-full border border-white/30 w-[90%]">
                  <p className="text-white text-[10px] font-bold uppercase tracking-widest">JAI TELANGANA - JAI MADANNAPET</p>
              </div>
              <h1 className="text-3xl font-extrabold text-white drop-shadow-md mt-6 leading-tight">
                  మాదన్నపేట<br/>
                  <span className="text-yellow-300 text-4xl">ఉప సర్పంచ్ గా విజయం!</span>
              </h1>
          </div>
          <div className="flex-1 relative flex flex-col items-center">
              <div className="px-6 text-center mt-4 relative z-20">
                  <p className="text-white font-bold text-sm leading-relaxed drop-shadow-sm">
                      "నన్ను ఏకగ్రీవంగా ఎన్నుకున్న వార్డు మెంబర్లకు మరియు గ్రామ ప్రజలకు నా హృదయపూర్వక ధన్యవాదాలు."
                  </p>
              </div>
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-60 h-60 bg-pink-400 rounded-full blur-3xl opacity-40"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[340px] h-[400px] z-10">
                  <Image src="/rajaiah.png" alt="Gorre Rajaiah" fill className="object-contain object-bottom drop-shadow-2xl" priority />
              </div>
          </div>
          <div className="bg-white p-4 text-center z-20 border-t-4 border-pink-900">
              <p className="text-pink-900 text-xs font-bold uppercase tracking-wider mb-1">మీ ఆశీస్సులతో గెలిచిన</p>
              <p className="text-3xl font-extrabold text-pink-700 leading-none">గొర్రె రాజయ్య</p>
              <div className="mt-1">
                  <span className="text-sm bg-pink-100 text-pink-900 px-4 py-0.5 rounded-full font-bold shadow-sm">ఉప సర్పంచ్</span>
              </div>
          </div>
      </div>


      <h1 className="text-orange-400 text-sm font-sans font-bold text-center -mb-4 mt-4">👇 Poster 2: Community (Fixed Name)</h1>

      {/* ================= POSTER 2: YADAVA/COMMUNITY (FIXED LAYOUT) ================= */}
      <div className="w-[360px] h-[640px] bg-white rounded-xl overflow-hidden shadow-2xl relative flex flex-col border-[4px] border-orange-500 shrink-0">
          
          {/* Header */}
          <div className="bg-yellow-400 p-4 text-center relative z-10 border-b-4 border-red-600 shrink-0">
              <h2 className="text-red-700 font-extrabold text-xs bg-white inline-block px-3 py-1 rounded-full shadow-sm mb-2">యాదవ కుల తేజం</h2>
              <h1 className="text-2xl font-bold text-red-800 drop-shadow-sm leading-tight">
                  మాదన్నపేట చరిత్రలో<br/>
                  <span className="text-3xl font-extrabold text-red-600">మొట్టమొదటి సారిగా...</span>
              </h1>
          </div>

          {/* Content Body - Gradient Background */}
          <div className="flex-1 flex flex-col items-center justify-between bg-gradient-to-b from-red-700 to-orange-600 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

              {/* Message */}
              <div className="mt-6 px-4 text-center relative z-20">
                  <p className="text-yellow-100 text-sm font-bold leading-relaxed border-2 border-yellow-400/30 p-2 rounded-xl bg-black/10 backdrop-blur-sm">
                      "మా యాదవ సంఘం నుండి ఉప సర్పంచ్ గా ఎన్నికైన సందర్భంగా.. గ్రామ ప్రజలందరికీ కృతజ్ఞతలు."
                  </p>
              </div>

              {/* Photo - Centered & Clear */}
              <div className="relative w-[260px] h-[300px] z-10 -mb-4 mt-2">
                  <Image 
                      src="/rajaiah.png" 
                      alt="Gorre Rajaiah" 
                      fill 
                      className="object-contain object-bottom drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]" 
                  />
              </div>

              {/* Footer - Distinct Block */}
              <div className="w-full bg-red-900 text-white p-4 text-center z-20 border-t-2 border-yellow-500 shadow-[0_-5px_20px_rgba(0,0,0,0.4)]">
                  <p className="text-2xl font-extrabold text-yellow-400 tracking-wide">గొర్రె రాజయ్య</p>
                  <div className="mt-1 inline-block bg-white/10 px-4 py-1 rounded-full border border-white/20">
                      <p className="text-sm font-bold text-white">ఉప సర్పంచ్ - మాదన్నపేట</p>
                  </div>
              </div>
          </div>
      </div>


      <h1 className="text-blue-400 text-sm font-sans font-bold text-center -mb-4 mt-4">👇 Poster 3: General (Fixed Name)</h1>

      {/* ================= POSTER 3: GENERAL / NEUTRAL (FIXED LAYOUT) ================= */}
      <div className="w-[360px] h-[640px] bg-white rounded-xl overflow-hidden shadow-2xl relative flex flex-col border-[4px] border-blue-900 shrink-0 mb-10">
          
          {/* Header */}
          <div className="bg-blue-900 text-white h-36 relative flex flex-col items-center justify-center rounded-b-[40px] shrink-0 shadow-lg z-10">
              <p className="text-blue-200 text-[10px] font-bold tracking-[0.3em] uppercase mb-1">GRATITUDE</p>
              <h1 className="text-3xl font-extrabold text-yellow-400 drop-shadow-md">కృతజ్ఞతలు</h1>
              <p className="text-white text-xs mt-1 font-bold">మాదన్నపేట గ్రామ ప్రజలందరికీ...</p>
          </div>

          {/* Body Content */}
          <div className="flex-1 flex flex-col items-center justify-between pt-4">
              
              {/* Quote */}
              <div className="px-6 text-center space-y-2">
                  <p className="text-gray-700 text-sm font-bold leading-relaxed">
                      "నన్ను నమ్మి, నూతన ఉప సర్పంచ్ గా ఎన్నుకున్న వార్డు మెంబర్లకు మరియు గ్రామ ప్రజలకు నా పాదాభివందనాలు."
                  </p>
                  <div className="w-10 h-1 bg-blue-500 mx-auto rounded-full mt-2"></div>
              </div>

              {/* Photo - Centered */}
              <div className="relative w-[260px] h-[280px] mt-2">
                  <Image 
                      src="/rajaiah.png" 
                      alt="Gorre Rajaiah" 
                      fill 
                      className="object-contain object-bottom" 
                  />
              </div>

              {/* Footer - Distinct Block */}
              <div className="w-full bg-gray-100 p-4 text-center border-t border-gray-300 z-20">
                  <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-1">సదా మీ సేవలో</p>
                  <p className="text-3xl font-extrabold text-blue-900 leading-none">గొర్రె రాజయ్య</p>
                  <p className="text-sm font-bold text-gray-600 mt-1 bg-white px-3 py-0.5 rounded-full inline-block border border-gray-200 shadow-sm">
                      ఉప సర్పంచ్
                  </p>
              </div>
          </div>
      </div>

    </div>
  );
}