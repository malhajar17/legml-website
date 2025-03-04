"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

interface FAQProps {
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

export default function FAQ({ language, isDarkMode }: FAQProps) {
  const [openItem, setOpenItem] = useState<number | null>(0);
  
  const handleToggle = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };
  
  // FAQ content
  const title = language === "fr" ? "Questions Fréquentes" : "Frequently Asked Questions";
  
  const faqs = language === "fr"
    ? [
        {
          question: "Comment fonctionnent les tokens?",
          answer: "Les tokens sont des unités de traitement de texte. En moyenne, un token équivaut à environ 4 caractères ou 0,75 mots en français. Chaque requête faite à notre API consomme des tokens, à la fois pour l'entrée (votre requête) et la sortie (la réponse de l'IA)."
        },
        {
          question: "Puis-je changer de forfait à tout moment?",
          answer: "Oui, vous pouvez passer à un forfait supérieur à tout moment. Pour les forfaits annuels, le changement prendra effet immédiatement avec un ajustement au prorata. Pour passer à un forfait inférieur, le changement prendra effet à la fin de votre période de facturation en cours."
        },
        {
          question: "Que se passe-t-il si je dépasse ma limite de tokens?",
          answer: "Si vous dépassez votre limite mensuelle de tokens, vous serez facturé au taux de dépassement standard de 0,01€ par 1000 tokens supplémentaires. Vous pouvez également configurer des alertes et des limites de dépenses dans votre tableau de bord pour éviter les surprises."
        },
        {
          question: "Quelle est la différence entre le modèle standard et personnalisé?",
          answer: "Le modèle standard est notre modèle pré-entraîné qui convient à la plupart des cas d'usage généraux. Le modèle personnalisé comprend un fine-tuning sur vos données propres, vous permettant d'obtenir une IA adaptée spécifiquement à votre domaine, votre terminologie et vos besoins particuliers."
        },
        {
          question: "Comment fonctionne le déploiement sur site?",
          answer: "Le déploiement sur site est disponible pour le forfait Entreprise. Notre équipe travaillera avec vos ingénieurs pour installer et configurer legml sur votre infrastructure. Cela comprend l'intégration avec vos systèmes de sécurité, la formation de votre équipe technique et la mise en place de processus de maintenance."
        },
        {
          question: "Quelles garanties de sécurité proposez-vous?",
          answer: "Tous nos plans sont conformes au RGPD. Nous ne conservons pas vos données au-delà de ce qui est nécessaire pour le traitement. Pour les forfaits Professionnel et Entreprise, nous proposons des garanties supplémentaires, y compris le chiffrement de bout en bout, la possibilité de VPC dédiés, et des audits de sécurité réguliers."
        }
      ]
    : [
        {
          question: "How do tokens work?",
          answer: "Tokens are text processing units. On average, one token equals approximately 4 characters or 0.75 words in French. Each request made to our API consumes tokens, both for input (your request) and output (the AI's response)."
        },
        {
          question: "Can I change plans at any time?",
          answer: "Yes, you can upgrade to a higher plan at any time. For annual plans, the change will take effect immediately with a pro-rata adjustment. To downgrade, the change will take effect at the end of your current billing period."
        },
        {
          question: "What happens if I exceed my token limit?",
          answer: "If you exceed your monthly token limit, you will be charged at the standard overage rate of €0.01 per 1000 additional tokens. You can also set up alerts and spending limits in your dashboard to avoid surprises."
        },
        {
          question: "What's the difference between standard and custom models?",
          answer: "The standard model is our pre-trained model suitable for most general use cases. The custom model includes fine-tuning on your own data, allowing you to get an AI specifically adapted to your domain, terminology, and particular needs."
        },
        {
          question: "How does on-premise deployment work?",
          answer: "On-premise deployment is available for the Enterprise plan. Our team will work with your engineers to install and configure legml on your infrastructure. This includes integration with your security systems, training your technical team, and setting up maintenance processes."
        },
        {
          question: "What security guarantees do you offer?",
          answer: "All our plans are GDPR compliant. We do not retain your data beyond what is necessary for processing. For Professional and Enterprise plans, we offer additional guarantees, including end-to-end encryption, dedicated VPC options, and regular security audits."
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
    <section className={`${sectionBgClass} py-16 md:py-24 px-4`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-12 text-center md:text-left">
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