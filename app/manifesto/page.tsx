import Link from "next/link";

export default function ManifestoPage() {
  const points = [
    "కోతుల బెడద నుండి రక్షణ - శాశ్వత పరిష్కారం.",
    "గ్రామదేవతల పున:ప్రతిష్టపన & బొడ్డు రాయి ఉత్సవం- మన సంస్కృతి.",
    "ఉపాధి హామీ పథకం కింద చెరువుల పూడిక తీత.",
    "చెరువు కట్టలపైన ప్రతి ఏటా జెంగాల్ కట్టింగ్.",
    "ప్రతి వీధికి 3 చెత్త కుండీల ఏర్పాటు.",
    "ప్రతి ఇంటికి విద్యుత్ మరియు మంచినీటి సౌకర్యం.",
    "స్వర్గ రధం ఏర్పాటు.",
    "పోచమ్మ గుడి చుట్టు CC నిర్మాణం, మండపం.",
    "ఇంటి పర్మిషన్ సులభతరం చేయుట.",
    "గ్రామంలో గ్రంథాలయం ఏర్పాటు.",
    "గ్రామ సభ తీర్మానాల బోర్డు ఏర్పాటు.",
    "బస్ స్టాండ్ నిర్మాణం & మూత్రశాలలు.",
    "యువతకు అండగా గ్రంథాలయం, క్రీడా మైదానాల ఏర్పాటు."

  ];

  return (
    <div className="min-h-screen bg-orange-50 font-sans">
      {/* Navbar Simple */}
      <nav className="bg-white shadow p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-orange-600 font-bold text-xl">← వెనక్కి వెళ్ళు</Link>
            <span className="font-bold text-gray-800">కత్తి రమేష్ మేనిఫెస్టో</span>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-orange-700 mb-8 font-[family-name:var(--font-sk)]">
          మాదన్నపేట అభివృద్ధి ప్రణాళిక
        </h1>
        
        <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-orange-500">
            <p className="text-lg text-gray-600 mb-6 text-center">
                నేను గెలిచిన వెంటనే ఈ పనులన్నీ బాధ్యతగా పూర్తి చేస్తానని మాటిస్తున్నాను.
            </p>
            <ul className="space-y-4">
                {points.map((point, i) => (
                    <li key={i} className="flex items-start bg-orange-50 p-4 rounded-md hover:bg-orange-100 transition">
                        <span className="flex-shrink-0 h-8 w-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold mr-4">
                            {i + 1}
                        </span>
                        <span className="text-lg text-gray-800 font-medium">{point}</span>
                    </li>
                ))}
            </ul>
             <div className="mt-10 text-center">
                <Link href="/#contact" className="inline-block bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-gray-900">
                    మీ సలహా ఇవ్వండి
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}