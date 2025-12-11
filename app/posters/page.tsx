import Image from "next/image";
import { Sree_Krushnadevaraya } from "next/font/google";
import Link from "next/link";

const skFont = Sree_Krushnadevaraya({ weight: "400", subsets: ["telugu"], display: "swap" });

export default function PostersPage() {
  return (
    <div className={`min-h-screen bg-gray-900 p-8 font-sans flex flex-col items-center ${skFont.className}`}>
      
      <div className="w-full max-w-6xl px-4 mb-6 flex justify-start">
        <Link href="/" className="flex items-center gap-2 text-white border border-white/30 px-5 py-2 rounded-full hover:bg-white/10 transition font-sans font-bold text-sm">
            <span>←</span> వెనక్కి వెళ్ళు
        </Link>
      </div>

      <h1 className="text-white text-3xl mb-8 font-sans text-center">Victory Posters (విజయోత్సవం)</h1>
      
      <div className="flex flex-wrap justify-center gap-8">
        
        {/* POSTER 1: THANK YOU (Green/White) */}
        <div className="w-[360px] h-[640px] bg-white relative overflow-hidden shadow-2xl border-[6px] border-green-600 rounded-xl flex flex-col">
           <div className="bg-green-600 p-6 text-center">
             <h1 className="text-white text-4xl font-extrabold">ధన్యవాదాలు!</h1>
           </div>
           <div className="p-6 text-center relative z-10 flex-1">
             <p className="text-gray-600 text-xl font-bold">నన్ను నమ్మి గెలిపించిన</p>
             <h2 className="text-green-700 text-4xl font-extrabold mt-2 leading-tight">మాదన్నపేట<br/>ప్రజలకు</h2>
             <p className="text-2xl font-bold mt-4 text-gray-800">శిరస్సు వంచి నమస్కరిస్తున్నా 🙏</p>
           </div>
           <div className="mt-auto relative w-full h-[350px]">
             <Image src="/ramesh-namaste.png" alt="Ramesh" fill className="object-contain object-bottom" />
           </div>
           <div className="absolute bottom-0 w-full bg-green-800 py-3 text-center z-20">
               <p className="text-white font-bold text-xl">కత్తి రమేష్ - మీ సర్పంచ్</p>
           </div>
        </div>

        {/* POSTER 2: INCLUSIVE VICTORY (Tricolor) */}
        <div className="w-[360px] h-[640px] bg-gradient-to-b from-orange-500 via-white to-green-600 relative overflow-hidden shadow-2xl border-[4px] border-white rounded-xl flex flex-col">
           <div className="pt-10 px-4 text-center relative z-10">
             <h1 className="text-4xl font-extrabold text-white drop-shadow-md">ఇది నా గెలుపు కాదు..</h1>
             <div className="bg-white px-4 py-2 mt-4 rounded-full shadow-lg inline-block">
                 <h2 className="text-orange-600 text-2xl font-bold">మన ఊరి గెలుపు!</h2>
             </div>
           </div>
           <div className="mt-8 mx-4 text-center">
               <p className="text-gray-800 font-bold text-lg bg-white/80 p-3 rounded-xl">"ఓటు వేసిన వారికి, వేయని వారికి.. అందరికీ నేను సర్పంచే. అందరినీ కలుపుకుని అభివృద్ధి చేస్తా."</p>
           </div>
           <div className="mt-auto relative w-full h-[300px]">
             <Image src="/ramesh-namaste.png" alt="Ramesh" fill className="object-contain object-bottom drop-shadow-2xl" />
           </div>
        </div>

        {/* POSTER 3: WORK STARTS (Action Mode) */}
        <div className="w-[360px] h-[640px] bg-slate-900 relative overflow-hidden shadow-2xl border-[4px] border-yellow-500 rounded-xl flex flex-col">
           <div className="p-8 text-center relative z-10">
             <h1 className="text-yellow-400 text-4xl font-extrabold">పని మొదలు!</h1>
             <p className="text-white text-lg mt-2">ఎన్నికలు ముగిశాయి..</p>
             <p className="text-white text-2xl font-bold mt-1">ఇక అభివృద్ధి పరుగులే..</p>
           </div>
           
           <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 w-32 h-32 bg-yellow-500 rounded-full flex items-center justify-center animate-pulse opacity-20"></div>

           <div className="mt-auto relative w-full h-[340px] z-10">
             <Image src="/ramesh-namaste.png" alt="Ramesh" fill className="object-contain object-bottom" />
           </div>
           <div className="absolute bottom-6 w-full text-center z-20">
               <div className="inline-block border-2 border-yellow-400 px-6 py-2 rounded-lg text-yellow-400 font-bold text-xl">
                   కత్తి రమేష్ - మాదన్నపేట సర్పంచ్
               </div>
           </div>
        </div>

      </div>
    </div>
  );
}