import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../assets/Hero.png';
import cow from '../assets/cow.jpg';
import piraa from '../assets/piraa.png';
import ImageSlider from '../components/ImageSlider';

const Home = ({ language }) => {
  const content = {
    EN: {
      tagline: "Experience Ancient Purity",
      title: "Handmade Vedic Kande for a Positive Home",
      desc: "Specially crafted to remove negative energy and bring spiritual peace. 100% natural and chemical-free.",
      // btn text removed as button is deleted
      btnText: "Order via Call",
      btnProducts: "Explore Products",
     
      // Detailed Info Sections
      powerTitle: "The Science of Sacred Elements",
      powerSubtitle: "Deep Scientific Roots & Environmental Protection",
compareTitle: "How our Vedic Kande stand out from ordinary chemical products",
comparison: [
  { feature: "Primary Source", ordinary: "Harmful Wax & Synthetic Chemicals", vedic: "Desi Cow Dung & 25+ Vedic Herbs" },
  { feature: "Respiratory Safety", ordinary: "Causes Eye Irritation & Chest Congestion", vedic: "Purifies Air & Boosts Oxygen Levels" },
  { feature: "Bacteria Defense", ordinary: "Zero effectiveness against germs", vedic: "Kills 90% Airborne Bacteria naturally" },
  { feature: "Energy Level", ordinary: "Only masks bad odors for a while", vedic: "Cleanses Home Aura & Removes Vastu Dosh" }
],
      sections: [
        {
          head: "The Bio-Purifying Force (Gobar)",
          icon: "🌿",
          sciTitle: "Scientific Benefits",
          sciPoints: [
            "Thermal Insulation: Naturally regulates home temperature.",
            "Radiation Shield: Research suggests neutralizing Wi-Fi/EMF radiations.",
            "Oxygen Booster: Releases O2 & O3 when burnt with pure Ghee.",
            "Airborne Disinfectant: Eliminates 90% of harmful bacteria in the air."
          ],
          modTitle: "Modern & Spiritual Properties",
          modPoints: [
            "Wealth from Waste: Promotes rural economy.",
            "Spiritual Prosperity: Symbolizes peace and abundance.",
            "Natural Deodorizer: Absorbs odors with an earthy aroma."
          ],
          theme: "emerald"
        },
        {
          head: "The Divine Elixir (Gomutra)",
          icon: "💧",
          sciTitle: "Scientific Benefits",
          sciPoints: [
            "Mineral Rich: Contains 24 minerals like Gold & Iron.",
            "Bio-Enhancer: Increases herb potency in the kande.",
            "Antimicrobial Agent: Powerful natural sanitizer.",
            "Respiratory Aid: Vapors help boost immunity."
          ],
          modTitle: "Modern & Spiritual Properties",
          modPoints: [
            "Aura Cleansing: Removes 'Vastu' related blockages.",
            "Ethical Sourcing: Supports traditional Gaushalas.",
            "Pure Purity: Essence of holy rivers in your home."
          ],
           theme: "blue"
        }
      ],

      // Cow's Role in Environment
      envTitle: "The Mother of Ecosystem",
      envSub: "Role of Cow in Environmental Conservation",
      envPoints: [
        { title: "Saving Forests", text: "100 packs save one full tree from being cut for wood.", icon: "🌳" },
        { title: "Zero Chemical Footprint", text: "Zero toxic fumes, protecting both lungs and the ozone layer.", icon: "🚫" },
        { title: "Premium Plant Food", text: "Residual ash obtained from cow dung, cow urine, and cow dung cakes is highly beneficial and eco-friendly for plant life and the animal kingdom.", icon: "🌻" }
      ]
    },
    HI: {
      tagline: "प्राचीन शुद्धता का अनुभव करें",
      title: "सकारात्मक ऊर्जा के लिए शुद्ध वैदिक कंडे",
      desc: "नकारात्मक ऊर्जा को दूर करने और आध्यात्मिक शांति लाने के लिए विशेष रूप से निर्मित। 100% प्राकृतिक और रसायन मुक्त।",
      // btn text removed as button is deleted
      btnText: "आर्डर करें",
      btnProducts: "प्रोडक्ट्स देखें",
      powerTitle: "पवित्र तत्वों का विज्ञान",
      powerSubtitle: "गहन वैज्ञानिक आधार और पर्यावरण संरक्षण",
compareTitle: "हमारे वैदिक कंडे साधारण केमिकल उत्पादों से बेहतर कैसे हैं",
comparison: [
  { feature: "मुख्य स्रोत", ordinary: "हानिकारक मोम और सिंथेटिक केमिकल", vedic: "देशी गाय का गोबर और 25+ वैदिक जड़ी-बूटियाँ" },
  { feature: "श्वसन सुरक्षा", ordinary: "आंखों में जलन और भारीपन पैदा करता है", vedic: "हवा को शुद्ध कर ऑक्सीजन का स्तर बढ़ाता है" },
  { feature: "कीटाणु रक्षा", ordinary: "कीटाणुओं पर कोई असर नहीं होता", vedic: "90% तक हवा के कीटाणुओं को नष्ट करता है" },
  { feature: "ऊर्जा का स्तर", ordinary: "केवल कुछ समय के लिए दुर्गंध छिपाता है", vedic: "घर की ओरा शुद्ध कर वास्तु दोष दूर करता है" }
],
      sections: [
        {
          head: "प्राकृतिक शोधक शक्ति (गोबर)",
          icon: "🌿",
          sciTitle: "वैज्ञानिक गुण",
          sciPoints: [
            "थर्मल इन्सुलेशन: घर के तापमान को प्राकृतिक रूप से नियंत्रित करता है।",
            "रेडिएशन कवच: मोबाइल और वाई-फाई (EMF) तरंगों को कम करने में सहायक।",
            "प्राणवायु संचार: घी के साथ जलाने पर ऑक्सीजन और ओजोन बढ़ाता है।",
            "कीटाणुनाशक: हवा में मौजूद 90% तक बैक्टीरिया को नष्ट कर देता है।"
          ],
          modTitle: "आधुनिक एवं आध्यात्मिक गुण",
          modPoints: [
            "अपशिष्ट से आय: ग्रामीण अर्थव्यवस्था को मजबूती देता है।",
            "लक्ष्मी का वास: घर में सुख, शांति और समृद्धि का आह्वान।",
            "प्राकृतिक खुशबू: दुर्गंध सोखकर घर को सोंधी सुगंध से भर देता है।"
          ],
          theme: "emerald"
        },
        {
          head: "दिव्य खनिज अर्क (गोमूत्र)",
          icon: "💧",
          sciTitle: "वैज्ञानिक गुण",
          sciPoints: [
            "खनिजों का भंडार: इसमें स्वर्ण और लोहा जैसे 24 आवश्यक खनिज होते हैं।",
            "बायो-बूस्टर: जड़ी-बूटियों की शक्ति को कई गुना बढ़ा देता है।",
            "प्राकृतिक सैनिटाइजर: घर के वातावरण के लिए एक शक्तिशाली शोधक।",
            "श्वसन सुधार: फेफड़ों की सफाई और रोग प्रतिरोधक क्षमता में वृद्धि।"
          ],
          modTitle: "आधुनिक एवं आध्यात्मिक गुण",
          modPoints: [
            "ओरा की शुद्धि: नकारात्मक ऊर्जा और वास्तु दोषों को दूर करता है।",
            "नैतिक स्रोत: गौशालाओं के संरक्षण और सेवा में योगदान।",
            "पवित्रता का अहसास: घर में देवत्व और पवित्रता का संचार।"
          ],
          theme: "blue"
        }
      ],

      envTitle: "पारिस्थितिकी की जननी",
      envSub: "पर्यावरण संरक्षण में गाय की मुख्य भूमिका",
      envPoints: [
        { title: "वनों की रक्षा", text: "लकड़ी की जगह कंडों का उपयोग पेड़ों को कटने से सीधे बचाता है।", icon: "🌳" },
        { title: "केमिकल मुक्त भविष्य", text: "शून्य जहरीला धुआं, जिससे ओजोन परत और फेफड़े सुरक्षित रहते हैं।", icon: "🚫" },
        { title: "पौधों के लिए अमृत", text: "गोबर, गोमूत्र एवं गोबर कंडों से बची राख वनस्पति एवं प्राणी जगत के लिए अत्यंत उपयुक्त और पर्यावरण हितैषी है।", icon: "🌻" }
      ]
    }
  };

  const curr = content[language];

  return (
    <div className="bg-[#FFFCF9] text-stone-900 selection:bg-orange-200">
      
      {/* --- SECTION 1: HERO (REFINED - Call Button Removed) --- */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden border-b border-stone-100">
        {/* Abstract Background Element for elegance */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-[150px] opacity-60"></div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-8 text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl font-black text-orange-900">
    GauTatva
  </h1>
            <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-900 text-xs font-bold  rounded-full uppercase shadow-inner">{curr.tagline}</span>
            <h1 className="text-5xl lg:text-7xl font-serif leading-tight text-stone-950 tracking-tight">{curr.title}</h1>
            <p className="text-lg text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">{curr.desc}</p>
            
            {/* Call Button removed from here */}
            
{/* --- यहाँ से बटन वापस जोड़ा गया है --- */}
<motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
  /* gap-6 बटन के बीच की दूरी बढ़ा देगा और sm:flex-row उन्हें एक लाइन में रखेगा */
  className="flex flex-col sm:flex-row items-center gap-6 pt-8"
>
  {/* Order Button (Primary) */}
  <a 
    href="tel:9425175398" 
    className="w-full sm:w-[240px] h-[60px] flex items-center justify-center gap-3 bg-orange-900 text-white rounded-xl font-black text-lg shadow-md hover:bg-orange-950 transition-all active:scale-95 uppercase tracking-tighter"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
    {curr.btnText}
  </a>

  {/* Products Button (Secondary) - Fixed Size to match Order Button */}
  <Link 
    to="/products" 
    className="w-full sm:w-[240px] h-[60px] flex items-center justify-center gap-2 bg-white border-[3px] border-orange-900 text-orange-900 rounded-xl font-black text-lg hover:bg-orange-50 transition-all active:scale-95 uppercase tracking-tighter shadow-sm"
  >
    {curr.btnProducts}
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  </Link>
</motion.div>
{/* --- बटन यहाँ खत्म होता है --- */}
            
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="relative group">
            {/* Animated central pulse */}
            <div className="absolute inset-0 bg-orange-200 blur-[150px] opacity-25 rounded-full animate-pulse z-0"></div>
            
            <div className="bg-white p-5 rounded-[48px] shadow-2xl relative z-10 border border-stone-100/50 transform transition-transform duration-1000 group-hover:rotate-1">
                {/* Main Image Container */}
                <div className="bg-stone-50 h-[500px] rounded-[38px] flex items-center justify-center overflow-hidden shadow-inner border border-stone-100">
                  <img 
                    src={Hero} 
                    alt="High Quality Kande" 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[3000ms]"
                  />
                </div>
            </div>
            
            {/* Small floating badge */}
            <div className="absolute -bottom-8 -left-8 bg-yellow-500 text-white p-7 rounded-full w-32 h-32 flex items-center justify-center text-center font-bold text-sm shadow-xl z-20 border-4 border-white">
              100%<br/>Handmade<br/>& Pure
            </div>
          </motion.div>
        </div>
      </section>
{/* --- GALLERY SLIDER SECTION --- */}
<section className="py-16 px-4 md:px-6 bg-white border-b border-stone-100 overflow-hidden">
  <div className="max-w-7xl mx-auto">
    
    <div className="text-center mb-10">
      <span className="text-orange-700 font-bold uppercase text-xl">
        {language === 'HI' ? 'हमारे उत्पाद' : 'Our Products'}
      </span>

      <h2 className="text-4xl font-serif text-stone-900 mt-2">
        {language === 'HI' ? 'शुद्धता की झलक' : 'A Glimpse of Purity'}
      </h2>
    </div>

    {/* Slider Wrapper */}
    <div className="w-full md:w-[75%] lg:w-[60%] mx-auto">
      <ImageSlider />
    </div>

  </div>
</section>
      {/* --- SECTION 2: THE SCIENTIFIC & SPIRITUAL JOURNEY --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif">{curr.powerTitle}</h2>
            <p className="text-orange-700 font-bold uppercase  text-xl">{curr.powerSubtitle}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {curr.sections.map((sec, idx) => (
              <motion.div 
                key={idx} whileHover={{ y: -10 }}
                className="bg-[#FFFCF9] border border-stone-100 rounded-[3rem] p-10 md:p-14 shadow-sm hover:shadow-2xl transition-all"
              >
                <div className="flex justify-between items-start mb-10">
                  <span className="text-7xl">{sec.icon}</span>
                  <span className={`text-[10px] font-black tracking-widest px-4 py-1 rounded-full uppercase ${sec.theme === 'emerald' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'}`}>0{idx + 1}</span>
                </div>
                
                <h3 className="text-3xl font-serif mb-8 text-stone-900">{sec.head}</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-5">
                    <h4 className="text-xs font-black uppercase tracking-widest text-stone-400 border-b pb-2">{sec.sciTitle}</h4>
                    <ul className="space-y-3">
                      {sec.sciPoints.map((p, i) => (
                        <li key={i} className="text-sm text-stone-600 leading-relaxed flex gap-2 italic">
                          <span className="text-orange-400 font-bold">•</span> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-5">
                    <h4 className="text-xs font-black uppercase tracking-widest text-stone-400 border-b pb-2">{sec.modTitle}</h4>
                    <ul className="space-y-3">
                      {sec.modPoints.map((p, i) => (
                        <li key={i} className="text-sm text-stone-600 leading-relaxed flex gap-2 font-medium">
                          <span className="text-yellow-500">◈</span> {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* --- NEW SECTION 3: COMPARISON (क्लाइंट की डिमांड के अनुसार) --- */}
<section className="py-24 px-6 bg-[#F9F7F4] border-t border-stone-100">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-serif text-stone-900 mb-4">{curr.compareTitle}</h2>
      <p className="text-orange-800 font-bold uppercase tracking-widest text-xs">{curr.compareSubtitle}</p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 items-stretch">
      {/* Ordinary Product Box */}
      <motion.div 
        className="bg-white/50 p-8 rounded-[2rem] border border-orange-600"
      >
        <h3 className="text-center  text-orange-900 font-black uppercase tracking-[0.2em] text-sm mb-8">Ordinary Products</h3>
        <div className="space-y-8">
          {curr.comparison.map((item, idx) => (
            <div key={idx} className="space-y-2">
              <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{item.feature}</p>
              <p className="text-sm text-stone- font-bold flex gap-2">
                <span className="text-red-600 font-bold">✕</span> {item.ordinary}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* GauTatva  Box (Highlighted) */}
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="bg-white p-8 rounded-[2rem] border-2 border-orange-600 shadow-xl relative"
      >
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-[10px] font-black px-6 py-1.5 rounded-full uppercase tracking-tighter">Recommended</div>
        <h3 className="text-center text-orange-900 font-black uppercase tracking-[0.2em] text-sm mb-8">GauTatva  Kande</h3>
        <div className="space-y-8">
          {curr.comparison.map((item, idx) => (
            <div key={idx} className="space-y-2">
              <p className="text-[10px] font-bold text-orange-800 uppercase tracking-widest">{item.feature}</p>
              <p className="text-sm text-stone-900 font-bold flex gap-2">
                <span className="text-emerald-500 font-bold">✓</span> {item.vedic}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* --- NEW SATTVIK ECO-PROTECTION SECTION: THE DIVINE CYCLE --- */}
      <section className="py-28 px-6 bg-[#FEF9F1] text-stone-900 rounded-t-[5rem] relative overflow-hidden border-t-2 border-orange-100">
        {/* Background Decorative Blob */}
        <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-emerald-50 rounded-full blur-[100px] opacity-70"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <motion.span 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              className="text-emerald-700 font-bold tracking-[0.3em] uppercase text-xs"
            >
              Eco-Dharma
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-serif text-emerald-950 mt-4 leading-tight">{curr.envTitle}</h2>
            <p className="text-stone-600 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">{curr.envSub}</p>
            <div className="w-24 h-1.5 bg-orange-200 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* The Dynamic Cow-Ecosystem Grid */}
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Air & Trees */}
            <div className="lg:col-span-4 space-y-10 order-2 lg:order-1">
              <motion.div 
                whileHover={{ x: -10, scale: 1.02 }}
                className="p-8 bg-white border border-emerald-100 shadow-sm rounded-r-none rounded-l-[2rem]"
              >
                <div className="flex gap-4 items-center mb-4 border-b border-emerald-50 pb-3">
                   <span className="text-4xl">🌳</span>
                   <h4 className="text-xl font-bold text-emerald-900">{curr.envPoints[0].title}</h4>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">{curr.envPoints[0].text}</p>
              </motion.div>

              <motion.div 
                whileHover={{ x: -10, scale: 1.02 }}

                className="p-8 bg-white border border-emerald-100 shadow-sm rounded-r-none rounded-l-[2rem]"
              >
                <div className="flex gap-4 items-center mb-4 border-b border-emerald-50 pb-3">
                   <span className="text-4xl">🌬️</span>
                   <h4 className="text-xl font-bold text-emerald-900">{language === 'HI' ? 'वायु शुद्धिकरण' : 'Air Purity'}</h4>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {language === 'HI' 
                    ? 'गोबर का औषधीय धुआं हवा से कीटाणुओं को नष्ट कर इसे प्राणवायु से भर देता है।'
                    : 'Dung smoke eliminates airborne germs and fills the atmosphere with life force.'}
                </p>
              </motion.div>
            </div>

            {/* Middle Column: Central Animated Figure (Visual Focus) */}
            <div className="lg:col-span-4 flex justify-center order-1 lg:order-2 py-12 lg:py-0 relative">
              <div className="relative">
                {/* Main Figure */}
<div className="w-64 h-64 md:w-80 md:h-80 bg-white shadow-2xl rounded-full flex items-center justify-center border-4 border-emerald-50 relative z-20 overflow-hidden">
  <img 
    src={cow} 
    alt="Vedic Cow" 
    /* object-contain इमेज को कटने से बचाएगा */
    /* scale-125 बाहरी बॉर्डर को छुपाने के लिए पर्याप्त ज़ूम देगा */
    /* translate-x-[-10px] इमेज को थोड़ा बाईं ओर खिसकाएगा ताकि पिछला पैर न कटे */
    className="w-full h-full object-contain scale-[1.35] -translate-x-1" 
  />
</div>
                
                {/* Animated Circle */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 z-10 scale-125"
                >
                   <div className="w-full h-full border-2 border-dashed border-emerald-200/50 rounded-full"></div>
                   <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-2xl">🌱</span>
                   <span className="absolute top-1/2 -left-3 -translate-y-1/2 text-2xl">💨</span>
                   <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-2xl">🌍</span>
                   <span className="absolute top-1/2 -right-3 -translate-y-1/2 text-2xl">🌻</span>
                </motion.div>

                {/* Central Glow */}
                <div className="absolute inset-0 bg-emerald-100/50 blur-[70px] rounded-full scale-110 z-0"></div>
              </div>
            </div>

            {/* Right Column: Soil & Chemicals */}
            <div className="lg:col-span-4 space-y-10 order-3">
              <motion.div 
                whileHover={{ x: 10, scale: 1.02 }}
                className="p-8 bg-white border border-emerald-100 shadow-sm rounded-l-none rounded-r-[2rem]"
              >
                <div className="flex gap-4 items-center mb-4 border-b border-emerald-50 pb-3">
                   <span className="text-4xl">🌻</span>
                   <h4 className="text-xl font-bold text-emerald-900">{curr.envPoints[2].title}</h4>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">{curr.envPoints[2].text}</p>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10, scale: 1.02 }}
                className="p-8 bg-white border border-emerald-100 shadow-sm rounded-l-none rounded-r-[2rem]"
              >
                <div className="flex gap-4 items-center mb-4 border-b border-emerald-50 pb-3">
                   <span className="text-4xl">🚫</span>
                   <h4 className="text-xl font-bold text-emerald-900">{curr.envPoints[1].title}</h4>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">{curr.envPoints[1].text}</p>
              </motion.div>
            </div>

          </div>

          {/* Bottom Quiet Grace */}
          <div className="mt-24 pt-12 border-t border-emerald-100/50 text-center">
            <p className="text-emerald-900/60 font-serif text-lg italic tracking-wide">
              {language === 'HI' 
                ? '"प्रकृति और मानवता का सेतु: गौ-संस्कृति।"'
                : '"The bridge between nature and humanity: Cow-culture."'}
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;