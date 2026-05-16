import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Leaf, Shield, Sparkles, FlaskConical, Tag, Package } from 'lucide-react';

import ganeshji from '../assets/ganeshji.png';
import piraamid from '../assets/piraamid.png';
import malaa from '../assets/malaa.png';
import footrest from '../assets/footrest.png';
import khad from '../assets/khad.png';
import ghee from '../assets/ghee.png';
import piraa from '../assets/piraa.png';


const ProductDetail = ({ language }) => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const productData = {
    1: {
      name:    language === 'HI' ? "गोबर के गणेश जी"         : "Vedic Gobar Ganesh Ji",
      img:     ganeshji,
      tagline: language === 'HI' ? "मंगल का प्रतीक, शुद्धता का वास" : "Symbol of Auspiciousness & Divine Purity",

      pricing: language === 'HI' ? [
        { label: "छोटे गणेश जी विग्रह — 4 इंच", price: "₹51", highlight: true },
        { label: "बड़े गणेश जी विग्रह — 8 इंच", price: "₹151", highlight: false },
      ] : [
         { label: "Small Ganesh Ji Idol — 4 inch", price: "₹51", highlight: true },
        { label: "Large Ganesh Ji Idol — 8 inch", price: "₹151", highlight: false },
      ],

      colorNote: language === 'HI'
        ? "🎨 आप अपनी पसंद के अनुसार रंगीन या सादा, कोई भी विकल्प चुन सकते हैं। यद्यपि प्रतिमा को रंगों से सजाया जा सकता है, परंतु हमारा सुझाव है कि प्राकृतिक गोबर के मूल स्वरूप में ही विग्रह को रहने दें। प्रकृति की सादगी में ही असली दिव्यता है।"

        : "🎨 You may choose between colorful or plain options according to your preference. While the idols can be decorated with colors, we recommend keeping the deity in its original, natural cow dung form. True divinity resides in nature's own simplicity.",

      importance: language === 'HI'
        ? "शास्त्रों में कहा गया है — 'गोमये वसते लक्ष्मी।' भारतीय वेदलक्षणा देशी गाय के गोबर में साक्षात माँ लक्ष्मी और गणेश जी का वास होता है। ये गोबर के गणेश जी केवल एक मूर्ति नहीं, बल्कि सकारात्मक ऊर्जा का जीवंत स्रोत हैं।"
        : "Scriptures declare — 'Gomaye Vasate Lakshmi.' The dung of Bharatiya Vedalakshana Desi Cow is the abode of Goddess Lakshmi and Lord Ganesha. These Ganesh idols are not mere figurines — they are living sources of positive cosmic energy.",

      scientific: language === 'HI' ? [
        "जल में विसर्जन के बाद इसके प्राकृतिक तत्व जल का शोधन करने, जैविक संतुलन बनाए रखने और जल की प्राकृतिक शुद्धता को लंबे समय तक बनाए रखने में सहायक होते हैं।",
        "भारतीय वेदलक्षणा देशी गाय के गोबर में 'लिग्निन' और एंटी-माइक्रोबियल तत्व होते हैं जो वायुमंडल को 90% तक शुद्ध करते हैं।",
        "इसमें विद्यमान 'फिनोल' कंपाउंड कीटाणुओं और फंगस को प्राकृतिक रूप से नष्ट करता है।",
        "CSIR (भारत सरकार) के शोध के अनुसार भारतीय वेदलक्षणा देशी गाय का गोबर EMF और Wi-Fi रेडिएशन को 25-30% तक कम करता है।",
        "गोबर में 'इंडोल', 'स्काटोल' जैसे यौगिक तनाव कम करने वाले न्यूरोट्रांसमीटर को सक्रिय करते हैं।"
      ] : [
        "After immersion in water, its natural elements help purify the water, maintain ecological balance, and preserve the natural purity of the water for a long time.",
        "Bharatiya Vedalakshana Desi Cow dung contains 'lignin' and anti-microbial elements that purify the atmosphere by up to 90%.",
        "Phenol compounds in the dung destroy bacteria and fungus naturally.",
        "CSIR (Govt. of India) research shows Bharatiya Vedalakshana Desi Cow dung reduces EMF/Wi-Fi radiation by 25-30%.",
        "Compounds like 'Indole' activate stress-reducing neurotransmitters in the brain."
      ],

      spiritual: language === 'HI' ? [
        "गणेश जी को विघ्नहर्ता कहा जाता है — घर में इनकी स्थापना से हर कार्य में सफलता मिलती है।",
        "गोबर के गणेश जी पर्यावरण के अनुकूल हैं — विसर्जन के बाद पौधों के लिए श्रेष्ठ खाद बनते हैं।",
        "घर के मुख्य द्वार पर स्थापित करने से नकारात्मक ऊर्जा और बुरी नजर से रक्षा होती है।",
        "पूजा-पाठ में इनका उपयोग मन को शांत और एकाग्र करता है।"
      ] : [
        "Lord Ganesha removes obstacles — placing Him at home brings success in every endeavor.",
        "Eco-friendly: after immersion, becomes premium fertilizer for plants.",
        "Placed at the main door, it protects against negative energy and evil eye.",
        "Their presence during prayers calms and focuses the mind deeply."
      ],

      howToUse: language === 'HI'
        ? "मुख्य द्वार, पूजा घर या ऑफिस के प्रवेश पर स्थापित करें। नियमित धूप-दीप से पूजा करें। इको-फ्रेंडली विसर्जन के लिए पौधे की जड़ों में मिट्टी में दबा दें।"
        : "Place at the main entrance, prayer room, or office entry. Worship daily with incense and lamp. For eco-friendly immersion, bury near plant roots."
    },

    2: {
      name:    language === 'HI' ? "वैदिक वास्तु पिरामिड"       : "Vedic Vastu Pyramid",
      img:     piraa,
      tagline: language === 'HI' ? "वास्तु दोष नाशक, ऊर्जा संतुलक" : "Vastu Defect Remover & Energy Balancer",

      pricing: language === 'HI' ? [
        { label: "सेट — 2 पिरामिड | साइज़: 2 इंच", price: "₹51", highlight: true },
      ] : [
        { label: "Set of 2 Pyramids | Size: 2 Inch", price: "₹51", highlight: true },
      ],

      colorNote: null,

      importance:
  language === 'HI'
    ? "पिरामिड आकार ब्रह्मांडीय ऊर्जा को केंद्रित करने का सर्वोत्तम माध्यम माना जाता है। विशेष बात यह है कि गोबर को भूमि पर गिरने से पूर्व ही सुरक्षित रूप से संग्रहित कर लिया जाता है, जिससे उसकी प्राकृतिक शुद्धता एवं सकारात्मक ऊर्जा पूर्ण रूप से बनी रहती है।"
    : "This pyramid is crafted using carefully collected Bharatiya Vedalakshana Desi Cow dung before it touches the ground, preserving its natural purity and energetic properties completely.",

      scientific: language === 'HI' ? [
        "पिरामिड की ज्यामिति (Geometry) बाहरी ऊर्जा तरंगों को केंद्र में फोकस करती है — इसे 'पिरामिड पावर' कहते हैं।",
        "भारतीय वेदलक्षणा देशी गाय के गोबर के एंटी-बैक्टीरियल और एंटी-फंगल गुण पिरामिड के अंदर एक शुद्ध ऊर्जा क्षेत्र (Energy Field) बनाते हैं।",
        "इलेक्ट्रॉनिक डिवाइस से निकलने वाली हानिकारक EMF तरंगों को गोबर का 'बायो-फील्ड' अवशोषित कर लेता है।",
        "IIT Delhi के शोध के अनुसार, भारतीय वेदलक्षणा देशी गाय के गोबर में 'Serratia Marcescens' जैसे लाभकारी बैक्टीरिया होते हैं जो वातावरण की हानिकारक गैसों को अवशोषित कर हवा को शुद्ध करते हैं।"
      ] : [
        "The pyramid geometry focuses external energy waves at its center — known as 'Pyramid Power'.",
        "Anti-bacterial and anti-fungal properties of Bharatiya Vedalakshana Desi Cow dung create a pure energy field inside the pyramid.",
        "The 'bio-field' of the dung absorbs harmful EMF waves from electronic devices.",
        "As per IIT Delhi research, Bharatiya Vedalakshana Desi Cow dung contains beneficial bacteria like 'Serratia Marcescens' that absorb harmful gases and purify the surrounding air."
      ],

      spiritual: language === 'HI' ? [
        "वास्तु शास्त्र के अनुसार, उत्तर-पूर्व (ईशान कोण) में रखने से घर में सकारात्मकता, समृद्धि आती है और वास्तु दोष समाप्त हो जाता है।",
        "विद्यार्थियों के अध्ययन कक्ष में रखने से एकाग्रता, स्मरण शक्ति एवं सकारात्मक सोच में वृद्धि होती है।",
        "गाड़ी में रखने से यात्रा सुरक्षित और मन शांत रहता है।",
        "ऑफिस या दुकान में रखने से व्यापार में उन्नति और विवादों से मुक्ति मिलती है।",
        "ध्यान (Meditation) के समय पास रखने से एकाग्रता गहरी होती है।"
      ] : [
        "According to Vastu Shastra, placing it in the North-East (Ishan Corner) brings positivity, prosperity, and helps eliminate Vastu defects from the home.",
        "Increases concentration, memory power, and positive thinking when placed in a student’s study room.",
        "Keeping it in the car ensures safe journeys and a calm mind.",
        "In office or shop, it improves business and resolves disputes.",
        "Keeping it nearby during meditation deepens concentration."
      ],

      howToUse: language === 'HI'
        ? "घर के ईशान कोण (उत्तर-पूर्व), पूजा घर, ऑफिस की टेबल, या कार के डैशबोर्ड पर रखें। रोज सुबह इसे स्पर्श करके प्रणाम करें।"
        : "Place in the North-East corner, prayer room, office desk, or car dashboard. Touch and offer reverence every morning."
    },

    3: {
      name:    language === 'HI' ? "गोबर की वैदिक माला"       : "Vedic Gobar Mala",
      img:     malaa,
      tagline: language === 'HI' ? "जप, ध्यान और आत्म-शुद्धि का माध्यम" : "Medium of Chanting, Meditation & Self-Purification",

      pricing: null,
      colorNote: null,

      importance:
  language === 'HI'
    ? "रुद्राक्ष और तुलसी की तरह भारतीय वेदलक्षणा देशी गाय के गोबर से निर्मित 108 मनकों वाली यह पवित्र माला अत्यंत शुभ मानी जाती है। जप के दौरान इसका स्पर्श मन और आत्मा दोनों को शुद्ध करता है। यह माला उंगलियों के 'एक्यूप्रेशर पॉइंट्स' को सक्रिय कर मानसिक शांति एवं एकाग्रता बढ़ाने में सहायक होती है।"
    : "Just like Rudraksha and Tulsi, this sacred 108-bead mala made from traditional Bharatiya Vedalakshana Desi Cow dung is considered highly auspicious. Its gentle touch during chanting purifies both mind and soul while activating acupressure points in the fingers, helping improve peace, focus, and inner positivity.",
      scientific: language === 'HI' ? [
        "भारतीय वेदलक्षणा देशी गाय के गोबर में मौजूद खनिज तत्व (मैग्नेशियम, कैल्शियम) त्वचा के संपर्क से शरीर में अवशोषित होते हैं।",
        "जप के दौरान दोहराव (Repetition) से मस्तिष्क में 'अल्फा वेव्स' उत्पन्न होती हैं जो तनाव मुक्ति के लिए जिम्मेदार हैं।",
        "माला की गोलाई और 108 मनकों का संबंध 'हार्ट रेट वेरिएबिलिटी' से है — 108 बार जप करने से हृदय गति स्वाभाविक रूप से नियंत्रित होती है।",
        "एक्यूप्रेशर: अंगूठे और तर्जनी के बीच माला घुमाने से 'पाचन' और 'तनाव' संबंधित प्रेशर पॉइंट्स सक्रिय होते हैं।"
      ] : [
        "Minerals in Bharatiya Vedalakshana Desi Cow dung (magnesium, calcium) are absorbed through skin contact during use.",
        "Repetition during chanting generates 'Alpha Waves' in the brain responsible for stress relief.",
        "108 beads correlate with 'Heart Rate Variability' — 108 repetitions naturally regulate heart rhythm.",
        "Rolling beads between thumb and index finger activates acupressure points for digestion and stress."
      ],

      spiritual: language === 'HI' ? [
        "रोज़ाना मंत्र जाप, ध्यान एवं सकारात्मक ऊर्जा प्राप्त करने के लिए अत्यंत शुभ एवं लाभकारी।",
        "नकारात्मक विचारों और बुरी आदतों से मुक्ति दिलाने में सहायक।",
        "गोबर की माला को गले में धारण करने से 'आभामंडल' (Aura) शुद्ध रहता है।",
        "बच्चों के गले में पहनाने से उनकी एकाग्रता और पढ़ाई में सुधार होता है।"
      ] : [
        "Highly beneficial and auspicious for daily chanting, meditation, and attracting positive energy.",
        "Helps in liberation from negative thoughts and bad habits.",
        "Wearing it around the neck keeps the 'Aura' purified.",
        "Wearing by children improves their concentration and studies."
      ],

      howToUse: language === 'HI'
        ? "रोज सुबह स्नान के बाद पूजा स्थान पर बैठकर मनपसंद मंत्र का जप करें। माला को दाहिने हाथ के अंगूठे और मध्यमा से धीरे-धीरे घुमाएं।"
        : "Sit at your prayer space after morning bath. Chant your chosen mantra while slowly rolling beads with thumb and middle finger of the right hand."
    },

    4: {
      name:    language === 'HI' ? "वैदिक फुट रेस्ट"           : "Vedic Foot Rest",
      img:     footrest,
      tagline: language === 'HI' ? "प्राकृतिक चिकित्सा, डिटॉक्स और रेडिएशन सुरक्षा" : "Natural Therapy, Detox & Radiation Protection",

      pricing: null,
      colorNote: null,

      ingredients: language === 'HI'
        ? "✅ निर्मित सामग्री: भारतीय वेदलक्षणा देशी गाय का गोबर • गौमूत्र • करेला • नीम • एलोवेरा • मैदा लकड़ी • चूना"
        : "✅ Made With: Bharatiya Vedalakshana Desi Cow Dung • Gaumutra  • Bitter Gourd • Neem • Aloe Vera • Maida Wood • Lime",

      importance: language === 'HI'
        ? "आयुर्वेद में 'पाद-अभ्यंग' (पैरों की चिकित्सा) को संपूर्ण स्वास्थ्य का आधार माना गया है। पैरों के तलवों में 72,000 नाड़ियों के सिरे होते हैं। भारतीय वेदलक्षणा देशी गाय के गोबर से बना यह फुट रेस्ट इन सभी नाड़ियों को एक साथ सक्रिय करता है।"
        : "Ayurveda considers 'Pada-Abhyanga' (foot therapy) the foundation of complete health. Foot soles contain the endings of 72,000 nerve channels. This Foot Rest, made from Bharatiya Vedalakshana Desi Cow dung, activates all these channels simultaneously.",

      scientific: language === 'HI' ? [
        "रिफ्लेक्सोलॉजी: पैरों के तलवों में पूरे शरीर के अंगों के 'रिफ्लेक्स पॉइंट्स' होते हैं — दबाव पड़ने से संबंधित अंग सक्रिय होते हैं।",
        "भारतीय वेदलक्षणा देशी गाय के गोबर में मौजूद 'इंफ्रारेड' ऊर्जा त्वचा की गहरी परतों में प्रवेश कर रक्त संचार बेहतर करती है।",
        "थर्मल इफेक्ट: गोबर तलवों की अतिरिक्त गर्मी सोखकर शरीर का तापमान संतुलित करता है — नींद की गुणवत्ता 40% तक बेहतर होती है।",
        "⚡ EMF व डिजिटल रेडिएशन सुरक्षा: कंप्यूटर, लैपटॉप और मोबाइल फोन से निकलने वाली हानिकारक विकिरण (Radiation) को यह फुट रेस्ट प्रभावी रूप से अवशोषित करता है। काम के दौरान पैरों के नीचे रखने से शरीर इस रेडिएशन से सुरक्षित रहता है।",
        "एंटी-फंगल गुण: पैरों की फंगस और दुर्गंध को जड़ से खत्म करता है।"
      ] : [
        "Reflexology: Foot soles contain 'reflex points' of all body organs — pressure activates corresponding organs.",
        "Infrared energy in Bharatiya Vedalakshana Desi Cow dung penetrates deep skin layers, improving blood circulation.",
        "Thermal effect: Dung absorbs excess heat from soles, balancing body temperature — improves sleep quality by 40%.",
        "⚡ EMF & Digital Radiation Shield: Harmful radiation from computers, laptops and mobile phones is effectively absorbed by this foot rest. Keeping it under your feet while working protects your body from continuous digital radiation exposure.",
        "Anti-fungal properties eliminate foot fungus and odor from the root."
      ],

   spiritual: language === 'HI' ? [
  "वैदिक परंपरा के अनुसार पृथ्वी तत्व से जुड़ाव मानसिक शांति एवं सकारात्मक ऊर्जा प्रदान करता है।",
  "फुट रेस्ट का नियमित उपयोग शरीर एवं मन को प्राकृतिक संतुलन देने में सहायक माना जाता है।",
  "नियमित उपयोग से सकारात्मकता, मानसिक स्थिरता एवं आंतरिक शांति का अनुभव होता है।",
  "कार्य करते समय पैरों के नीचे रखने से थकान एवं तनाव में राहत का अनुभव होता है।",
  "ग्राउंडिंग प्रभाव शरीर की नकारात्मक ऊर्जा को संतुलित कर हल्कापन एवं सुकून प्रदान करता है।"
] : [
  "According to Vedic tradition, connection with the earth element helps bring mental peace and positive energy.",
  "Regular use of the foot rest is believed to support natural balance for both body and mind.",
  "Regular usage promotes positivity, emotional stability, and inner peace.",
  "Keeping it under the feet while working may help reduce tiredness and mental stress.",
  "Its grounding effect helps balance negative energy and promotes relaxation and inner comfort."
],

      howToUse: language === 'HI'
  ? "💻 कंप्यूटर, लैपटॉप या मोबाइल का उपयोग करते समय फुट रेस्ट को पैरों के नीचे रखें। यह डिजिटल उपकरणों से निकलने वाली रेडिएशन ऊर्जा के प्रभाव को संतुलित करने में सहायक माना जाता है। नियमित उपयोग से पैरों को आराम, शरीर में हल्कापन एवं प्राकृतिक संतुलन का अनुभव होता है।"
  : "💻 Keep the foot rest under your feet while using a computer, laptop, or mobile device. It is believed to help balance the effects of radiation energy emitted from digital devices. Regular use provides comfort to the feet, a feeling of lightness, and a natural sense of balance.",
    },

    5: {
      name:    language === 'HI' ? "भारतीय वेदलक्षणा देशी गाय के गोबर की खाद"           : "Organic Bharatiya Vedalakshana Desi Cow Manure",
      img:     khad,
      tagline: language === 'HI' ? "पौधों के लिए प्रकृति का सर्वश्रेष्ठ उपहार" : "Nature's Greatest Gift for Your Plants",

      pricing: language === 'HI' ? [
        { label: "मूल्य — प्रति किलोग्राम", price: "₹21", highlight: true },
      ] : [
        { label: "Price — Per Kilogram", price: "₹21", highlight: true },
      ],

      colorNote: null,

      importance: language === 'HI'
        ? "भारतीय वेदलक्षणा देशी गाय के गोबर को 'कृषि का सोना' कहा जाता है। इसमें नाइट्रोजन, फास्फोरस और पोटेशियम का प्राकृतिक संतुलन होता है जो किसी भी रासायनिक खाद से बेहतर है। यह मिट्टी को जीवित रखती है और पौधों को रोगों से बचाती है।"
        : "Bharatiya Vedalakshana Desi Cow dung is called 'Gold of Agriculture.' It contains a natural balance of Nitrogen, Phosphorus, and Potassium — better than any chemical fertilizer. It keeps soil alive and protects plants from diseases.",

      scientific: language === 'HI' ? [
        "NPK संतुलन: नाइट्रोजन (पत्तियों के लिए), फास्फोरस (जड़ों के लिए) and पोटेशियम (फलों के लिए) का प्राकृतिक भंडार।",
        "माइक्रोबायोम: भारतीय वेदलक्षणा देशी गाय की इस खाद में 50 मिलियन से अधिक लाभकारी बैक्टीरिया प्रति ग्राम होते हैं जो मिट्टी को जीवित बनाते हैं।",
        "pH संतुलक: अम्लीय (Acidic) और क्षारीय (Alkaline) दोनों प्रकार की मिट्टी को neutral (6.5-7.5 pH) पर लाती है।",
        "जल धारण: मिट्टी की जल धारण क्षमता 30-40% तक बढ़ाती hai — कम पानी में पौधे ज्यादा हरे रहते हैं।"
      ] : [
        "NPK balance: Natural storehouse of Nitrogen (leaves), Phosphorus (roots), and Potassium (fruits).",
        "Microbiome: Contains 50+ million beneficial bacteria per gram from Bharatiya Vedalakshana Desi Cow that make soil alive and fertile.",
        "pH balancer: Brings both acidic and alkaline soil to neutral pH (6.5-7.5).",
        "Water retention: Increases soil water-holding capacity by 30-40% — plants stay greener with less water."
      ],

      spiritual: language === 'HI' ? [
        "वैदिक कृषि में भारतीय वेदलक्षणा देशी गाय के गोबर की खाद को 'भूमि माता' की सेवा माना जाता है।",
        "तुलसी, पीपल और नीम जैसे पवित्र पौधों में यह खाद डालने से उनकी औषधीय शक्ति बढ़ती है।",
        "घर के गमलों में डालने से घर की ऊर्जा सकारात्मक और वातावरण शुद्ध रहता है।",
        "किचन गार्डन में उपयोग से उगी सब्जियां सात्विक और पोषक होती हैं।"
      ] : [
        "In Vedic agriculture, applying Bharatiya Vedalakshana Desi Cow manure is considered serving 'Bhoomi Mata' (Mother Earth).",
        "Applied to sacred plants like Tulsi, Peepal, and Neem, it enhances their medicinal power.",
        "Using it in home pots keeps household energy positive and environment pure.",
        "Vegetables grown in kitchen gardens with this manure are sattvic and highly nutritious."
      ],

      howToUse: language === 'HI'
        ? "गमले में मिट्टी के साथ 30% खाद मिलाएं। सप्ताह में एक बार 1 चम्मच खाद पौधे की जड़ों के पास डालें। पानी देने से पहले मिट्टी में हल्का मिला दें।"
        : "Mix 30% manure with pot soil. Add 1 teaspoon near plant roots once a week. Lightly mix into soil before watering."
    },

    6: {
      name:    language === 'HI' ? "A2 बिलोना घी"                   : "A2 Bilona Ghee",
      img:     ghee,
      tagline: language === 'HI' ? "स्वास्थ्यवर्धक, शुद्ध और पोषक" : "Healthy, Pure & Deeply Nourishing",

      pricing: language === 'HI' ? [
        { label: "500 ग्राम", price: "₹999", highlight: true },
          { label: "1000 ग्राम", price: "₹1899", highlight: false },
      ] : [
        { label: "500 Grams", price: "₹999", highlight: true },
        { label: "1000 Grams", price: "₹1899", highlight: false },
      ],

      colorNote: null,

      importance: language === 'HI'
        ? "आयुर्वेद में भारतीय वेदलक्षणा देशी गाय के घी को 'अमृत' कहा गया है। बिलोना विधि से बना घी सबसे शुद्ध और पोषक होता है — इसमें दही को मथकर माखन निकाला जाता है, फिर उसे धीमी आंच पर पकाया जाता है। यह केवल भोजन नहीं, एक संपूर्ण औषधि है।"
        : "Ayurveda calls Bharatiya Vedalakshana Desi Cow ghee 'Amrit' (nectar). Bilona method ghee is the purest form — curd is churned to extract butter, then slow-cooked on low flame. It is not just food — it is complete medicine.",

      scientific: language === 'HI' ? [
        "ब्यूटिरिक एसिड: भारतीय वेदलक्षणा देशी गाय के घी में 'Butyric Acid' होता है जो आंतों की दीवार को मजबूत करता है और पाचन तंत्र को पूरी तरह स्वस्थ रखता है।",
        "CLA (Conjugated Linoleic Acid): यह तत्व शरीर की अनावश्यक चर्बी कम करता है, कैंसर रोधी गुण रखता है और रोग प्रतिरोधक क्षमता बढ़ाता है।",
        "विटामिन A, D, E, K2: ये fat-soluble विटामिन आंखों, हड्डियों, त्वचा और हृदय के लिए अत्यंत आवश्यक हैं।",
        "High Smoke Point (250°C): देशी घी उच्च तापमान पर भी toxic नहीं होता — refined oil के विपरीत जलने पर free radicals नहीं छोड़ता।"
      ] : [
        "Butyric Acid: A2 Bilona ghee of Bharatiya Vedalakshana Desi Cow contains Butyric Acid that strengthens the intestinal wall and keeps the digestive system completely healthy.",
        "CLA (Conjugated Linoleic Acid): Reduces excess body fat, has anti-cancer properties, and boosts immunity.",
        "Vitamins A, D, E, K2: These fat-soluble vitamins are essential for eyes, bones, skin, and heart health.",
        "High Smoke Point (250°C): Desi ghee doesn't become toxic at high temperatures — unlike refined oils, it releases no free radicals when heated."
      ],

      spiritual: language === 'HI' ? [
        "हवन और यज्ञ में घी की आहुति से वातावरण में ऑक्सीजन और ओजोन का स्तर बढ़ता है — यह वैज्ञानिक रूप से सिद्ध है।",
        "घर में घी का दीपक जलाने से नकारात्मक ऊर्जा दूर होती है और माँ लक्ष्मी का आगमन होता है।",
        "आयुर्वेद के अनुसार, रात को सोने से पहले नाक में 2 बूंद घी डालने से ('नस्य') मस्तिष्क शांत होता है और गहरी नींद आती है।",
        "घी को 'सात्विक आहार' माना जाता है — इसके सेवन से मन शुद्ध, बुद्धि तीव्र और आत्मा प्रसन्न रहती है।"
      ] : [
        "Offering ghee in Havan/Yagya scientifically increases oxygen and ozone levels in the surrounding atmosphere.",
        "Lighting a ghee lamp at home removes negative energy and invites prosperity and Goddess Lakshmi.",
        "Ayurveda recommends 'Nasya' — 2 drops of ghee in each nostril before sleeping — for deep sleep and a calm mind.",
        "Ghee is considered 'Sattvic food' — its consumption purifies the mind, sharpens intellect, and uplifts the soul."
      ],

      howToUse: language === 'HI'
        ? "रोज सुबह खाली पेट 1 चम्मच गर्म पानी के साथ लें। खाना बनाते समय refined oil की जगह घी उपयोग करें। रात को सोने से पहले 1 चम्मच गर्म दूध में मिलाकर पिएं। हवन और दीपक के लिए भी उपयोग करें।"
        : "Take 1 teaspoon with warm water every morning on an empty stomach. Use instead of refined oil while cooking. Mix 1 teaspoon in warm milk before sleeping. Also ideal for Havan and lighting lamps."
    },
  };

  const product = productData[productId];
  if (!product) return <div className="p-20 text-center font-bold">Loading...</div>;

  return (
    <div className="bg-[#FFFCF9] min-h-screen">

      {/* Back Button */}
      <nav className="max-w-6xl mx-auto px-4 pt-5 pb-2">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-stone-700 font-bold hover:text-orange-700 transition-colors text-sm"
        >
          <ChevronLeft size={18} />
          {language === 'HI' ? 'वापस जाएं' : 'Go Back'}
        </button>
      </nav>

      <div className="max-w-6xl mx-auto px-4 pb-16">

        {/* Top: Image + Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 mb-14 mt-4 items-start">

          {/* Image */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border border-orange-100 shadow-xl">
              <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <p className="mt-3 text-[10px] text-stone-400 font-bold uppercase tracking-[0.2em]">
              100% Handmade • GauTatva
            </p>
          </div>

          {/* Name + Tagline + Details */}
          <div className="flex flex-col justify-center pt-2">

            <h1 className="text-3xl md:text-5xl font-bold text-orange-950 mb-3 tracking-tight leading-tight">
              {product.name}
            </h1>
            <p className="text-orange-500 font-bold text-sm uppercase mb-4">
              {product.tagline}
            </p>

            {/* Pricing Box */}
            {product.pricing && (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-4">
                <h3 className="flex items-center gap-2 text-[12px] font-black text-amber-800 uppercase mb-3">
                  <Tag size={13} />
                  {language === 'HI' ? 'मूल्य सूची' : 'Pricing'}
                </h3>
                <div className="flex flex-col gap-2">
                  {product.pricing.map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between rounded-xl px-4 py-2.5 ${
                        item.highlight
                          ? 'bg-orange-600 text-white'
                          : 'bg-orange-600 border-amber-200 text-white'
                      }`}
                    >
                      <span className="text-sm font-semibold">{item.label}</span>
                      <span className="text-lg font-black tracking-tight">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Color Note */}
            {product.colorNote && (
              <div className="bg-purple-50 border border-purple-100 rounded-2xl px-4 py-3 mb-4">
                <p className="text-purple-800 text-sm font-semibold leading-relaxed">
                  {product.colorNote}
                </p>
              </div>
            )}

            {/* Ingredients (Foot Rest only) */}
            {product.ingredients && (
              <div className="bg-green-50 border border-green-100 rounded-2xl px-4 py-3 mb-4">
                <h3 className="flex items-center gap-2 text-[12px] font-black text-green-800 uppercase mb-1">
                  <Package size={13} />
                  {language === 'HI' ? 'सामग्री विवरण' : 'Ingredients'}
                </h3>
                <p className="text-green-900 text-sm font-semibold leading-relaxed">
                  {product.ingredients}
                </p>
              </div>
            )}

            {/* Importance Box */}
            <div className="bg-orange-50 border-l-4 border-orange-400 rounded-r-2xl p-5 mb-4">
              <h3 className="flex items-center gap-2 text-[15px] font-black text-orange-800 uppercase mb-3">
                <Shield size={13} />
                {language === 'HI' ? 'महत्व एवं परिचय' : 'Importance & Introduction'}
              </h3>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed font-medium italic">
                "{product.importance}"
              </p>
            </div>

            {/* How to Use */}
            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5">
              <h3 className="text-[12px] font-black text-emerald-800 uppercase mb-2">
                🌿 {language === 'HI' ? 'उपयोग कैसे करें' : 'How to Use'}
              </h3>
              <p className="text-emerald-900 text-sm leading-relaxed font-medium">
                {product.howToUse}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom: Scientific + Spiritual side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Scientific Benefits */}
          <div className="bg-white border border-blue-100 rounded-3xl p-6 md:p-8 shadow-sm">
            <h3 className="flex items-center gap-2 text-[13px] font-black text-blue-800 uppercase mb-6 border-b border-blue-50 pb-3">
              <FlaskConical size={14} />
              {language === 'HI' ? 'वैज्ञानिक तथ्य एवं लाभ' : 'Scientific Facts & Benefits'}
            </h3>
            <ul className="space-y-5">
              {product.scientific.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                  <span className="text-stone-700 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Spiritual Benefits */}
          <div className="bg-white border border-orange-100 rounded-3xl p-6 md:p-8 shadow-sm">
            <h3 className="flex items-center gap-2 text-[12px] font-black text-orange-800 uppercase mb-6 border-b border-orange-50 pb-3">
              <Sparkles size={14} />
              {language === 'HI' ? 'आध्यात्मिक एवं धार्मिक लाभ' : 'Spiritual & Religious Benefits'}
            </h3>
            <ul className="space-y-5">
              {product.spiritual.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-orange-400 shrink-0" />
                  <span className="text-stone-700 text-sm leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* CTA Strip */}
        {/* CTA Strip */}
<div className="mt-10 bg-orange-900 rounded-[2rem] p-7 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
  <div>
    <p className="text-orange-300 text-xl font-black uppercase mb-1">
      {language === 'HI' ? 'ऑर्डर करें' : 'Place Your Order'}
    </p>

    <h3 className="text-white text-xl md:text-2xl font-bold">
      {language === 'HI'
        ? 'इस उत्पाद को घर मंगवाएं — सीधे बात करें'
        : 'Get this product delivered — Talk to us directly'}
    </h3>

    <a
      href="tel:9425175398"
      className="text-orange-300 text-2xl md:text-3xl font-black mt-2 block hover:text-white transition-colors tracking-tight"
    >
      94251 75398
    </a>

    {/* Manufacturing Info */}
    <p className="text-orange-100 text-sm md:text-base mt-4 leading-relaxed max-w-2xl">
      {language === 'HI'
        ? 'उत्पादन: राधे राधे गौशाला सिवनी एवं अन्नपूर्णा स्वसहायता समूह चरगाँव'
    : 'Manufactured by: Radhe Radhe Gaushala Seoni & Annapurna Self-Help Group, Chargaon'}
    </p>
  </div>

  <a
    href="tel:9425175398"
    className="bg-white text-orange-900 px-10 py-4 rounded-2xl font-black text-lg hover:bg-orange-50 transition-all active:scale-95 shadow-lg whitespace-nowrap"
  >
    {language === 'HI' ? '📞 अभी कॉल करें' : '📞 Call Now'}
  </a>
</div>

      </div>
    </div>
  );
};

export default ProductDetail;