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
    { id: 3, src: "/udyamam3.jpg", text: "రాస్తారోకో చేస్తున్న సందర్భం..." },
    { id: 4, src: "/udyamam4.jpg", text: "గ్రామ ప్రజలతో మమేకమైన క్షణాలు..." },
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
      <nav className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-orange-600 font-[family-name:var(--font-sk)]">కత్తి రమేష్</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/" className="text-gray-900 hover:text-orange-600 font-medium">హోమ్</Link>
              <Link href="#about" className="text-gray-500 hover:text-orange-600 font-medium">మన గురించి</Link>
              <Link href="/manifesto" className="text-gray-500 hover:text-orange-600 font-medium">పూర్తి మేనిఫెస్టో</Link>
              <Link href="#contact" className="px-4 py-2 rounded-md shadow-sm text-white bg-orange-600 hover:bg-orange-700">
                మద్దతు తెలపండి
              </Link>
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon logic: X if open, Menu if closed */}
                {!isMobileMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
              <Link 
                href="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
              >
                హోమ్
              </Link>
              <Link 
                href="#about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
              >
                మన గురించి
              </Link>
              <Link 
                href="/manifesto" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50"
              >
                పూర్తి మేనిఫెస్టో
              </Link>
              <Link 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-orange-600 bg-orange-50 hover:bg-orange-100"
              >
                మద్దతు తెలపండి
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <div className="relative bg-orange-50 min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto w-full px-4">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl font-[family-name:var(--font-sk)]">
                <span className="block">మన ఊరి అభివృద్ధి కోసం</span>
                <span className="block text-orange-600 mt-2">పునాది బలంగా వేసుకుందాం</span>
              </h1>
              <p className="mt-6 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
                పుట్టిన చోటుతో పోలిస్తే పనిచేసిన చోటు ముఖ్యం. సమస్య వినిపిస్తే అదే చోట పరిష్కారం. 
                మీ ఆశీర్వాదం నా బలం.
              </p>
              <div className="mt-8 flex gap-4 justify-center lg:justify-start">
                <Link href="/manifesto" className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 md:py-4 md:text-lg">
                  మేనిఫెస్టో చూడండి
                </Link>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-6 flex justify-center">
              <div className="relative h-80 w-80 md:h-96 md:w-96 rounded-full overflow-hidden border-4 border-orange-500 shadow-2xl bg-white">
                 <Image src="/ramesh.png" alt="Kathi Ramesh" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
 {/* --- MANIFESTO --- */}
      <div id="manifesto" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">మా వాగ్దానం</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              మాదన్నపేట ప్రగతి కోసం నా ప్రణాళిక
            </p>
          </div>
          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {[
                { title: 'కోతుల బెడద నుండి రక్షణ', desc: 'శాశ్వత పరిష్కారం కోసం ప్రత్యేక చర్యలు.' },
                { title: 'గ్రామదేవతల పున:ప్రతిష్టపన', desc: 'మన సంస్కృతిని కాపాడుకుందాం.' },
                { title: 'ప్రతి ఇంటికి సౌకర్యాలు', desc: 'విద్యుత్, మంచినీరు, డ్రైనేజీ సమస్యల పరిష్కారం.' },
                { title: 'యువతకు అండగా', desc: 'గ్రంథాలయం, బస్ స్టాండ్, క్రీడా మైదానాల ఏర్పాటు.' },
                 { title: 'అభివృద్ధి పనులు', desc: 'చెరువుల పూడిక తీత, CC రోడ్ల నిర్మాణం.' },
                 { title: 'పారదర్శకత', desc: 'గ్రామ సభ తీర్మానాల బోర్డు ఏర్పాటు.' },
              ].map((item, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white font-bold text-xl">
                      ✓
                    </div>
                  </div>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium text-gray-900">{item.title}</dt>
                    <dd className="mt-2 text-base text-gray-500">{item.desc}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      
      {/* --- TELANGANA UDYAMAM CAROUSEL --- */}
      <div id="about" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-10">
                <h2 className="text-orange-600 font-semibold tracking-wide uppercase">నా ప్రస్థానం</h2>
                <h3 className="mt-2 text-3xl leading-8 font-extrabold text-gray-900 sm:text-4xl font-[family-name:var(--font-sk)]">
                    నాడు ఉద్యమంలో... నేడు గ్రామ అభివృద్ధిలో... ఎప్పుడూ ప్రజల పక్షమే.
                </h3>
            </div>
            
            {/* CAROUSEL CONTAINER */}
            <div className="relative w-full h-64 md:h-[500px] bg-gray-200 rounded-xl overflow-hidden shadow-2xl group">
                {udyamamPhotos.map((photo, index) => (
                    <div 
                        key={photo.id}
                        className={`absolute inset-0 transition-transform duration-700 ease-in-out flex items-center justify-center bg-gray-900
                            ${index === currentSlide ? "translate-x-0" : "translate-x-full hidden"}`}
                        style={{ transform: `translateX(${100 * (index - currentSlide)}%)`, display: 'flex' }}
                    >
                         <div className="relative w-full h-full">
                            { <Image src={photo.src} alt="Udyamam" fill className="object-cover opacity-80" /> }
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 bg-gradient-to-t from-black/80 to-transparent">
                                <span className="text-6xl mb-4">📸</span>
                                <h4 className="text-2xl font-bold font-[family-name:var(--font-sk)] text-center"></h4>
                                <p className="text-sm text-gray-300 mt-2">({index + 1} / 4)</p>
                            </div>
                         </div>
                    </div>
                ))}

                {/* Left Arrow */}
                <button onClick={prevSlide} className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 hover:bg-white text-white hover:text-black p-2 rounded-full backdrop-blur-sm transition z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                </button>
                {/* Right Arrow */}
                <button onClick={nextSlide} className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 hover:bg-white text-white hover:text-black p-2 rounded-full backdrop-blur-sm transition z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                </button>
            </div>
        </div>
      </div>

      {/* CONTACT FORM */}
      <div id="contact" className="py-16 bg-gray-100">
        <div className="max-w-xl mx-auto px-4">
           <div className="bg-white shadow-xl rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center font-[family-name:var(--font-sk)]">
                    మీ సమస్య మాకు చెప్పండి
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <input type="text" placeholder="మీ పేరు" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full border border-gray-300 rounded-md p-3" />
                    <input type="text" placeholder="ఫోన్ నెంబర్" value={formData.mobile} onChange={(e) => setFormData({...formData, mobile: e.target.value})} className="w-full border border-gray-300 rounded-md p-3" />
                    <textarea placeholder="మీ సమస్య / సలహా" required rows={4} value={formData.issue} onChange={(e) => setFormData({...formData, issue: e.target.value})} className="w-full border border-gray-300 rounded-md p-3"></textarea>
                    <button type="submit" className="w-full py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 font-bold">
                        {status ? status : "పంపించండి"}
                    </button>
                </form>
           </div>
        </div>
      </div>
{/* --- ELECTION SYMBOL SECTION --- */}
      <div className="bg-orange-600 py-8 relative overflow-hidden">
        {/* Background decorative pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" fill="white">
                <path d="M0 100 C 20 0 50 0 100 100 Z" />
            </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-white text-xl md:text-2xl font-bold mb-4 font-[family-name:var(--font-sk)]">
                రాబోయే ఎన్నికల్లో మన గుర్తు...
            </h2>
            
            <div className="bg-white rounded-full p-6 inline-block shadow-2xl animate-pulse">
                {/* రేపు గుర్తు వచ్చాక ఇక్కడ ఇమేజ్ పెట్టు. 
                   ప్రస్తుతానికి ఒక Placeholder Icon పెడుతున్నా.
                   Image example: <Image src="/symbol.png" width={80} height={80} alt="Symbol" />
                */}
                <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-gray-100 rounded-full border-4 border-orange-500">
                    {/* గుర్తు ఇమేజ్ లేనప్పుడు కనిపించే టెక్స్ట్ */}
                    <span className="text-4xl">❓</span> 
                    {/* గుర్తు వచ్చాక పైన span తీసేసి కింద Image వాడు */}
                    {/* <Image src="/symbol.png" alt="Election Symbol" width={100} height={100} /> */}
                </div>
            </div>

            <div className="mt-4">
                <h3 className="text-3xl md:text-5xl font-extrabold text-white tracking-wider font-[family-name:var(--font-sk)] drop-shadow-md">
                   ""
                </h3>
                <p className="text-orange-100 mt-2 text-lg">
                    బ్యాలెట్ పేపర్ లో <span className="font-bold text-white underline">వ నెంబర్</span>  పై మీ అమూల్యమైన ఓటు వేయండి.
                </p>
            </div>
        </div>
      </div>
       {/* FOOTER */}
       <footer className="bg-gray-800 text-white py-8 text-center">
          <p className="text-xl font-bold font-[family-name:var(--font-sk)]">ఆదరించి ఆశీర్వదించండి</p>
          <p className="mt-2 text-gray-400">కత్తి రమేష్ - మాదన్నపేట సర్పంచ్ అభ్యర్థి 🙏</p>
      </footer>
    </div>
  );
}