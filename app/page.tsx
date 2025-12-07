"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: "", mobile: "", issue: "" });
  const [status, setStatus] = useState("");
  
  // --- STATE FOR MOBILE MENU ---
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);

  const udyamamPhotos = [
    { id: 1, src: "/udyamam1.jpg", text: "నిజాం కాలేజీ గ్రౌండ్స్ సభలో..." },
    { id: 2, src: "/udyamam2.jpg", text: "వంటావార్పు కార్యక్రమంలో..." },
   
  ];

  // Auto Slide Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % udyamamPhotos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [udyamamPhotos.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % udyamamPhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? udyamamPhotos.length - 1 : prev - 1));
  };

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
        setStatus("ధన్యవాదాలు! మీ సమస్య మాకు చేరింది.");
        setFormData({ name: "", mobile: "", issue: "" });
      } else {
        setStatus("ఏదో తప్పు జరిగింది. మళ్ళీ ప్రయత్నించండి.");
      }
    } catch (err) {
      setStatus("Error sending data.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      
      {/* --- NAVBAR --- */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50 border-b-4 border-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20"> {/* Height increased slightly for logo */}
            
            {/* --- NEW LOGO DESIGN --- */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-3 group">
                {/* Symbol Circle */}
                <div className="relative w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center border-2 border-orange-500 shadow-sm group-hover:shadow-md transition-all duration-300 transform group-hover:scale-105">
                    <Image src="/symbol.png" width={30} height={30} alt="Logo" className="object-contain" />
                </div>
                {/* Text Block */}
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-orange-700 leading-none font-[family-name:var(--font-sk)] tracking-wide">
                        కత్తి రమేష్
                    </span>
                    <span className="text-[10px] md:text-xs text-gray-500 font-bold tracking-wider uppercase mt-1">
                        మాదన్నపేట సర్పంచ్ అభ్యర్థి
                    </span>
                </div>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center">
              <Link href="/" className="text-gray-700 hover:text-orange-600 font-bold transition">హోమ్</Link>
              <Link href="#about" className="text-gray-700 hover:text-orange-600 font-bold transition">మన గురించి</Link>
              <Link href="/manifesto" className="text-gray-700 hover:text-orange-600 font-bold transition">పూర్తి మేనిఫెస్టో</Link>
              
              {/* Posters Button */}
              <Link href="/posters" className="flex items-center gap-2 text-orange-700 font-bold border-2 border-orange-200 bg-orange-50 px-4 py-2 rounded-full hover:bg-orange-100 transition shadow-sm">
                 <span>📥</span> ప్రచార పోస్టర్లు
              </Link>
              
              <Link href="#contact" className="px-5 py-2 rounded-full shadow-md text-white bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 font-bold transition transform hover:-translate-y-0.5">
                మద్దతు తెలపండి
              </Link>
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <div className="-mr-2 flex md:hidden items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-orange-600 hover:bg-orange-50 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 shadow-xl absolute w-full z-50">
            <div className="px-4 pt-4 pb-6 space-y-3 flex flex-col">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-bold text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                హోమ్
              </Link>
              <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-bold text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                మన గురించి
              </Link>
              <Link href="/manifesto" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-bold text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                పూర్తి మేనిఫెస్టో
              </Link>
              <Link href="/posters" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-bold text-orange-700 bg-orange-100 border border-orange-200">
                📥 ప్రచార పోస్టర్లు
              </Link>
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-bold text-center text-white bg-orange-600 hover:bg-orange-700 shadow-md">
                మద్దతు తెలపండి
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <div className="relative bg-orange-50 min-h-screen flex items-center pt-28 pb-12 overflow-hidden">
        
        {/* BACKGROUND OPACITY IMAGE (Updated Opacity to 20) */}
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none z-0">
             <Image 
                src="/ramesh-namaste.png" 
                alt="Background Effect" 
                fill 
                className="object-cover object-top"
             />
        </div>

        <div className="max-w-7xl mx-auto w-full px-4 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            
            {/* TEXT SIDE */}
            <div className="sm:text-center md:max-w-3xl md:mx-auto lg:col-span-7 lg:text-left">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-orange-200 bg-orange-100 text-orange-800 text-sm font-medium mb-4 shadow-sm">
                 <span>✊ మాదన్నపేట గ్రామ ప్రజలు బలపరిచిన స్వతంత్ర అభ్యర్థి</span>
              </div>
              
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl font-[family-name:var(--font-sk)] leading-tight drop-shadow-sm">
                మన ఊరి అభివృద్ధి కోసం
                <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">పునాది బలంగా వేసుకుందాం !</span>
              </h1>

              <p className="mt-4 text-lg text-gray-600 font-medium leading-relaxed">
                "నా చిన్నతనం నుండి పెరిగింది, నా జీవితం గడిచింది అంతా ఈ మాదన్నపేటలోనే. ఉండేది ఇక్కడే.. ఎప్పటికీ మీతోనే! <br/>
                మీలో ఒకడిగా, ఇక్కడి సమస్యలపై పూర్తి అవగాహనతో మీ ముందుకు వస్తున్నా."
              </p>
              
              <div className="mt-6 bg-white/80 backdrop-blur-sm p-5 rounded-2xl shadow-md border border-orange-100">
                <ul className="space-y-3 text-left">
                    <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-yellow-500 text-white flex items-center justify-center text-xs mr-3 mt-0.5 shadow">🛕</span>
                        <span className="text-gray-800 font-bold">తక్షణ కర్తవ్యం: <span className="font-normal text-gray-600">గ్రామ దేవతల పునఃప్రతిష్టాపన - బొడ్డు రాయి ఉత్సవం.</span></span>
                    </li>
                    <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs mr-3 mt-0.5 shadow">💧</span>
                        <span className="text-gray-800 font-bold">సమస్యల పరిష్కారం: <span className="font-normal text-gray-600">నీరు, డ్రైనేజీ, లైటింగ్ సమస్యలకు యుద్ధ ప్రాతిపదికన పరిష్కారం.</span></span>
                    </li>
                    <li className="flex items-start">
                        <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs mr-3 mt-0.5 shadow">🤝</span>
                        <span className="text-gray-800 font-bold">యువతకు భరోసా: <span className="font-normal text-gray-600">ఉద్యోగ & క్రీడా రంగాల్లో గైడెన్స్.</span></span>
                    </li>
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link href="/manifesto" className="px-8 py-3 border border-transparent text-base font-bold rounded-full text-white bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                  నా పూర్తి మేనిఫెస్టో
                </Link>
                <Link href="/posters" className="px-8 py-3 border-2 border-orange-600 text-base font-bold rounded-full text-orange-700 bg-white hover:bg-orange-50 shadow-md transition flex items-center gap-2">
                  <span>📥</span> ప్రచార పోస్టర్లు
                </Link>
              </div>
            </div>

            {/* MAIN IMAGE SIDE */}
            <div className="mt-12 lg:mt-0 lg:col-span-5 flex justify-center relative">
               <div className="absolute top-10 right-10 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
               <div className="absolute bottom-10 left-10 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
               
               <div className="relative h-[450px] w-[350px] md:h-[550px] md:w-[450px]">
                 <Image 
                    src="/ramesh-namaste.png" 
                    alt="Kathi Ramesh" 
                    fill 
                    className="object-contain drop-shadow-2xl"
                    priority
                 />
                 
                 {/* Symbol Highlight */}
                 <div className="absolute top-10 -left-4 md:-left-8 bg-white p-3 rounded-full shadow-2xl border-4 border-yellow-400 animate-bounce z-20 cursor-pointer hover:scale-110 transition">
                    <div className="text-center">
                        <p className="text-[10px] font-extrabold text-orange-600 uppercase mb-1 tracking-wider">మన గుర్తు</p>
                        <Image src="/symbol.png" width={70} height={70} alt="Scissors Symbol" className="object-contain mx-auto" />
                        <p className="text-xl font-extrabold text-gray-900 mt-1 font-[family-name:var(--font-sk)]">కత్తెర</p>
                    </div>
                 </div>

                 <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md px-6 py-2 rounded-xl shadow-xl border-l-4 border-orange-600 text-center w-max">
                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">స్వతంత్ర సర్పంచ్ అభ్యర్థి</p>
                    <p className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-sk)]">కత్తి రమేష్</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- MANIFESTO SECTION --- */}
      <div id="manifesto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg text-orange-600 font-bold tracking-wide uppercase">మా వాగ్దానం</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl font-[family-name:var(--font-sk)]">
              మాదన్నపేట ప్రగతి కోసం నా ప్రణాళిక
            </p>
            <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="mt-12">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-12">
              {[
                { title: 'కోతుల బెడద నుండి రక్షణ', desc: 'శాశ్వత పరిష్కారం కోసం ప్రత్యేక చర్యలు.' },
                { title: 'గ్రామదేవతల పున:ప్రతిష్టపన', desc: 'మన సంస్కృతిని కాపాడుకుందాం.' },
                { title: 'ప్రతి ఇంటికి సౌకర్యాలు', desc: 'విద్యుత్, మంచినీరు, డ్రైనేజీ సమస్యల పరిష్కారం.' },
                { title: 'యువతకు అండగా', desc: 'గ్రంథాలయం, బస్ స్టాండ్, క్రీడా మైదానాల ఏర్పాటు.' },
                 { title: 'అభివృద్ధి పనులు', desc: 'చెరువుల పూడిక తీత, CC రోడ్ల నిర్మాణం.' },
                 { title: 'పారదర్శకత', desc: 'గ్రామ సభ తీర్మానాల బోర్డు ఏర్పాటు.' },
              ].map((item, index) => (
                <div key={index} className="flex p-4 rounded-xl hover:bg-orange-50 transition border border-transparent hover:border-orange-100">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-orange-100 text-orange-600 font-bold text-2xl shadow-sm">
                      ✓
                    </div>
                  </div>
                  <div className="ml-6">
                    <dt className="text-xl leading-6 font-bold text-gray-900 font-[family-name:var(--font-sk)]">{item.title}</dt>
                    <dd className="mt-2 text-base text-gray-600 leading-relaxed">{item.desc}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* --- TAKSHANA KARTHAVYAM --- */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-y border-orange-200 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 border-2 border-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100 rounded-bl-full opacity-50"></div>
            
            <div className="flex-shrink-0 relative z-10">
               <div className="w-28 h-28 bg-yellow-100 rounded-full flex items-center justify-center border-4 border-yellow-500 animate-[bounce_2s_infinite]">
                  <span className="text-6xl">🛕</span>
               </div>
            </div>
            <div className="text-center md:text-left flex-1 relative z-10">
               <div className="inline-block bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest shadow">
                 గెలిచిన వెంటనే నా మొదటి పని
               </div>
               <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 font-[family-name:var(--font-sk)]">
                 తక్షణ కర్తవ్యం: గ్రామ దేవతల పునఃప్రతిష్టాపన
               </h2>
               <h3 className="text-2xl text-orange-600 font-bold mb-4 font-[family-name:var(--font-sk)]">
                 - బొడ్డు రాయి ఏర్పాటు ఉత్సవం
               </h3>
               <p className="text-gray-600 text-lg leading-relaxed">
                 మన ఊరి సంస్కృతిని, సంప్రదాయాన్ని కాపాడుకోవడమే నా ప్రథమ బాధ్యత. 
                 అందరి సమక్షంలో, అత్యంత వైభవంగా ఈ ఉత్సవాన్ని జరిపిస్తానని మాటిస్తున్నాను.
               </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- CAROUSEL --- */}
      <div id="about" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-orange-600 font-bold tracking-wide uppercase text-sm">నా ప్రస్థానం</h2>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold text-gray-900 sm:text-4xl font-[family-name:var(--font-sk)]">
                    నాడు ఉద్యమంలో... నేడు గ్రామ అభివృద్ధిలో... <br/>ఎప్పుడూ ప్రజల పక్షమే.
                </h3>
            </div>
            <div className="relative w-full h-64 md:h-[500px] bg-gray-100 rounded-2xl overflow-hidden shadow-2xl group border border-gray-200">
                {udyamamPhotos.map((photo, index) => (
                    <div 
                        key={photo.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center bg-gray-900
                            ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
                    >
                         <div className="relative w-full h-full">
                           <Image src={photo.src} alt="Udyamam" fill className="object-cover opacity-90" /> 
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 bg-gradient-to-t from-black/90 to-black/30">
                                <span className="text-6xl mb-6 opacity-80">📸</span>
                                <h4 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-sk)] text-center mb-2"></h4>
                                <p className="text-sm text-gray-400 mt-2 uppercase tracking-widest"></p>
                            </div>
                         </div>
                    </div>
                ))}
                
                {/* Dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                    {udyamamPhotos.map((_, idx) => (
                        <button 
                            key={idx} 
                            onClick={() => setCurrentSlide(idx)}
                            className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-orange-500 w-8' : 'bg-white/50 hover:bg-white'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
      </div>

      {/* CONTACT FORM */}
      <div id="contact" className="py-20 bg-gray-50">
        <div className="max-w-xl mx-auto px-4">
           <div className="bg-white shadow-2xl rounded-2xl p-8 md:p-10 border-t-8 border-orange-500">
                <h3 className="text-3xl font-extrabold text-gray-900 mb-2 text-center font-[family-name:var(--font-sk)]">
                    మీ సమస్య మాకు చెప్పండి
                </h3>
                <p className="text-gray-500 text-center mb-8">నేను వింటాను.. పరిష్కరిస్తాను.</p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                    <input type="text" placeholder="మీ పేరు" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full border border-gray-300 rounded-lg p-3.5 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition" />
                    <input type="text" placeholder="ఫోన్ నెంబర్" value={formData.mobile} onChange={(e) => setFormData({...formData, mobile: e.target.value})} className="w-full border border-gray-300 rounded-lg p-3.5 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition" />
                    <textarea placeholder="మీ సమస్య / సలహా" required rows={4} value={formData.issue} onChange={(e) => setFormData({...formData, issue: e.target.value})} className="w-full border border-gray-300 rounded-lg p-3.5 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"></textarea>
                    <button type="submit" className="w-full py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg hover:from-orange-700 hover:to-red-700 font-bold text-lg shadow-lg transform transition active:scale-95">
                        {status ? status : "పంపించండి"}
                    </button>
                </form>
           </div>
        </div>
      </div>

      {/* --- ELECTION SYMBOL SECTION --- */}
      <div className="bg-orange-600 py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="white">
                <path d="M0 100 C 20 0 50 0 100 100 Z" />
            </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-orange-100 text-2xl md:text-3xl font-bold mb-8 font-[family-name:var(--font-sk)]">
                మాదన్నపేట గ్రామ ప్రజలు బలపరిచిన స్వతంత్ర సర్పంచ్ అభ్యర్థి
            </h2>
            <div className="bg-white rounded-[40px] p-10 inline-block shadow-2xl transform hover:scale-105 transition duration-300 border-4 border-yellow-400">
                <div className="flex flex-col items-center">
                     <Image src="/symbol.png" width={180} height={180} alt="Kathera" className="object-contain" /> 
                    <h3 className="text-5xl md:text-7xl font-extrabold text-orange-600 tracking-wider font-[family-name:var(--font-sk)] mt-4 drop-shadow-sm">
                       కత్తెర
                    </h3>
                </div>
            </div>
            <div className="mt-10">
                <p className="text-white text-3xl md:text-4xl font-bold mb-3 font-[family-name:var(--font-sk)]">
                    మన గుర్తు: <span className="text-yellow-300 drop-shadow-md">కత్తెర (Scissors)</span>
                </p>
                <div className="text-orange-100 text-xl font-medium">
                    బ్యాలెట్ పేపర్ లో <span className="font-bold text-white underline decoration-2 underline-offset-4">2వ నెంబర్</span> పై మీ అమూల్యమైన ఓటు వేయండి.
                </div>
                
                <div className="mt-8 flex justify-center">
                    <div className="bg-orange-800/60 backdrop-blur-md px-8 py-4 rounded-2xl border border-orange-400/50">
                        <p className="text-orange-200 text-xs font-bold uppercase tracking-widest mb-1">Polling Date</p>
                        <p className="text-white font-extrabold text-3xl">11-12-2025</p>
                        <p className="text-orange-200 text-sm mt-1 font-bold">( గురువారం )</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      
       {/* FOOTER */}
       <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <div className="mb-8">
                  <span className="text-3xl font-bold text-white font-[family-name:var(--font-sk)]">కత్తి రమేష్</span>
                  <p className="text-gray-500 text-sm mt-1 uppercase tracking-widest">మాదన్నపేట సర్పంచ్ అభ్యర్థి</p>
              </div>
              
              <p className="text-2xl font-bold font-[family-name:var(--font-sk)] mb-4 text-yellow-400">ఆదరించి ఆశీర్వదించండి 🙏</p>
              
              <div className="flex justify-center gap-6 mb-8">
                  <Link href="/" className="text-gray-400 hover:text-white transition">Home</Link>
                  <Link href="/manifesto" className="text-gray-400 hover:text-white transition">Manifesto</Link>
                  <Link href="/posters" className="text-gray-400 hover:text-white transition">Posters</Link>
              </div>

              <div className="border-t border-gray-800 my-8 w-1/3 mx-auto"></div>
              
              {/* Developer Credit */}
              <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
                Designed & Developed by 
                <a 
                  href="https://webtsite.vercel.app/about" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-400 font-extrabold transition bg-gray-800 px-3 py-1 rounded-full text-xs"
                >
                  SG
                </a>
              </p>
          </div>
      </footer>
    </div>
  );
}