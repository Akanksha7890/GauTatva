import React from 'react';
import { useNavigate } from 'react-router-dom';

import ganeshji from '../assets/ganeshji.png';
import malaa from '../assets/malaa.png';
import khad from '../assets/khad.png';
import footrest from '../assets/footrest.png';
import packs from '../assets/packs.png';
import ghee from '../assets/ghee.png';
import piraa from '../assets/piraa.png';

import dipak from '../assets/dipak.png';
import hanumanji from '../assets/hanumanji.png';
import laxmi from '../assets/laxmi.png';
import dhup from '../assets/dhup.jpeg';
import batti from '../assets/batti.png';
import gannu from '../assets/gannu.jpeg';

const ProductPage = ({ language }) => {
  const navigate = useNavigate();

  const content = {
    EN: {
      featured: "Featured Product",
      kandeName: "Vedic Kande Pack",
      price: "₹151/-",
      packInfo: "Pack of 10 Pieces",
      delivery: "Delivery charges extra",
      ingredientsTitle: "Traditional Ingredients",
      otherTitle: "More from GauTatva",
      viewDetails: "View Details",
      contactLabel: "Get In Touch",
      subText: "GauTatva Family",
      ctaText: "Call directly to place your order or for more info",
      gauShala: "Radhe Radhe GauShala",
      callBtn: "📞 CALL NOW",
      mainImg: packs,

      otherItems: [
        { id: 1, name: "Gobar Ganesh Ji", img: ganeshji, price: "₹151/-" },
        { id: 2, name: "Gobar Vastu Pyramid (Set of 2)", img: piraa, price: "₹51/-" },
        { id: 3, name: "Gobar Mala", img: malaa, price: "₹151/-" },
        { id: 4, name: "Foot Rest", img: footrest, price: "₹151/-" },
        { id: 5, name: "Desi Gobar Manure", img: khad, price: "₹21/-" },
        { id: 6, name: "A2 Villona Ghee", img: ghee, price: "₹999/-" },
      ],

      ingredients: [
        "Desi Gay Ka Gobar",
        "Gomutra",
        "Nau Grah Samidha",
        "Aam",
        "Tulsi Ki Lakdi",
        "Neem",
        "Kapoor",
        "Pili Sarso",
        "Jatamansi",
        "Kamal Gatta",
        "Agar",
        "Tagar",
        "Guggul",
        "20+ Other Herbs"
      ]
    },

    HI: {
      featured: "मुख्य उत्पाद",
      kandeName: "वैदिक कंडे पैक",
      price: "₹151/-",
      packInfo: "10 कंडे का पैक",
      delivery: "डिलीवरी शुल्क अलग से लागू होगा।",
      ingredientsTitle: "शुद्ध सामग्रियां (जड़ी-बूटी)",
      otherTitle: "गौ तत्व के अन्य उत्पाद",
      viewDetails: "विवरण देखें",
      contactLabel: "संपर्क करें",
      subText: "गौ तत्व परिवार",
      ctaText: "ऑर्डर देने या जानकारी के लिए सीधे बात करें",
      gauShala: "राधे राधे गौशाला",
      callBtn: "📞 अभी कॉल करें",
      mainImg: packs,

      otherItems: [
        { id: 1, name: "गोबर के गणेश जी", img: ganeshji, price: "₹151/-" },
        { id: 2, name: "गोबर की वास्तु पिरामिड (2 का सेट)", img: piraa, price: "₹51/-" },
        { id: 3, name: "गोबर की माला", img: malaa, price: "₹151/-" },
        { id: 4, name: "Foot Rest (स्टैंड)", img: footrest, price: "₹151/-" },
        { id: 5, name: "देशी गोबर की खाद", img: khad, price: "₹21/-" },
        { id: 6, name: "A2 बिलोना घी", img: ghee, price: "₹999/-" },
      ],

      ingredients: [
        "देशी गाय का गोबर",
        "गोमूत्र",
        "नौ ग्रह समिधा",
        "आम",
        "तुलसी की लकड़ी",
        "नीम",
        "कपूर",
        "पीली सरसों",
        "जटामासी",
        "कमल गट्टा",
        "अगर",
        "तगर",
        "गुग्गल",
        "20+ अन्य जड़ी-बूटियां"
      ]
    }
  };

  const current = content[language];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-6 md:py-10">

        {/* Main Product */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mb-10 items-start">

          <div className="bg-[#fff9f2] p-5 md:p-8 rounded-3xl border-2 border-orange-100 shadow-xl relative overflow-hidden">

            <span className="absolute -top-1 left-6 md:left-10 bg-orange-700 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-b-xl text-xs font-bold z-10">
              {current.featured}
            </span>

            <div className="aspect-video bg-orange-50 rounded-2xl mb-4 mt-6 overflow-hidden flex items-center justify-center border border-orange-200 shadow-inner max-h-[300px]">
              <img
                src={current.mainImg}
                alt="Main Product"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-orange-900 mb-2 tracking-tight">
              {current.kandeName}
            </h3>

            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl md:text-5xl font-black text-orange-800">
                {current.price}
              </span>

              <span className="text-gray-500 font-bold text-base md:text-xl border-l-2 border-gray-300 pl-3 md:pl-4 uppercase tracking-tighter">
                {current.packInfo}
              </span>
            </div>

            <p className="text-red-600 font-bold bg-red-50 inline-block px-3 py-1 rounded-md mb-2 text-xs md:text-sm">
              * {current.delivery}
            </p>
          </div>

          {/* Ingredients */}
          <div className="bg-orange-50 p-5 md:p-8 rounded-3xl border-2 border-orange-200 h-full">

            <h4 className="text-xl md:text-2xl font-bold text-orange-900 mb-6 border-b-2 border-orange-200 pb-2 flex items-center gap-2">
              🍃 {current.ingredientsTitle}
            </h4>

            <div className="grid grid-cols-2 gap-3">

              {current.ingredients.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 py-2 border-b border-orange-100 last:border-0"
                >
                  <span className="text-green-600 text-lg flex-shrink-0">🔶</span>

                  <span className="text-orange-950 font-semibold text-sm md:text-base">
                    {item}
                  </span>
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* Other Products */}
        <div className="mt-12 md:mt-16 mb-20">

          <h4 className="text-2xl md:text-3xl font-bold text-orange-950 mb-8 text-center tracking-tight">
            {current.otherTitle}
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">

            {current.otherItems.map((item) => (

              <div
                key={item.id}
                onClick={() => navigate(`/product/${item.id}`)}
                className="group cursor-pointer bg-white border-2 border-orange-50 p-3 md:p-4 rounded-2xl md:rounded-3xl text-center shadow-sm hover:shadow-xl hover:border-orange-200 transition-all relative flex flex-col items-center"
              >

                <div className="w-full aspect-square bg-orange-50 rounded-xl md:rounded-2xl mb-3 flex items-center justify-center overflow-hidden border border-orange-100 shadow-inner">

                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <h5 className="font-bold text-orange-900 text-[11px] md:text-sm uppercase leading-tight mb-2 flex items-center justify-center min-h-[32px]">
                  {item.name}
                </h5>

                <span className="inline-block bg-orange-100 text-orange-800 font-black text-xs md:text-sm px-3 py-1 rounded-full border border-orange-200 mb-3">
                  {item.price}
                </span>

                <div className="text-orange-700 text-[10px] md:text-xs font-bold uppercase tracking-wide border-t border-orange-100 w-full pt-2 group-hover:text-orange-500 transition-colors">
                  {current.viewDetails} →
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* Upcoming Products */}
        <div className="mt-20 mb-20">

          <div className="text-center mb-10">

            <h4 className="text-3xl md:text-4xl font-bold text-orange-950 mb-4 tracking-tight">
              {language === 'HI'
                ? 'जल्द आ रहे हैं गोबर से बने अन्य उत्पाद'
                : 'Upcoming Other Cow Dung Products'}
            </h4>

            <p className="text-orange-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              {language === 'HI'
                ? 'भारतीय वेदलक्षणा देशी गाय के गोबर एवं प्राकृतिक तत्वों से निर्मित पारंपरिक एवं पर्यावरण हितैषी उत्पाद'
                : 'Traditional and eco-friendly products made from Indian Vedic Desi cow dung and natural ingredients'}
            </p>

          </div>

       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:flex lg:flex-row lg:wrap lg:justify-center gap-4 md:gap-6">

  {[
    {
      name: language === 'HI' ? 'गोबर धूपबत्ती' : 'Cow Dung Dhoopbatti',
      img: dhup
    },
    {
      name: language === 'HI'
        ? '12 इंच एवं 18 इंच गणेशजी विग्रह'
        : '12 Inch & 18 Inch Ganesh Ji Vigrah',
      img: gannu
    },
    {
      name: language === 'HI' ? 'लक्ष्मीजी विग्रह' : 'Lakshmi Ji Idol',
      img: laxmi
    },
    {
      name: language === 'HI' ? 'हनुमानजी विग्रह' : 'Hanuman Ji Idol',
      img: hanumanji
    },
    {
      name: language === 'HI' ? 'गोबर दीपक' : 'Cow Dung Diya',
      img: dipak
    }
  ].map((item, idx) => (

    <div
      key={idx}
      /* lg:w-[calc(20%-1.25rem)] से बड़ी स्क्रीन पर सभी 5 कार्ड्स को बिल्कुल एक बराबर चौड़ाई मिलेगी */
      className="group bg-white border-2 border-orange-50 p-3 md:p-4 rounded-2xl md:rounded-3xl text-center shadow-sm hover:shadow-xl hover:border-orange-200 transition-all relative flex flex-col items-center w-full lg:w-[calc(20%-1.25rem)] min-w-[160px]"
    >

      {/* IMAGE BOX */}
      <div className="w-full aspect-square bg-orange-50 rounded-xl md:rounded-2xl mb-3 overflow-hidden border border-orange-100 shadow-inner">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* COMING SOON */}
      <div className="mb-3">
        <span className="bg-orange-700 text-white text-[9px] md:text-[10px] font-bold px-3 py-1 rounded-full shadow-lg tracking-wide">
          {language === 'HI' ? 'जल्द आ रहा है' : 'COMING SOON'}
        </span>
      </div>

      {/* PRODUCT NAME */}
      <h5 className="font-bold text-orange-900 text-[11px] md:text-sm uppercase leading-tight mb-2 flex items-center justify-center min-h-[32px]">
        {item.name}
      </h5>

      {/* MADE FROM COW DUNG */}
      <span className="inline-block bg-orange-100 text-orange-800 font-black text-[10px] md:text-xs px-3 py-1 rounded-full border border-orange-200 mt-auto">
        {language === 'HI' ? 'गोबर से निर्मित' : 'Made From Cow Dung'}
      </span>

    </div>
  ))}

</div>
        </div>

        {/* CTA */}
        <div className="bg-orange-900 rounded-[2.5rem] shadow-2xl overflow-hidden mb-10">

          <div className="flex flex-col md:flex-row items-center">

            <div className="w-full md:w-1/2 p-8 md:p-12 bg-white/5 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10">

              <span className="text-orange-400 text-[13px] font-black uppercase mb-3 block">
                {current.contactLabel}
              </span>

              <p className="text-orange-100 text-base md:text-lg font-medium leading-relaxed">
                {current.ctaText}
              </p>

              <p className="text-orange-300 text-lg md:text-base font-bold mt-2">
                {current.gauShala}
              </p>

              <p className="text-orange-100 text-sm md:text-base mt-3 leading-relaxed">
                {language === 'HI'
                  ? 'उत्पादन: राधे राधे गौशाला सिवनी एवं अन्नपूर्णा स्वसहायता समूह चरगाँव'
                  : 'Manufactured by: Radhe Radhe Gaushala Seoni & Annapurna Self-Help Group, Chargaon'}
              </p>

            </div>

            <div className="w-full md:w-1/2 p-8 md:p-12 text-center flex flex-col items-center justify-center gap-5">

              <p className="text-orange-200 text-sm font-bold uppercase">
                📞 {language === 'HI' ? 'हमारा नंबर' : 'Our Number'}
              </p>

              <a
                href="tel:9425175398"
                className="text-white text-3xl md:text-4xl font-black tracking-tight hover:text-orange-300 transition-colors"
              >
                94251 75398
              </a>

              <a
                href="tel:9425175398"
                className="bg-white text-orange-900 px-10 py-4 rounded-2xl font-black text-lg hover:bg-orange-50 transition-all active:scale-95 shadow-lg"
              >
                {current.callBtn}
              </a>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductPage;