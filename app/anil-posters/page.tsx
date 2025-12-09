import Image from "next/image";
import Link from "next/link";
import { Sree_Krushnadevaraya } from "next/font/google";

const skFont = Sree_Krushnadevaraya({ weight: "400", subsets: ["telugu"], display: "swap" });

export default function AnilPostersPage() {
  return (
    // Added 'overflow-x-hidden' to prevent horizontal scroll on mobile
    <div className={`min-h-screen bg-gray-900 p-4 md:p-8 font-sans flex flex-col items-center overflow-x-hidden ${skFont.className}`}>
      
      {/* Back Button */}
      <div className="w-full max-w-6xl mb-6">
        <Link href="/" className="text-white/70 text-sm border border-white/30 px-4 py-2 rounded-full hover:bg-white/10 transition inline-flex items-center gap-2">
            <span>←</span> Back to Home
        </Link>
      </div>

      <h1 className="text-white text-2xl md:text-3xl mb-2 text-center font-bold">Anil Anna Campaign Posters</h1>
      <p className="text-gray-400 mb-8 text-center text-sm md:text-base">Take Screenshots for WhatsApp Status</p>
      
      {/* GRID CONTAINER - Responsive Fixes */}
      {/* - grid-cols-1: On mobile (default), 1 column.
         - md:grid-cols-2: On tablets, 2 columns.
         - lg:grid-cols-3: On desktop, 3 columns.
         - justify-items-center: Centers the posters in their grid cells.
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 w-full max-w-7xl justify-items-center">
        
        {/* ================= POSTER 1: MAIN INTRO ================= */}
        <div className="w-[340px] md:w-[360px] h-[640px] bg-gradient-to-b from-orange-500 via-white to-green-600 rounded-xl overflow-hidden shadow-2xl border-[4px] border-white relative flex flex-col shrink-0">
           <div className="p-4 text-center pt-8">
             <h2 className="text-white font-bold text-lg drop-shadow-md">అధికార పార్టీ అండతో...</h2>
             <h1 className="text-4xl font-extrabold text-blue-900 mt-1 leading-tight">
               గ్రామ అభివృద్ధికి <br/><span className="text-red-600">అనిల్ అన్నే సరైనోడు!</span>
             </h1>
           </div>
           
           <div className="flex-1 relative">
              <div className="absolute top-4 right-4 w-24 h-24 bg-white rounded-full border-4 border-orange-500 flex items-center justify-center shadow-lg z-20">
                 <Image src="/anil-anna-symbol.png" width={70} height={70} alt="Ring" className="object-contain" />
              </div>
              <div className="absolute bottom-0 left-[-20px] w-[380px] h-[420px] z-10">
                 <Image src="/anil-anna.png" alt="Anil Anna" fill className="object-contain object-bottom" />
              </div>
           </div>

           <div className="bg-blue-900 text-white text-center py-3 z-20">
               <p className="text-xl font-bold">అబ్బరబోయిన అనిల్ - సర్పంచ్ అభ్యర్థి</p>
           </div>
        </div>

        {/* ================= POSTER 2: YOUTH & SPORTS ================= */}
        <div className="w-[340px] md:w-[360px] h-[640px] bg-white rounded-xl overflow-hidden shadow-2xl border-[4px] border-green-600 relative flex flex-col shrink-0">
           <div className="bg-green-700 p-6 text-center text-white rounded-b-[40px] shadow-lg">
             <h1 className="text-3xl font-extrabold">యువ కిరణం - మన అనిల్</h1>
             <p className="text-green-200 mt-1 font-bold">యూత్ కు అండగా ఉంటా.. ప్రోత్సహిస్తా!</p>
           </div>

           <div className="p-6 mt-2 space-y-4">
              <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-600">
                  <p className="text-green-900 font-bold text-lg">🏏 యువతకు స్పోర్ట్స్ కిట్స్ పంపిణీ</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-600">
                  <p className="text-green-900 font-bold text-lg">📚 గ్రంథాలయం ఏర్పాటు</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-600">
                  <p className="text-green-900 font-bold text-lg">🏆 సంక్రాంతికి ఆటల పోటీల నిర్వహణ</p>
              </div>
           </div>

           <div className="mt-auto relative h-[250px]">
              <div className="absolute bottom-0 right-[-10px] w-[220px] h-[280px]">
                 <Image src="/anil-anna.png" alt="Anil Anna" fill className="object-contain object-bottom" />
              </div>
              <div className="absolute bottom-6 left-6 w-24 h-24 bg-white rounded-full border-4 border-green-600 flex items-center justify-center shadow-xl">
                 <Image src="/anil-anna-symbol.png" width={60} height={60} alt="Ring" />
              </div>
           </div>
        </div>

        {/* ================= POSTER 3: TEMPLES ================= */}
        <div className="w-[340px] md:w-[360px] h-[640px] bg-gradient-to-b from-orange-100 to-orange-50 rounded-xl overflow-hidden shadow-2xl border-[4px] border-orange-500 relative flex flex-col shrink-0">
           <div className="p-6 text-center">
             <h2 className="text-orange-800 font-bold text-lg tracking-widest uppercase">మన సంస్కృతి - మన బాధ్యత</h2>
             <h1 className="text-4xl font-extrabold text-red-600 mt-2">ఆలయాల అభివృద్ధి</h1>
           </div>

           <div className="px-6 space-y-3">
               <ul className="text-gray-900 font-bold text-lg space-y-2">
                   <li className="flex items-start">🛕 <span className="ml-2">గ్రామ దేవతల పునఃప్రతిష్టాపన</span></li>
                   <li className="flex items-start">🧱 <span className="ml-2">పోచమ్మ గుడి చుట్టూ ప్రహరీ & మండపం</span></li>
                   <li className="flex items-start">⚡ <span className="ml-2">జాతరలో శాశ్వత విద్యుత్ సౌకర్యం</span></li>
                   <li className="flex items-start">🛣️ <span className="ml-2">మారమ్మ గుడికి తారు రోడ్డు</span></li>
               </ul>
           </div>

           <div className="mt-auto relative h-[280px]">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px]">
                 <Image src="/anil-anna.png" alt="Anil Anna" fill className="object-contain object-bottom" />
              </div>
           </div>
           
           <div className="bg-orange-600 text-white text-center py-2 z-20">
               <p className="text-lg font-bold">ఉంగరం గుర్తుకే మన ఓటు</p>
           </div>
        </div>

        {/* ================= POSTER 4: WELFARE ================= */}
        <div className="w-[340px] md:w-[360px] h-[640px] bg-white rounded-xl overflow-hidden shadow-2xl border-[6px] border-blue-600 relative flex flex-col shrink-0">
           <div className="bg-blue-700 p-4 text-center">
               <h1 className="text-white text-2xl font-bold">ఇందిరమ్మ రాజ్యమే - పేదల రాజ్యం</h1>
           </div>
           
           <div className="p-5 space-y-4">
               <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                   <h3 className="text-blue-900 font-bold text-xl mb-2">నా గ్యారెంటీ:</h3>
                   <ul className="text-gray-800 font-semibold space-y-2">
                       <li>✅ అర్హులైన పేదలకు ఇందిరమ్మ ఇళ్లు</li>
                       <li>✅ 100% పెన్షన్లు & రేషన్ కార్డులు</li>
                       <li>✅ కళ్యాణలక్ష్మి చెక్కులు త్వరగా అందేలా కృషి</li>
                   </ul>
               </div>
               <p className="text-center text-red-600 font-bold">కాంగ్రెస్ బలపరిచిన అభ్యర్థిని గెలిపించండి.. అభివృద్ధిని పొందండి!</p>
           </div>

           <div className="absolute top-[45%] right-4 w-20 h-20 bg-white rounded-full border-4 border-blue-500 flex items-center justify-center shadow-lg">
               <Image src="/anil-anna-symbol.png" width={50} height={50} alt="Ring" />
           </div>

           <div className="mt-auto relative h-[250px]">
              <Image src="/anil-anna.png" alt="Anil Anna" fill className="object-contain object-bottom" />
           </div>
        </div>

        {/* ================= POSTER 5: SYMBOL FOCUS ================= */}
        <div className="w-[340px] md:w-[360px] h-[640px] bg-white rounded-xl overflow-hidden shadow-2xl border-[8px] border-orange-500 relative flex flex-col items-center justify-center shrink-0">
           
           <div className="absolute top-0 w-full h-32 bg-orange-500 rounded-b-[50%] z-0"></div>
           
           <div className="relative z-10 text-center mt-8">
               <h2 className="text-white text-2xl font-bold">రాబోయే ఎన్నికల్లో</h2>
               <h1 className="text-orange-600 text-5xl font-extrabold mt-4 drop-shadow-sm">ఉంగరం గుర్తుకే</h1>
               <p className="text-gray-500 font-bold text-xl mt-1">మీ అమూల్యమైన ఓటు</p>
           </div>

           <div className="relative w-64 h-64 my-6">
               <Image src="/anil-anna-symbol.png" alt="Ring Symbol" fill className="object-contain" />
           </div>

           <div className="bg-green-600 text-white px-8 py-2 rounded-full font-bold text-2xl shadow-lg">
               11 Dec 2025
           </div>

           <div className="absolute bottom-4 text-center w-full">
               <p className="text-gray-600 font-bold">మన అభ్యర్థి</p>
               <p className="text-3xl font-extrabold text-blue-900">అబ్బరబోయిన అనిల్</p>
           </div>
        </div>

        {/* ================= POSTER 6: INFRASTRUCTURE ================= */}
        <div className="w-[340px] md:w-[360px] h-[640px] bg-gradient-to-br from-gray-100 to-gray-300 rounded-xl overflow-hidden shadow-2xl border-[4px] border-black relative flex flex-col shrink-0">
           <div className="p-6 bg-black text-white text-center">
               <h1 className="text-2xl font-bold text-yellow-400">మౌలిక వసతుల కల్పనే ధ్యేయం</h1>
           </div>

           <div className="p-6 space-y-3">
               <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                   <span className="text-2xl mr-3">💡</span>
                   <span className="font-bold text-gray-800">100% వీధి దీపాలు</span>
               </div>
               <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                   <span className="text-2xl mr-3">🛣️</span>
                   <span className="font-bold text-gray-800">CC రోడ్లు & డ్రైనేజీ పూర్తి</span>
               </div>
               <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                   <span className="text-2xl mr-3">💧</span>
                   <span className="font-bold text-gray-800">మంచినీటి పైపుల మరమ్మత్తు</span>
               </div>
               <div className="flex items-center bg-white p-3 rounded-lg shadow-sm">
                   <span className="text-2xl mr-3">🚜</span>
                   <span className="font-bold text-gray-800">చెరువుల పూడిక తీత</span>
               </div>
           </div>

           <div className="mt-auto relative h-[220px]">
               <div className="absolute bottom-0 right-0 w-[200px] h-[240px]">
                   <Image src="/anil-anna.png" alt="Anil Anna" fill className="object-contain object-bottom" />
               </div>
               <div className="absolute bottom-6 left-6">
                   <div className="w-20 h-20 bg-yellow-400 rounded-full border-4 border-black flex items-center justify-center">
                        <Image src="/anil-anna-symbol.png" width={50} height={50} alt="Ring" />
                   </div>
               </div>
           </div>
        </div>

        {/* ================= POSTER 7: SENTIMENT ================= */}
        <div className="w-[340px] md:w-[360px] h-[640px] bg-gradient-to-t from-blue-900 to-blue-600 rounded-xl overflow-hidden shadow-2xl border-[4px] border-white relative flex flex-col shrink-0">
           <div className="p-8 text-center">
               <h1 className="text-4xl font-extrabold text-white leading-tight">
                   మీలో ఒకడిని...<br/>
                   <span className="text-yellow-400">మీ ఇంటి బిడ్డను!</span>
               </h1>
               <p className="text-blue-100 mt-4 text-lg italic">
                   "రాజకీయం కాదు.. సేవ చేయడమే నా లక్ష్యం. ఎల్లప్పుడూ మీకు అందుబాటులో ఉంటా."
               </p>
           </div>

           <div className="mt-auto relative h-[350px] w-full">
               <Image src="/anil-anna.png" alt="Anil Anna" fill className="object-contain object-bottom" />
           </div>

           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-lg shadow-lg text-center w-[90%]">
               <p className="text-blue-900 font-bold text-xl">అబ్బరబోయిన అనిల్</p>
               <div className="flex items-center justify-center gap-2 mt-1">
                   <Image src="/anil-anna-symbol.png" width={20} height={20} alt="Ring" />
                   <span className="text-red-600 font-bold">ఉంగరం గుర్తు</span>
               </div>
           </div>
        </div>

        {/* ================= POSTER 8: RULING PARTY ================= */}
        <div className="w-[340px] md:w-[360px] h-[640px] bg-white rounded-xl overflow-hidden shadow-2xl border-[6px] border-green-600 relative flex flex-col shrink-0">
           <div className="bg-gradient-to-r from-orange-500 via-white to-green-500 h-4 w-full"></div>
           
           <div className="p-6 text-center">
               <h2 className="text-gray-500 font-bold uppercase tracking-widest text-sm">అభివృద్ధి సూత్రం</h2>
               <h1 className="text-3xl font-extrabold text-gray-900 mt-2 leading-tight">
                   మన గ్రామాభివృద్ధికి <br/>
                   <span className="text-green-600">అధికార పార్టీ బలమే రక్ష!</span>
               </h1>
           </div>

           <div className="px-6">
               <div className="bg-gray-100 p-4 rounded-xl border-l-4 border-orange-500">
                   <p className="text-gray-800 font-bold leading-relaxed">
                       "ఎమ్మెల్యే, ఎంపీ గార్ల సహకారంతో.. కేంద్ర, రాష్ట్ర నిధులు తీసుకొచ్చి మన గ్రామాన్ని ఆదర్శంగా తీర్చిదిద్దుతా."
                   </p>
               </div>
           </div>

           <div className="mt-auto relative h-[260px]">
               <div className="absolute bottom-0 left-[-20px] w-[240px] h-[280px]">
                   <Image src="/anil-anna.png" alt="Anil Anna" fill className="object-contain object-bottom" />
               </div>
               <div className="absolute bottom-10 right-6 text-right">
                   <p className="text-xl font-bold text-gray-900">అబ్బరబోయిన అనిల్</p>
                   <p className="text-sm text-gray-500">కాంగ్రెస్ పార్టీ బలపరిచిన అభ్యర్థి</p>
                   <div className="mt-2 inline-block border-2 border-green-500 rounded-full p-2">
                       <Image src="/anil-anna-symbol.png" width={40} height={40} alt="Ring" />
                   </div>
               </div>
           </div>
        </div>

        {/* ================= POSTER 9: WOMEN SENTIMENT ================= */}
        <div className="w-[340px] md:w-[360px] h-[640px] bg-gradient-to-b from-pink-700 to-purple-900 rounded-xl overflow-hidden shadow-2xl border-[4px] border-yellow-400 relative flex flex-col shrink-0">
           <div className="p-6 text-center">
               <h1 className="text-yellow-300 text-2xl font-bold">ఆడబిడ్డల ఆత్మగౌరవం</h1>
               <h2 className="text-white text-3xl font-extrabold mt-1">మాదన్నపేట ఆడపడుచులకు</h2>
           </div>

           <div className="px-6 mt-4">
               <ul className="text-white font-bold space-y-3 text-lg">
                   <li>🌸 బతుకమ్మ ఘాట్ల అభివృద్ధి</li>
                   <li>⚡ పండుగలకు నిరంతర విద్యుత్</li>
                   <li>🎨 సంక్రాంతికి ముగ్గుల పోటీలు</li>
                   <li>💰 కళ్యాణలక్ష్మి, షాదీముబారక్</li>
               </ul>
           </div>

           <div className="absolute top-[40%] right-4 w-24 h-24 bg-white rounded-full flex items-center justify-center border-4 border-pink-500 shadow-xl">
               <Image src="/anil-anna-symbol.png" width={60} height={60} alt="Ring" />
           </div>

           <div className="mt-auto relative h-[280px] w-full">
               <Image src="/anil-anna.png" alt="Anil Anna" fill className="object-contain object-bottom" />
           </div>
           
           <div className="absolute bottom-4 left-4 bg-purple-900/80 px-4 py-2 rounded text-white">
               <p className="font-bold">అనిల్ అన్న</p>
           </div>
        </div>

        {/* ================= POSTER 10: SIMPLE & CLEAR ================= */}
        <div className="w-[340px] md:w-[360px] h-[640px] bg-yellow-400 rounded-xl overflow-hidden shadow-2xl border-[4px] border-red-600 relative flex flex-col shrink-0">
           <div className="flex-1 flex flex-col items-center justify-center p-4">
               <h1 className="text-red-700 text-4xl font-extrabold uppercase">ఒక్క అవకాశం!</h1>
               <p className="text-black font-bold text-xl mt-2">మన ఊరి బాగు కోసం..</p>
               
               <div className="my-6 w-48 h-48 bg-white rounded-full flex items-center justify-center border-4 border-red-600 shadow-xl">
                   <Image src="/anil-anna-symbol.png" width={120} height={120} alt="Ring" />
               </div>
               
               <h2 className="text-black text-3xl font-extrabold">ఉంగరం గుర్తు</h2>
               <p className="text-red-700 font-bold text-lg mt-1">1వ నెంబర్ పై ఓటు వేయండి</p>
           </div>

           <div className="bg-red-700 text-white p-3 flex items-center justify-between">
               <div className="relative w-16 h-16">
                   <Image src="/anil-anna.png" alt="Anil" fill className="object-cover rounded-full border-2 border-white" />
               </div>
               <div className="text-right">
                   <p className="text-xl font-bold">అబ్బరబోయిన అనిల్</p>
                   <p className="text-sm text-yellow-200">11 Dec 2025</p>
               </div>
           </div>
        </div>

        {/* ================= POSTER 11: TRANSPARENCY ================= */}
        <div className="w-[340px] md:w-[360px] h-[640px] bg-white rounded-xl overflow-hidden shadow-2xl border-[4px] border-gray-800 relative flex flex-col shrink-0">
           <div className="bg-gray-800 p-4 text-center text-white">
               <h1 className="text-2xl font-bold text-yellow-400">అవినీతి లేని పాలన</h1>
           </div>

           <div className="p-6 space-y-4">
               <div className="flex items-start">
                   <span className="text-green-600 text-2xl mr-2">✓</span>
                   <p className="font-bold text-gray-800">క్రమం తప్పకుండా గ్రామ సభలు</p>
               </div>
               <div className="flex items-start">
                   <span className="text-green-600 text-2xl mr-2">✓</span>
                   <p className="font-bold text-gray-800">జమా ఖర్చులు ప్రజల ముందే</p>
               </div>
               <div className="flex items-start">
                   <span className="text-green-600 text-2xl mr-2">✓</span>
                   <p className="font-bold text-gray-800">ఆరోగ్య బాధితులకు CMRF చెక్కులు</p>
               </div>
           </div>

           <div className="mt-auto relative h-[300px]">
               <Image src="/anil-anna.png" alt="Anil Anna" fill className="object-contain object-bottom" />
           </div>
           
           <div className="absolute top-[50%] right-6 w-24 h-24 bg-gray-100 rounded-full border-2 border-gray-400 flex items-center justify-center">
                <Image src="/anil-anna-symbol.png" width={60} height={60} alt="Ring" />
           </div>
        </div>

        {/* ================= POSTER 12: MANIFESTO SUMMARY ================= */}
        <div className="w-[340px] md:w-[360px] h-[640px] bg-gradient-to-b from-orange-500 via-white to-green-600 rounded-xl overflow-hidden shadow-2xl border-[4px] border-white relative flex flex-col shrink-0">
           <div className="bg-white/90 m-4 p-4 rounded-xl shadow-lg h-full flex flex-col relative overflow-hidden">
               <div className="text-center border-b-2 border-gray-200 pb-2 mb-2">
                   <h1 className="text-2xl font-extrabold text-blue-900">నా ప్రమాణం</h1>
               </div>
               
               <ul className="text-sm font-bold text-gray-800 space-y-2 overflow-y-hidden">
                   <li>🔸 దేవాలయాల అభివృద్ధి</li>
                   <li>🔸 ఇందిరమ్మ ఇళ్లు & పెన్షన్లు</li>
                   <li>🔸 యువతకు స్పోర్ట్స్ కిట్స్</li>
                   <li>🔸 100% లైటింగ్ & డ్రైనేజీ</li>
                   <li>🔸 సీసీ రోడ్ల నిర్మాణం</li>
                   <li>🔸 పేదలకు అండగా నిలుస్తా</li>
               </ul>

               <div className="mt-auto flex items-center justify-between pt-4 border-t-2 border-gray-200">
                   <div className="text-center">
                       <Image src="/anil-anna-symbol.png" width={60} height={60} alt="Ring" />
                       <p className="text-red-600 font-bold text-xs mt-1">ఉంగరం గుర్తు</p>
                   </div>
                   <div className="relative w-24 h-32">
                       <Image src="/anil-anna.png" alt="Anil" fill className="object-contain object-bottom" />
                   </div>
               </div>
           </div>
        </div>

      </div>
    </div>
  );
}