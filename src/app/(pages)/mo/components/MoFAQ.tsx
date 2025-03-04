"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

interface MoFAQProps {
  language: "fr" | "en";
  isDarkMode: boolean;
}

// FAQ Item component
const FAQItem = ({ 
  question, 
  answer, 
  isOpen, 
  onClick,
  isDarkMode 
}: { 
  question: string; 
  answer: string; 
  isOpen: boolean;
  onClick: () => void;
  isDarkMode: boolean;
}) => {
  const questionClass = isDarkMode ? "text-gray-200" : "text-gray-800";
  const answerClass = isDarkMode ? "text-gray-400" : "text-gray-600";
  const borderClass = isDarkMode ? "border-gray-800" : "border-gray-200";
  const hoverClass = isDarkMode ? "hover:bg-gray-900/50" : "hover:bg-gray-50";
  
  return (
    <div className={`border-b ${borderClass} last:border-b-0`}>
      <button
        className={`w-full text-left py-5 px-4 flex justify-between items-center ${hoverClass} transition-colors focus:outline-none`}
        onClick={onClick}
      >
        <span className={`font-medium ${questionClass}`}>{question}</span>
        {isOpen ? (
          <ChevronUp size={18} className={isDarkMode ? "text-gray-400" : "text-gray-600"} />
        ) : (
          <ChevronDown size={18} className={isDarkMode ? "text-gray-400" : "text-gray-600"} />
        )}
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}
      >
        <div className={`px-4 text-sm ${answerClass}`}>
          {answer}
        </div>
      </div>
    </div>
  );
};

export default function MoFAQ({ language, isDarkMode }: MoFAQProps) {
  const [openItem, setOpenItem] = useState<number | null>(0);
  
  const handleToggle = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };
  
  // FAQ content
  const title = language === "fr" ? "Questions Fréquentes" : "Frequently Asked Questions";
  
  const faqs = language === "fr"
    ? [
        {
          question: "Comment fonctionne la traduction audio en temps réel?",
          answer: "Mo' utilise une technologie avancée de reconnaissance vocale pour capturer l'audio de l'appel, l'analyser, et le traduire instantanément. La traduction est ensuite transmise aux participants de l'appel dans leur langue préférée via une voix synthétisée naturelle, créant ainsi une expérience de conversation fluide."
        },
        {
          question: "Quelles langues sont prises en charge?",
          answer: "Mo' prend en charge plus de 30 langues, dont le français, l'anglais, l'espagnol, l'allemand, le chinois, le japonais, le russe, l'arabe, et bien d'autres. De nouvelles langues sont ajoutées régulièrement. Les plans tarifaires déterminent le nombre de langues accessibles."
        },
        {
          question: "Y a-t-il un délai perceptible pendant la traduction?",
          answer: "La latence moyenne est inférieure à 300 millisecondes, ce qui est à peine perceptible dans une conversation normale. Ce délai minimal permet des échanges fluides et naturels, même dans des discussions impliquant plusieurs langues différentes."
        },
        {
          question: "Comment Mo' gère-t-il la confidentialité des appels?",
          answer: "La confidentialité est notre priorité. Toutes les données audio sont traitées selon les normes RGPD et ne sont jamais stockées après la traduction. Le contenu des appels n'est pas conservé, et nous utilisons un chiffrement de bout en bout pour protéger les communications. Le plan Entreprise offre des options supplémentaires, y compris le traitement des données sur site."
        },
        {
          question: "Combien de personnes peuvent participer à un appel avec Mo'?",
          answer: "Mo' peut gérer des appels avec jusqu'à 20 participants simultanés parlant des langues différentes. Chaque participant peut choisir sa langue préférée pour recevoir les traductions, ce qui permet des conférences véritablement multilingues."
        },
        {
          question: "Puis-je essayer Mo' avant d'acheter?",
          answer: "Absolument! Nous proposons un essai gratuit de 14 jours sans engagement. Vous pourrez tester toutes les fonctionnalités de Mo' avec votre équipe avant de décider quel plan vous convient le mieux."
        }
      ]
    : [
        {
          question: "How does real-time audio translation work?",
          answer: "Mo' uses advanced speech recognition technology to capture call audio, analyze it, and translate it instantly. The translation is then transmitted to call participants in their preferred language via a natural synthesized voice, creating a fluid conversation experience."
        },
        {
          question: "What languages are supported?",
          answer: "Mo' supports over 30 languages, including French, English, Spanish, German, Chinese, Japanese, Russian, Arabic, and many more. New languages are added regularly. Pricing plans determine the number of languages accessible."
        },
        {
          question: "Is there a noticeable delay during translation?",
          answer: "The average latency is less than 300 milliseconds, which is barely perceptible in normal conversation. This minimal delay allows for fluid and natural exchanges, even in discussions involving multiple different languages."
        },
        {
          question: "How does Mo' handle call privacy?",
          answer: "Privacy is our priority. All audio data is processed according to GDPR standards and is never stored after translation. Call content is not retained, and we use end-to-end encryption to protect communications. The Enterprise plan offers additional options, including on-site data processing."
        },
        {
          question: "How many people can participate in a call with Mo'?",
          answer: "Mo' can handle calls with up to 20 simultaneous participants speaking different languages. Each participant can choose their preferred language to receive translations, enabling truly multilingual conferences."
        },
        {
          question: "Can I try Mo' before buying?",
          answer: "Absolutely! We offer a 14-day free trial with no commitment. You can test all of Mo's features with your team before deciding which plan suits you best."
        }
      ];
      
  // Dynamic styles based on theme
  const sectionBgClass = isDarkMode 
    ? "bg-gray-900/30" 
    : "bg-indigo-50/50";
  
  const containerBgClass = isDarkMode 
    ? "bg-gray-900/60 border-gray-800" 
    : "bg-white border-gray-200";
  
  const titleClass = isDarkMode 
    ? "text-gray-100" 
    : "text-gray-800";

  return (
    <section className={`${sectionBgClass} py-16 md:py-24 px-4`} id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-12 text-center">
          <div className="p-3 bg-indigo-600/10 rounded-xl">
            <HelpCircle className="text-indigo-400" size={28} />
          </div>
          <h2 className={`text-2xl md:text-3xl font-bold ${titleClass}`}>
            {title}
          </h2>
        </div>
        
        <div className={`border rounded-2xl overflow-hidden ${containerBgClass}`}>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItem === index}
              onClick={() => handleToggle(index)}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </section>
  );
}