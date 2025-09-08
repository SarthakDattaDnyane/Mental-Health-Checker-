// questions.js
// 15 questions; options implied 0..3 (0 = best/healthy, 3 = worst/more symptomatic)
const QUESTIONS = [
  {
    en: "In the last two weeks, how often have you felt little interest or pleasure in doing things?",
    hi: "पिछले दो हफ़्तों में, कितनी बार आपको चीज़ों में रुचि या आनंद कम महसूस हुआ?",
    mr: "गेल्या दोन आठवड्यांत, किती वेळा तुम्हाला गोष्टींमध्ये स्वारस्य किंवा आनंद कमी वाटला?"
  },
  {
    en: "How often have you felt down, depressed, or hopeless?",
    hi: "कितनी बार आपने उदास, निराश या बेबस महसूस किया?",
    mr: "किती वेळा तुम्हाला नैराश्य किंवा उदास वाटले?"
  },
  {
    en: "How often have you had trouble falling or staying asleep?",
    hi: "कितनी बार आपको सोने या सोए रहने में कठिनाई हुई?",
    mr: "झोपायला किंवा झोप टिकवायला किती वेळा त्रास झाला?"
  },
  {
    en: "How often have you felt tired or had little energy?",
    hi: " कितनी बार आपने थकान या कम ऊर्जा महसूस की?",
    mr: "किती वेळा तुम्हाला थकवा किंवा कमी ऊर्जा जाणवली?"
  },
  {
    en: "How often have you had poor appetite or overeating?",
    hi: "कितनी बार भूख कम लगना या ज्यादा खाना हुआ?",
    mr: "भूक कमी किंवा जास्त खाण्याची सवय किती वेळा झाली?"
  },
  {
    en: "How often have you felt bad about yourself — or that you are a failure?",
    hi: "कितनी बार आपने खुद को बुरा या असफल महसूस किया?",
    mr: "किती वेळा तुम्हाला स्वतः बद्दल वाईट वाटले किंवा अपयशी वाटले?"
  },
  {
    en: "How often have you had trouble concentrating on things like reading or watching TV?",
    hi: "कितनी बार पढ़ने या टीवी देखने में ध्यान की कमी हुई?",
    mr: "वाचन किंवा टीव्ही पाहण्यासारख्या गोष्टींवर लक्ष देण्यात किती वेळा अडचण आली?"
  },
  {
    en: "How often have you been feeling nervous, anxious, or on edge?",
    hi: "कितनी बार आप चिंतित, घबराए हुए या सतर्क महसूस रहे?",
    mr: "किती वेळा तुम्हाला घाबरटपणा, चिंताग्रस्तपणा किंवा तणाव जाणवला?"
  },
  {
    en: "How often have you felt unable to control worrying?",
    hi: "कितनी बार आप चिंता को नियंत्रित नहीं कर पाए?",
    mr: "किती वेळा चिंता नियंत्रणात ठेवता आली नाही?"
  },
  {
    en: "How often have you been easily annoyed or irritable?",
    hi: "कितनी बार आप जल्दी चिढ़ जाते हैं?",
    mr: "किती वेळा तुम्हाला पटकन चिडचिड दिसली?"
  },
  {
    en: "How often have you avoided talking about your feelings?",
    hi: "कितनी बार आपने अपनी भावनाओं के बारे में बात करने से बचा?",
    mr: "किती वेळा तुम्ही तुमच्या भावना विषयी बोलणे टाळले?"
  },
  {
    en: "How often have you felt that life is not worth living?",
    hi: "कितनी बार आपको लगा कि जिंदगी जीने लायक नहीं है?",
    mr: "किती वेळा तुम्हाला वाटले की आयुष्य जगण्यासारखे नाही?"
  },
  {
    en: "How often have you felt disconnected from people around you?",
    hi: "कितनी बार आपने अपने आसपास के लोगों से अलग महसूस किया?",
    mr: "किती वेळा तुम्हाला आजूबाजूच्या लोकांपासून वेगळे वाटले?"
  },
  {
    en: "How often have you had physical symptoms (headache, stomach ache) linked to stress?",
    hi: "कितनी बार तनाव से जुड़े शारीरिक लक्षण (सिरदर्द, पेट दर्द) हुए?",
    mr: "तनावाशी संबंधित शारीरिक लक्षण (डोकेदुखी, पोटदुखी) किती वेळा झाले?"
  },
  {
    en: "How often have you felt unable to manage everyday responsibilities?",
    hi: "कितनी बार आपको लगा कि आप रोजमर्रा की ज़िम्मेदारियों को संभाल नहीं पा रहे?",
    mr: "किती वेळा तुम्हाला वाटले की तुम्ही रोजच्या जबाबदाऱ्या सांभाळू शकत नाही?"
  }
];

const OPTIONS = {
  en: ["Never", "Sometimes", "Often", "Always"],
  hi: ["कभी नहीं", "कभी-कभी", "अक्सर", "हमेशा"],
  mr: ["कधीच नाही", "कधी कधी", "अनेकदा", "नेहमी"]
};
