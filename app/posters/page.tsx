import Image from "next/image";
import { Sree_Krushnadevaraya } from "next/font/google";

const skFont = Sree_Krushnadevaraya({ 
  weight: "400", 
  subsets: ["telugu"],
  display: "swap",
});

export default function PostersPage() {
  return (
    // FIX: px-0 on mobile to fit 360px poster perfectly without scrolling
    <div className={`min-h-screen bg-gray-900 py-8 px-0 md:p-8 font-sans flex flex-col items-center overflow-x-hidden ${skFont.className}`}>
   
      {/* GRID CONTAINER: Added justify-items-center to center posters perfectly */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 w-full justify-items-center">
        
        {/* ============================================================
             SET 1: MANIFESTO & PROMISES (Original 9)
           ============================================================ */}
        
        {/* 1. MAIN PROMISE (Yellow/Orange) */}
        <div className="w-[360px] h-[640px] bg-gradient-to-b from-orange-600 via-yellow-400 to-orange-700 relative overflow-hidden shadow-2xl border-[4px] border-white rounded-xl flex flex-col shrink-0">
           <div className="pt-8 text-center relative z-10">
             <div className="inline-block bg-white text-orange-800 px-4 py-1 rounded-full font-bold text-xs mb-2 shadow-md uppercase">
                మాదన్నపేట స్వతంత్ర అభ్యర్థి
             </div>
             <h1 className="text-4xl font-extrabold text-white drop-shadow-md leading-tight">
               మాటలు కాదు...<br/>
               <span className="text-yellow-100 text-5xl">చేతల్లో చూపిస్తా!</span>
             </h1>
           </div>
           <div className="mx-4 mt-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border-2 border-orange-200 relative z-10">
             <h3 className="text-center text-orange-800 font-bold mb-2 border-b-2 border-orange-200 pb-1 text-xl">తక్షణ కర్తవ్యం</h3>
             <ul className="space-y-2">
               <li className="flex items-center text-gray-900 font-bold text-lg"><span className="text-xl mr-2">🛕</span>గ్రామ దేవతల పునఃప్రతిష్టాపన</li>
               <li className="flex items-center text-gray-900 font-bold text-lg"><span className="text-xl mr-2">🪨</span>బొడ్డు రాయి ఉత్సవం</li>
               <li className="flex items-center text-gray-900 font-bold text-lg"><span className="text-xl mr-2">🐒</span>కోతుల బెడద నుండి రక్షణ</li>
             </ul>
           </div>
           <div className="absolute top-[50%] right-2 w-20 h-20 bg-white rounded-full border-4 border-orange-600 flex items-center justify-center shadow-lg animate-bounce z-20">
              <Image src="/symbol.png" width={60} height={60} alt="Symbol" className="object-contain" />
           </div>
           <div className="mt-auto relative w-full h-[320px]">
             <Image src="/ramesh-namaste.png" alt="Ramesh" fill className="object-contain object-bottom drop-shadow-2xl" />
           </div>
           <div className="absolute bottom-4 left-0 w-full text-center z-20">
              <div className="bg-red-700 text-white inline-block px-6 py-1 rounded-lg border-2 border-yellow-400 shadow-lg">
                <p className="text-2xl font-bold">కత్తి రమేష్</p>
              </div>
           </div>
        </div>

        {/* 2. EMOTIONAL (Red) */}
        <div className="w-[360px] h-[640px] bg-gradient-to-t from-black via-red-800 to-red-600 relative overflow-hidden shadow-2xl border-[4px] border-yellow-500 rounded-xl flex flex-col shrink-0">
           <div className="pt-8 px-4 text-center relative z-10">
             <h1 className="text-5xl font-extrabold text-white mb-2 drop-shadow-lg leading-tight">
               మాదన్నపేట ప్రజలే<br/><span className="text-yellow-400 text-6xl">నా బలం</span>
             </h1>
           </div>
           <div className="mt-4 mx-4 bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/20 text-center relative z-10">
             <p className="text-white font-medium text-lg leading-relaxed italic">"చిన్ననాటి నుండి పెరిగింది ఇక్కడే.. నా జీవితం గడిచింది ఇక్కడే.. ఆఖరి శ్వాస వరకు ఈ మట్టి రుణం తీర్చుకుంటూనే ఉంటా."</p>
           </div>
           <div className="absolute top-[45%] left-4 bg-white w-24 h-24 rounded-full shadow-[0_0_20px_rgba(255,255,0,0.6)] flex items-center justify-center border-4 border-yellow-500 -rotate-12 z-20">
               <Image src="/symbol.png" width={70} height={70} alt="Symbol" className="object-contain" />
           </div>
           <div className="mt-auto relative w-full h-[340px]">
             <Image src="/ramesh-namaste.png" alt="Ramesh" fill className="object-contain object-bottom" />
           </div>
           <div className="absolute bottom-2 right-4 text-right z-20">
               <p className="text-yellow-400 text-2xl font-bold drop-shadow-md">కత్తి రమేష్</p>
               <p className="text-gray-300 text-sm">మీ సర్పంచ్ అభ్యర్థి</p>
           </div>
        </div>

        {/* 3. VOTING (Blue) */}
        <div className="w-[360px] h-[640px] bg-white relative overflow-hidden shadow-2xl border-[4px] border-blue-700 rounded-xl flex flex-col shrink-0">
           <div className="bg-blue-800 py-4 text-center rounded-b-[30px] shadow-lg mb-4">
             <h2 className="text-yellow-300 text-lg font-bold">మాదన్నపేట అభివృద్ధి ప్రదాత</h2>
             <h1 className="text-white text-3xl font-extrabold">శ్రీ కత్తి రమేష్ గారి</h1>
           </div>
           <div className="flex flex-col items-center px-4 relative z-10">
             <h1 className="text-5xl font-extrabold text-red-600 mt-2 text-center leading-tight">కత్తెర గుర్తుకే<br/><span className="text-blue-900 text-2xl">ఓటు వేయండి</span></h1>
             <div className="w-44 h-44 border-4 border-blue-200 rounded-full flex items-center justify-center mt-2 bg-blue-50 shadow-inner">
                <Image src="/symbol.png" width={130} height={130} alt="Symbol" className="object-contain" />
             </div>
             <div className="mt-4 bg-blue-100 px-6 py-2 rounded-lg border border-blue-300 text-center w-full">
                 <p className="text-xs text-gray-500 font-bold uppercase">Polling Date</p>
                 <p className="text-3xl font-extrabold text-blue-900">11-12-2025</p>
             </div>
           </div>
           <div className="mt-auto relative w-full h-[220px]">
                <div className="absolute bottom-0 right-[-20px] w-[220px] h-[260px]">
                   <Image src="/ramesh-namaste.png" alt="Ramesh" fill className="object-contain object-bottom" />
                </div>
                <div className="absolute bottom-8 left-6 z-20">
                    <p className="text-3xl font-extrabold text-blue-900">కత్తి రమేష్</p>
                    <div className="w-20 h-1 bg-red-500 mt-1"></div>
                    <p className="text-sm font-bold text-gray-500 mt-1">స్వతంత్ర అభ్యర్థి</p>
                </div>
           </div>
        </div>

        {/* 4. SANITATION (Green) */}
        <div className="w-[360px] h-[640px] bg-gradient-to-br from-green-600 to-teal-800 relative overflow-hidden shadow-2xl border-[4px] border-white rounded-xl flex flex-col shrink-0">
           <div className="p-6 text-white text-center relative z-10">
              <h2 className="text-yellow-300 text-lg font-bold bg-green-900/50 inline-block px-3 py-1 rounded-full mb-2">స్వచ్ఛ మాదన్నపేట</h2>
              <h1 className="text-4xl font-extrabold leading-tight">పచ్చని గ్రామం<br/>పరిశుభ్రమైన గ్రామం</h1>
           </div>
           <div className="px-4 mt-2 relative z-10">
              <div className="bg-white/95 p-4 rounded-xl shadow-lg space-y-3">
                  <div className="flex items-center"><span className="text-2xl mr-3">🗑️</span><span className="text-green-900 font-bold text-lg">ప్రతి వీధికి 3 చెత్త కుండీలు</span></div>
                  <div className="flex items-center"><span className="text-2xl mr-3">🚜</span><span className="text-green-900 font-bold text-lg">చెరువుల పూడిక తీత</span></div>
                  <div className="flex items-center"><span className="text-2xl mr-3">💧</span><span className="text-green-900 font-bold text-lg">SRSP కెనాల్ స్వచ్ఛత</span></div>
              </div>
           </div>
           <div className="absolute top-[45%] right-4 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-green-300 z-10">
               <Image src="/symbol.png" width={60} height={60} alt="Symbol" className="object-contain" />
           </div>
           <div className="mt-auto relative w-full h-[300px]">
               <Image src="/ramesh-namaste.png" alt="Ramesh" fill className="object-contain object-bottom" />
           </div>
           <div className="absolute bottom-4 left-4 bg-green-900 px-4 py-2 rounded-lg border border-green-400 shadow-lg z-20">
               <p className="text-white font-bold text-xl">కత్తి రమేష్</p>
           </div>
        </div>

        {/* 5. TEMPLES (Purple) */}
        <div className="w-[360px] h-[640px] bg-gradient-to-b from-purple-900 to-indigo-900 relative overflow-hidden shadow-2xl border-[4px] border-pink-300 rounded-xl flex flex-col shrink-0">
           <div className="pt-8 px-4 text-center relative z-10">
              <h2 className="text-pink-300 text-lg font-bold uppercase tracking-wider">మన సంస్కృతి - మన బాధ్యత</h2>
              <h1 className="text-3xl font-extrabold text-white mt-2 leading-tight">ఆలయాల అభివృద్ధి<br/>స్వర్గ రధం ఏర్పాటు</h1>
           </div>
           <div className="px-4 mt-6 relative z-10">
               <div className="bg-white p-4 rounded-xl shadow-lg">
                   <ul className="text-purple-900 space-y-3 font-bold text-lg">
                       <li className="flex items-start"><span className="mr-2 text-pink-600">🛕</span>పోచమ్మ & మారెమ్మ గుడి అభివృద్ధి</li>
                       <li className="flex items-start"><span className="mr-2 text-pink-600">🧱</span>గుడి చుట్టూ ప్రహరీ & మండపం</li>
                       <li className="flex items-start"><span className="mr-2 text-pink-600">🚐</span>అంత్యక్రియల కోసం స్వర్గ రధం</li>
                   </ul>
               </div>
           </div>
           <div className="absolute top-[48%] right-2 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-xl border-4 border-white z-20 animate-pulse">
               <Image src="/symbol.png" width={50} height={50} alt="Symbol" className="object-contain" />
           </div>
           <div className="mt-auto relative w-full h-[300px]">
               <Image src="/ramesh-namaste.png" alt="Ramesh" fill className="object-contain object-bottom" />
           </div>
           <div className="absolute bottom-4 left-4 text-left z-20 bg-purple-950/80 px-4 py-1 rounded">
               <p className="text-pink-300 text-xl font-bold">కత్తి రమేష్</p>
               <p className="text-white text-xs">స్వతంత్ర సర్పంచ్ అభ్యర్థి</p>
           </div>
        </div>

        {/* 6. INFRASTRUCTURE (Teal/Cyan) */}
        <div className="w-[360px] h-[640px] bg-gradient-to-br from-cyan-600 to-blue-900 relative overflow-hidden shadow-2xl border-[4px] border-white rounded-xl flex flex-col shrink-0">
           <div className="p-6 text-white text-center relative z-10">
              <h1 className="text-3xl font-extrabold leading-tight">మౌలిక వసతుల్లో<br/><span className="text-yellow-300">మహర్దశ</span></h1>
           </div>
           <div className="px-4 relative z-10">
              <div className="bg-white/90 p-4 rounded-xl shadow-lg space-y-2 text-blue-900 font-bold text-lg">
                  <div className="border-b border-blue-200 pb-1">💡 ప్రతి ఇంటికి విద్యుత్ & వీధి దీపాలు</div>
                  <div className="border-b border-blue-200 pb-1">🛣️ CC రోడ్లు & డ్రైనేజీ పూర్తి</div>
                  <div className="border-b border-blue-200 pb-1">🚌 బస్ స్టాండ్ & మూత్రశాలలు</div>
                  <div>🌉 RWS బావులు & చెక్ డ్యాంలు</div>
              </div>
           </div>
           <div className="absolute top-[40%] left-4 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-cyan-300 z-10">
               <Image src="/symbol.png" width={60} height={60} alt="Symbol" className="object-contain" />
           </div>
           <div className="mt-auto relative w-full h-[320px]">
               <Image src="/ramesh-namaste.png" alt="Ramesh" fill className="object-contain object-bottom" />
           </div>
           <div className="absolute bottom-4 right-4 bg-cyan-800 px-4 py-2 rounded-lg border border-cyan-400 shadow-lg z-20 text-right">
               <p className="text-white font-bold text-xl">కత్తి రమేష్</p>
               <p className="text-cyan-200 text-xs">స్వతంత్ర అభ్యర్థి</p>
           </div>
        </div>

        {/* 7. YOUTH (Yellow) */}
        <div className="w-[360px] h-[640px] bg-yellow-400 relative overflow-hidden shadow-2xl border-[4px] border-orange-600 rounded-xl flex flex-col shrink-0">
           <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500 rounded-bl-full z-0"></div>
           <div className="p-6 relative z-10">
              <h2 className="text-orange-900 text-lg font-bold uppercase">యువశక్తి - మన ప్రగతి</h2>
              <h1 className="text-4xl font-extrabold text-orange-700 mt-2 leading-tight">యువతకు అండగా..<br/>విద్యావకాశాలు</h1>
           </div>
           <div className="px-6 relative z-10">
               <ul className="bg-white p-4 rounded-xl shadow-lg space-y-3 text-gray-800 font-bold text-lg border-l-8 border-orange-500">
                   <li>📚 గ్రామంలో గ్రంథాలయం</li>
                   <li>🏏 క్రీడా మైదానాలు</li>
                   <li>💻 స్కిల్ & జాబ్ గైడెన్స్</li>
               </ul>
           </div>
           <div className="absolute top-[45%] right-6 w-24 h-24 bg-white rounded-full border-4 border-orange-600 flex items-center justify-center shadow-lg z-20">
              <Image src="/symbol.png" width={70} height={70} alt="Symbol" className="object-contain" />
           </div>
           <div className="mt-auto relative w-full h-[300px]">
             <Image src="/ramesh-namaste.png" alt="Ramesh" fill className="object-contain object-bottom drop-shadow-xl" />
           </div>
           <div className="absolute bottom-4 left-4 bg-orange-700 text-white px-4 py-2 rounded-lg z-20">
               <p className="text-2xl font-bold">కత్తి రమేష్</p>
           </div>
        </div>

        {/* 8. TRANSPARENCY (Magenta/Red) */}
        <div className="w-[360px] h-[640px] bg-gradient-to-br from-pink-700 to-red-900 relative overflow-hidden shadow-2xl border-[4px] border-white rounded-xl flex flex-col shrink-0">
           <div className="p-6 text-center text-white relative z-10">
              <h1 className="text-3xl font-extrabold">అవినీతి లేని పాలన<br/><span className="text-yellow-300">పారదర్శకత</span></h1>
           </div>
           <div className="mx-4 bg-white/10 backdrop-blur-md border border-white/30 p-4 rounded-xl text-white relative z-10">
               <h3 className="text-center font-bold text-yellow-300 text-xl mb-2">నా వినూత్న ఆలోచన</h3>
               <ul className="space-y-3 font-medium text-lg">
                   <li className="flex items-start">📋 గ్రామ సభ తీర్మానాల డిస్ప్లే బోర్డులు</li>
                   <li className="flex items-start">💰 పైసా ఖర్చు లేకుండా ఇంటి పర్మిషన్లు</li>
                   <li className="flex items-start">🧾 జమ ఖర్చుల వివరాలు అందరికీ!</li>
               </ul>
           </div>
           <div className="absolute top-[50%] left-4 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-red-400 z-20">
               <Image src="/symbol.png" width={60} height={60} alt="Symbol" className="object-contain" />
           </div>
           <div className="mt-auto relative w-full h-[320px]">
             <Image src="/ramesh-namaste.png" alt="Ramesh" fill className="object-contain object-bottom" />
           </div>
           <div className="absolute bottom-4 right-4 text-right z-20">
               <p className="text-yellow-300 text-2xl font-bold">కత్తి రమేష్</p>
               <p className="text-gray-300 text-sm">స్వతంత్ర అభ్యర్థి</p>
           </div>
        </div>

        {/* 9. VICTORY (White/Red) */}
        <div className="w-[360px] h-[640px] bg-white relative overflow-hidden shadow-2xl border-[8px] border-orange-600 rounded-xl flex flex-col shrink-0">
           <div className="bg-orange-600 p-4 text-center">
               <h1 className="text-white text-3xl font-extrabold">ఒక్క అవకాశం ఇవ్వండి!</h1>
           </div>
           <div className="flex-1 flex flex-col items-center pt-6 px-4 text-center relative z-10">
               <p className="text-gray-900 text-2xl font-bold mt-1">మాదన్నపేట అభివృద్ధి కోసం</p>
               <div className="my-4 relative">
                   <div className="w-48 h-48 bg-orange-50 rounded-full border-4 border-orange-200 flex items-center justify-center animate-pulse">
                       <Image src="/symbol.png" width={150} height={150} alt="Symbol" className="object-contain" />
                   </div>
                   <div className="absolute -bottom-2 bg-red-600 text-white px-4 py-1 rounded-full shadow-lg font-bold text-lg left-1/2 transform -translate-x-1/2 w-max">
                       కత్తెర గుర్తు
                   </div>
               </div>
               <p className="text-3xl font-extrabold text-orange-700 mt-2">కత్తి రమేష్ గారికి</p>
               <p className="text-gray-500 font-bold text-lg">ఓటు వేసి గెలిపించండి</p>
           </div>
           <div className="bg-gray-900 text-white p-3 flex justify-between items-center z-20">
               <div className="text-left">
                   <p className="text-xs text-gray-400 uppercase">Polling Date</p>
                   <p className="text-xl font-bold text-yellow-400">11 Dec 2025</p>
               </div>
               <div className="text-right">
                   <p className="text-lg font-bold">స్వతంత్ర అభ్యర్థి</p>
               </div>
           </div>
        </div>


        {/* ============================================================
             SET 2: SENTIMENT, VISION & EXPERIENCE (New 9)
           ============================================================ */}

        {/* 10. RESILIENCE (Black/Gold) */}
        <div className="w-[360px] h-[640px] bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden shadow-2xl border-[4px] border-yellow-600 rounded-xl flex flex-col shrink-0">
           <div className="pt-10 px-4 text-center relative z-10">
             <h1 className="text-4xl font-extrabold text-white leading-tight">గతంలో ఓడిపోయా..<br/><span className="text-red-500 text-5xl">కానీ పారిపోలేదు!</span></h1>
           </div>
           <div className="mx-4 mt-6 bg-white/10 backdrop-blur-md p-4 rounded-xl border-l-4 border-yellow-500 relative z-10">
             <p className="text-white text-lg leading-relaxed italic text-center">"స్వల్ప మెజారిటీతో ఓడినా.. కుంగిపోలేదు. ఎవరిపైనా కక్ష పెంచుకోలేదు. గడిచిన ఐదేళ్లు మీలో ఒకడిగా, మీ కష్టసుఖాల్లో తోడుగా ఉన్నాను. నన్ను మీ ఇంకో కొడుకుగా భావించి ఆశీర్వదించండి."</p>
           </div>
           <div className="absolute top-[50%] right-4 w-24 h-24 bg-white rounded-full border-4 border-yellow-500 flex items-center justify-center shadow-lg z-20 animate-pulse">
              <Image src="/symbol.png" width={70} height={70} alt="Symbol" className="object-contain" />
           </div>
           <div className="mt-auto relative w-full h-[320px]">
             <Image src="/ramesh-namaste.png" alt="Ramesh" fill className="object-contain object-bottom drop-shadow-2xl opacity-90" />
           </div>
           <div className="absolute bottom-4 left-4 bg-yellow-600 text-black px-4 py-2 rounded font-bold z-20">కత్తి రమేష్ - పోరాట యోధుడు</div>
        </div>

        {/* 11. UDYAMAM (Pink) */}
        <div className="w-[360px] h-[640px] bg-gradient-to-br from-pink-700 to-purple-900 relative overflow-hidden shadow-2xl border-[4px] border-white rounded-xl flex flex-col shrink-0">
           <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')]"></div>
           <div className="pt-8 px-4 text-center relative z-10">
             <div className="inline-block bg-white text-pink-800 px-3 py-1 rounded mb-2 font-bold text-sm">జై తెలంగాణ - జై మాదన్నపేట</div>
             <h1 className="text-4xl font-extrabold text-white leading-tight drop-shadow-lg">నాడు ఉద్యమంలో..<br/><span className="text-yellow-300">నేడు గ్రామాభివృద్ధిలో..</span></h1>
           </div>
           <div className="mx-4 mt-4 text-center relative z-10">
             <p className="text-white text-xl font-bold">ఎప్పుడూ ముందుండే మీ రమేష్</p>
             <div className="mt-4 bg-pink-800/80 p-3 rounded-lg border border-pink-400">
                 <p className="text-white text-lg">"తెలంగాణ కోసం ఎలా కొట్లాడానో.. మన ఊరి సమస్యల పరిష్కారం కోసం అధికారులతో అలాగే కొట్లాడతా."</p>
             </div>
           </div>
           <div className="absolute top-[45%] left-4 w-20 h-20 bg-white rounded-full border-4 border-pink-400 flex items-center justify-center shadow-lg z-20">
              <Image src="/symbol.png" width={60} height={60} alt="Symbol" className="object-contain" />
           </div>
           <div className="mt-auto relative w-full h-[320px]">
             <Image src="/ramesh-namaste.png" alt="Ramesh" fill className="object-contain object-bottom" />
           </div>
           <div className="absolute bottom-4 right-4 text-right z-20">
               <p className="text-3xl font-bold text-white">కత్తి రమేష్</p>
               <p className="text-pink-300 text-sm">స్వతంత్ర అభ్యర్థి</p>
           </div>
        </div>

        {/* 12. EXPERIENCE (Slate) */}
        <div className="w-[360px] h-[640px] bg-slate-800 relative overflow-hidden shadow-2xl border-[4px] border-blue-400 rounded-xl flex flex-col shrink-0">
           <div className="pt-8 px-4 text-center relative z-10">
             <h1 className="text-3xl font-extrabold text-white leading-tight">20 ఏళ్ల అనుభవం<br/><span className="text-blue-400 text-4xl">అపారమైన పట్టు</span></h1>
           </div>
           <div className="mx-4 mt-6 bg-white rounded-xl p-4 shadow-lg relative z-10">
              <ul className="space-y-3 text-slate-900 font-bold text-lg">
                  <li className="flex items-center">✅ అధికారులతో మంచి సాన్నిహిత్యం</li>
                  <li className="flex items-center">✅ నిధులు తెచ్చే సత్తా ఉన్న నాయకుడు</li>
                  <li className="flex items-center">✅ గ్రామానికి ఏం కావాలో తెలిసిన విజన్</li>
              </ul>
           </div>
           <div className="absolute top-[50%] right-6 w-24 h-24 bg-yellow-400 rounded-full border-4 border-white flex items-center justify-center shadow-lg z-20 animate-pulse">
              <Image src="/symbol.png" width={70} height={70} alt="Symbol" className="object-contain" />
           </div>
           <div className="mt-auto relative w-full h-[300px]">
             <Image src="/ramesh-namaste.png" alt="Ramesh" fill className="object-contain object-bottom" />
           </div>
           <div className="absolute bottom-0 w-full bg-blue-600 py-2 text-center z-20">
               <p className="text-white font-bold text-xl">సమర్థుడైన నాయకుడు - కత్తి రమేష్</p>
           </div>
        </div>

        {/* 13. WARNING (Red/White) */}
        <div className="w-[360px] h-[640px] bg-white relative overflow-hidden shadow-2xl border-[8px] border-red-600 rounded-xl flex flex-col shrink-0">
           <div className="bg-red-600 p-4 text-center">
              <h1 className="text-white text-3xl font-extrabold">ఆలోచించండి!</h1>
           </div>
           <div className="px-4 mt-6 text-center">
              <p className="text-gray-800 text-xl font-bold leading-relaxed">అనుభవం లేని వారి చేతిలో<br/>గ్రామాన్ని పెడితే...</p>
              <p className="text-red-600 text-2xl font-extrabold mt-2">అభివృద్ధి కుంటుపడుతుంది!<br/>దుష్ట రాజకీయాలు పెరుగుతాయి!</p>
              <div className="my-6 border-t-2 border-b-2 border-gray-200 py-4">
                  <p className="text-gray-900 font-bold text-lg">మనకు కావాల్సింది...<br/><span className="text-green-600 text-2xl">పనిచేసే నాయకుడు</span></p>
              </div>
           </div>
           <div className="absolute bottom-[160px] left-[50%] transform -translate-x-1/2 w-28 h-28 bg-gray-100 rounded-full border-4 border-red-500 flex items-center justify-center">
              <Image src="/symbol.png" width={90} height={90} alt="Symbol" className="object-contain" />
           </div>
           <div className="mt-auto relative w-full h-[200px]">
               <div className="absolute bottom-0 right-[-10px] w-[180px] h-[220px]">
                  <Image src="/ramesh-namaste.png" alt="Ramesh" fill className="object-contain object-bottom" />
               </div>
               <div className="absolute bottom-4 left-4 z-20">
                   <p className="text-gray-500 text-sm font-bold">సరైన నిర్ణయం తీసుకోండి</p>
                   <p className="text-red-600 text-2xl font-extrabold">కత్తి రమేష్ కే ఓటు వేయండి</p>
               </div>
           </div>
        </div>

        {/* 14. ACCESSIBILITY (Warm Orange) */}
        <div className="w-[360px] h-[640px] bg-gradient-to-br from-orange-500 to-red-600 relative overflow-hidden shadow-2xl border-[4px] border-white rounded-xl flex flex-col shrink-0">
           <div className="p-6 text-white text-center relative z-10">
              <h1 className="text-4xl font-extrabold leading-tight">పిలిస్తే పలికే మనిషి<br/><span className="text-yellow-200">అందరి మనిషి</span></h1>
           </div>
           <div className="px-6 relative z-10">
               <div className="bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white/30 text-white text-center">
                   <p className="text-xl font-bold mb-2">"మంచి పలకరింపు.. ఆప్యాయత.. ఆదుకునే గుణం"</p>
                   <p className="text-sm">మీకు ఏ కష్టం వచ్చినా.. ఏ అవసరం ఉన్నా.. అర్ధరాత్రి అయినా నేనున్నాను అంటూ వచ్చే మీ సోదరుడు.</p>
               </div>
           </div>
           <div className="absolute top-[45%] right-6 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-orange-300 z-10 animate-bounce">
               <Image src="/symbol.png" width={70} height={70} alt="Symbol" className="object-contain" />
           </div>
           <div className="mt-auto relative w-full h-[320px]">
               <Image src="/ramesh-namaste.png" alt="Ramesh" fill className="object-contain object-bottom" />
           </div>
           <div className="absolute bottom-4 left-4 bg-white text-orange-700 px-4 py-2 rounded-lg shadow-lg z-20">
               <p className="text-2xl font-bold">కత్తి రమేష్</p>
           </div>
        </div>

        {/* 15. INCLUSIVE (Multi-Color) */}
        <div className="w-[360px] h-[640px] bg-white relative overflow-hidden shadow-2xl border-[4px] border-orange-500 rounded-xl flex flex-col shrink-0">
           <div className="bg-orange-500 h-32 rounded-b-[60px] pt-6 text-center relative z-0">
               <h1 className="text-white text-2xl font-bold">కులమతాలకు అతీతంగా..</h1>
           </div>
           <div className="px-4 -mt-10 relative z-10 text-center">
               <div className="bg-white p-4 rounded-xl shadow-xl border border-gray-200">
                   <h1 className="text-3xl font-extrabold text-gray-800 leading-tight">అందరి వాడు<br/><span className="text-orange-600">అభివృద్ధిరుషుడు</span></h1>
                   <div className="w-16 h-1 bg-gray-300 mx-auto my-3"></div>
                   <p className="text-gray-600 font-bold">రాజకీయాలకు, వర్గాలకు అతీతంగా.. గ్రామాభివృద్ధే లక్ష్యంగా ముందుకు సాగుతున్నాను.</p>
               </div>
           </div>
           <div className="flex-1 flex flex-col items-center justify-center relative">
               <div className="w-32 h-32 border-4 border-orange-200 rounded-full flex items-center justify-center bg-orange-50">
                  <Image src="/symbol.png" width={100} height={100} alt="Symbol" className="object-contain" />
               </div>
               <p className="text-red-600 font-bold mt-2 text-xl">కత్తెర గుర్తు</p>
           </div>
           <div className="relative w-full h-[220px]">
               <div className="absolute bottom-0 left-[-20px] w-[200px] h-[240px]">
                  <Image src="/ramesh-namaste.png" alt="Ramesh" fill className="object-contain object-bottom" />
               </div>
               <div className="absolute bottom-6 right-6 text-right">
                   <p className="text-3xl font-extrabold text-orange-800">కత్తి రమేష్</p>
                   <p className="text-gray-500 font-bold">స్వతంత్ర అభ్యర్థి</p>
               </div>
           </div>
        </div>

        {/* 16. FARMERS (Green) */}
        <div className="w-[360px] h-[640px] bg-gradient-to-b from-green-700 to-green-900 relative overflow-hidden shadow-2xl border-[4px] border-yellow-400 rounded-xl flex flex-col shrink-0">
           <div className="p-6 text-center relative z-10">
              <h1 className="text-yellow-300 text-3xl font-extrabold leading-tight">రైతుకు భరోసా<br/>యువతకు బాట</h1>
           </div>
           <div className="px-6 relative z-10">
               <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border-l-4 border-yellow-400 text-white space-y-3">
                   <p className="text-lg font-bold">🌾 వ్యవసాయాభివృద్ధి నా ధ్యేయం</p>
                   <p className="text-lg font-bold">🎓 యువతకు స్కిల్ ట్రైనింగ్</p>
                   <p className="text-lg font-bold">💧 సాగునీటి కోసం పోరాటం</p>
               </div>
           </div>
           <div className="absolute top-[45%] right-6 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-green-500 z-10">
               <Image src="/symbol.png" width={70} height={70} alt="Symbol" className="object-contain" />
           </div>
           <div className="mt-auto relative w-full h-[320px]">
               <Image src="/ramesh-namaste.png" alt="Ramesh" fill className="object-contain object-bottom" />
           </div>
           <div className="absolute bottom-4 left-4 bg-yellow-400 text-green-900 px-6 py-2 rounded-full font-bold shadow-lg z-20">జై కిసాన్ - జై జవాన్</div>
        </div>

        {/* 17. VISIONARY (Purple/Gold) - ADJUSTED */}
        <div className="w-[360px] h-[640px] bg-gradient-to-tr from-purple-800 to-indigo-900 relative overflow-hidden shadow-2xl border-[4px] border-white rounded-xl flex flex-col shrink-0">
           <div className="p-6 text-center relative z-10">
              <h1 className="text-white text-3xl font-extrabold leading-tight">గ్రామ ప్రగతికి<br/><span className="text-yellow-300">కొత్త విజన్</span></h1>
           </div>
           <div className="px-6 relative z-10 text-center">
               <p className="text-purple-200 text-lg leading-relaxed">"కేవలం రోడ్లు వేయడమే కాదు.. మన ఊరిని అన్ని రంగాల్లో ఆదర్శ గ్రామంగా తీర్చిదిద్దాలన్నదే నా తపన."</p>
               <div className="mt-4 inline-block border-2 border-yellow-400 text-yellow-400 px-4 py-1 rounded uppercase font-bold text-sm">Future Ready Village</div>
           </div>
           <div className="absolute top-[42%] left-1/2 transform -translate-x-1/2 w-24 h-24 bg-white rounded-full border-4 border-purple-500 flex items-center justify-center shadow-2xl z-20">
               <Image src="/symbol.png" width={80} height={80} alt="Symbol" className="object-contain" />
           </div>
           <div className="mt-auto relative w-full h-[340px] z-10">
               <Image src="/ramesh-namaste.png" alt="Ramesh" fill className="object-contain object-bottom" />
           </div>
           <div className="absolute bottom-4 w-full text-center z-20">
               <p className="text-2xl font-bold text-white drop-shadow-md">కత్తి రమేష్</p>
           </div>
        </div>

        {/* 18. FINAL APPEAL (White/Red) */}
        <div className="w-[360px] h-[640px] bg-white relative overflow-hidden shadow-2xl border-[8px] border-orange-600 rounded-xl flex flex-col shrink-0">
           <div className="bg-orange-600 p-4 text-center">
               <h1 className="text-white text-3xl font-extrabold">ఒక్క అవకాశం ఇవ్వండి!</h1>
           </div>
           <div className="flex-1 flex flex-col items-center pt-6 px-4 text-center relative z-10">
               <p className="text-gray-900 text-2xl font-bold mt-1">మాదన్నపేట అభివృద్ధి కోసం</p>
               <div className="my-4 relative">
                   <div className="w-48 h-48 bg-orange-50 rounded-full border-4 border-orange-200 flex items-center justify-center animate-pulse">
                       <Image src="/symbol.png" width={150} height={150} alt="Symbol" className="object-contain" />
                   </div>
                   <div className="absolute -bottom-2 bg-red-600 text-white px-4 py-1 rounded-full shadow-lg font-bold text-lg left-1/2 transform -translate-x-1/2 w-max">
                       కత్తెర గుర్తు
                   </div>
               </div>
               <p className="text-3xl font-extrabold text-orange-700 mt-2">కత్తి రమేష్ గారికి</p>
               <p className="text-gray-500 font-bold text-lg">ఓటు వేసి గెలిపించండి</p>
           </div>
           <div className="bg-gray-900 text-white p-3 flex justify-between items-center z-20">
               <div className="text-left">
                   <p className="text-xs text-gray-400 uppercase">Polling Date</p>
                   <p className="text-xl font-bold text-yellow-400">11 Dec 2025</p>
               </div>
               <div className="text-right">
                   <p className="text-lg font-bold">స్వతంత్ర అభ్యర్థి</p>
               </div>
           </div>
        </div>

      </div>
    </div>
  );
}