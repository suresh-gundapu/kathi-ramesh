"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// 1. Importing the Font
import { Sree_Krushnadevaraya } from "next/font/google";

// 2. Initializing the Font
const skFont = Sree_Krushnadevaraya({ 
  weight: "400", 
  subsets: ["telugu"], 
  display: "swap" 
});

export default function Home() {
  const [formData, setFormData] = useState({ name: "", mobile: "", issue: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("పంపిస్తున్నాం...");
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("ధన్యవాదాలు! మీ సమస్య రిజిస్టర్ అయ్యింది. త్వరలో పరిష్కరిస్తాం.");
        setFormData({ name: "", mobile: "", issue: "" });
      } else {
        setStatus("ఏదో తప్పు జరిగింది. మళ్ళీ ప్రయత్నించండి.");
      }
    } catch (err) {
      setStatus("Error sending data.");
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 text-gray-800 font-sans flex flex-col ${skFont.className}`}>
      
      {/* --- NAVBAR --- */}
      <nav className="bg-white shadow-md fixed w-full top-0 z-50 border-b-4 border-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center border-2 border-green-600">
                    <span className="text-2xl">🏛️</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-green-800 leading-none">
                        కత్తి రమేష్
                    </span>
                    <span className="text-xs text-gray-500 font-bold uppercase mt-1 font-sans">
                        సర్పంచ్ - మాదన్నపేట
                    </span>
                </div>
              </Link>
            </div>
            
            <div className="hidden md:flex space-x-6 items-center">
              <Link href="/posters" className="text-green-700 font-bold hover:bg-green-50 px-3 py-2 rounded transition font-sans">
                 📥 పోస్టర్లు
              </Link>
              <Link href="/admin" className="text-green-700 font-bold border-2 border-green-100 bg-green-50 px-4 py-2 rounded-full hover:bg-green-100 transition flex items-center gap-2 font-sans">
                 <span>🔒</span> సర్పంచ్ లాగిన్
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <div className="relative bg-green-50 min-h-screen flex items-center pt-28 pb-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="max-w-7xl mx-auto w-full px-4 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="sm:text-center md:max-w-3xl md:mx-auto lg:col-span-7 lg:text-left">
              <div className="inline-flex items-center px-4 py-1 rounded-full bg-green-100 text-green-800 text-sm font-bold mb-4 shadow-sm border border-green-200 font-sans">
                 <span>🙏 మీ నమ్మకానికి శిరస్సు వంచి నమస్కరిస్తున్నా..</span>
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl leading-tight">
                గెలిచింది నేను కాదు...
                <br/>
                <span className="text-green-600">గెలిచింది మన మాదన్నపేట!</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 font-medium leading-relaxed font-sans">
                "నన్ను మీ ఇంటి బిడ్డగా భావించి అఖండ మెజారిటీతో గెలిపించిన ప్రతి ఒక్కరికీ నా హృదయపూర్వక ధన్యవాదాలు. 
                ఇకపై నేను రాజకీయ నాయకుడిని కాదు.. **మీ సేవకుడిని.**"
              </p>
              
              {/* --- ACTION BUTTONS (Posters Link added here) --- */}
              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start font-sans">
                <Link href="#complaint" className="px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-green-600 hover:bg-green-700 shadow-xl transition transform hover:-translate-y-1 flex items-center gap-2">
                  ✍️ సమస్యను చెప్పండి
                </Link>
                {/* POSTERS BUTTON - Prominent */}
                <Link href="/posters" className="px-8 py-4 border-2 border-green-600 text-lg font-bold rounded-full text-green-700 bg-white hover:bg-green-50 shadow-md transition flex items-center gap-2">
                  📥 విజయోత్సవ పోస్టర్లు
                </Link>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0 lg:col-span-5 flex justify-center relative">
               <div className="absolute top-10 right-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
               <div className="relative h-[500px] w-[400px]">
                 <Image src="/ramesh-namaste.png" alt="Sarpanch Kathi Ramesh" fill className="object-contain drop-shadow-2xl" priority />
                 <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md px-8 py-3 rounded-2xl shadow-2xl border-l-4 border-green-600 text-center w-max">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider font-sans">మీ సర్పంచ్</p>
                    <p className="text-3xl font-bold text-gray-900">కత్తి రమేష్</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- VICTORY STATS (Common Section) --- */}
      <div className="bg-green-900 py-16 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-400 to-transparent"></div>
         
         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
               <h2 className="text-yellow-400 text-lg font-bold tracking-widest uppercase font-sans">ప్రజా తీర్పు</h2>
               <h3 className="text-4xl md:text-5xl font-extrabold text-white mt-2">మాదన్నపేట ప్రభంజనం</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
               <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 transform hover:scale-105 transition">
                  <p className="text-5xl font-extrabold text-yellow-400 mb-2 font-sans">500+</p>
                  <p className="text-xl text-white font-bold">ఓట్ల మెజారిటీ</p>
               </div>
               <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 transform hover:scale-105 transition">
                  <p className="text-5xl font-extrabold text-yellow-400 mb-2 font-sans">85%</p>
                  <p className="text-xl text-white font-bold">పోలింగ్ శాతం</p>
               </div>
               <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 transform hover:scale-105 transition">
                  <p className="text-5xl font-extrabold text-yellow-400 mb-2 font-sans">1500+</p>
                  <p className="text-xl text-white font-bold">నమ్మకం ఉంచిన ప్రజలు</p>
               </div>
            </div>

            <div className="mt-12 text-center">
               <p className="text-green-200 text-lg font-sans max-w-2xl mx-auto">
                  "ఈ గెలుపు నాకు అహంకారాన్ని ఇవ్వదు.. బాధ్యతను పెంచుతుంది. 
                  నాపై నమ్మకం ఉంచిన ప్రతి ఒక్కరికీ కృతజ్ఞతలు."
               </p>
            </div>
         </div>
      </div>

      {/* --- GRIEVANCE FORM --- */}
      <div id="complaint" className="py-20 bg-white relative">
        <div className="max-w-4xl mx-auto px-4">
           <div className="text-center mb-12">
               <h2 className="text-green-600 font-bold tracking-wide uppercase text-sm font-sans">ప్రజా దర్బార్</h2>
               <h3 className="mt-2 text-3xl leading-8 font-extrabold text-gray-900 sm:text-4xl">
                   మీ సమస్య - నా పరిష్కారం
               </h3>
               <p className="mt-4 text-gray-500 text-lg font-sans">
                   గ్రామంలో మీకు ఎలాంటి సమస్య ఉన్నా (నీరు, డ్రైనేజీ, పెన్షన్, వీధి దీపాలు) ఇక్కడ రాయండి. 
                   నేను స్వయంగా పరిశీలించి పరిష్కరిస్తాను.
               </p>
           </div>
           <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-12 border border-gray-100">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                    <div className="col-span-1">
                        <label className="block text-sm font-bold text-gray-700 mb-2">మీ పేరు</label>
                        <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-green-500 outline-none transition bg-gray-50" placeholder="పూర్తి పేరు" />
                    </div>
                    <div className="col-span-1">
                        <label className="block text-sm font-bold text-gray-700 mb-2">ఫోన్ నెంబర్</label>
                        <input type="text"  required value={formData.mobile} onChange={(e) => setFormData({...formData, mobile: e.target.value})} className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-green-500 outline-none transition bg-gray-50" placeholder="99xx..." />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-bold text-gray-700 mb-2">సమస్య వివరాలు</label>
                        <textarea required rows={5} value={formData.issue} onChange={(e) => setFormData({...formData, issue: e.target.value})} className="w-full border border-gray-300 rounded-lg p-4 focus:ring-2 focus:ring-green-500 outline-none transition bg-gray-50" placeholder="సమస్యను క్లుప్తంగా వివరించండి..."></textarea>
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <button type="submit" className="w-full py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 font-bold text-xl shadow-lg transform transition active:scale-95">
                            {status ? status : "సమస్యను పంపించండి 🚀"}
                        </button>
                    </div>
                </form>
           </div>
        </div>
      </div>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 text-white py-10 border-t border-gray-800 text-center mt-auto">
          <p className="text-2xl font-bold mb-2">మాదన్నపేట గ్రామ పంచాయతీ</p>
          <p className="text-gray-400 font-sans">అభివృద్ధి బాటలో మన గ్రామం</p>
          <div className="mt-8 flex justify-center gap-4 text-sm text-gray-600 font-sans">
            <Link href="/admin" className="text-gray-500 hover:text-white transition underline">
               సర్పంచ్ లాగిన్ (Admin)
            </Link>
          </div>
          <div className="mt-4 text-sm text-gray-600 font-sans">
            Designed & Developed by <span className="text-green-500 font-bold">SG</span>
          </div>
      </footer>
    </div>
  );
}