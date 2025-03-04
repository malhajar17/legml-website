"use client";
import React from "react";
import { Download, Settings2, PhoneCall, Headphones } from "lucide-react";

interface HowItWorksProps {
  language: "fr" | "en";
  isDarkMode: boolean;
}

export default function HowItWorks({ language, isDarkMode }: HowItWorksProps) {
  // Content based on language
  const title = language === "fr" 
    ? "Comment Ça Marche" 
    : "How It Works";
    
  const subtitle = language === "fr"
    ? "Mo' transforme vos appels Teams en expériences multilingues en quelques étapes simples"
    : "Mo' transforms your Teams calls into multilingual experiences in a few simple steps";
  
  const steps = language === "fr"
    ? [
        {
          icon: <Download />,
          title: "Installation Simple",
          description: "Ajoutez Mo' depuis le Microsoft AppSource ou via votre administrateur Teams."
        },
        {
          icon: <Settings2 />,
          title: "Configuration",
          description: "Sélectionnez vos langues préférées et configurez les paramètres de voix."
        },
        {
          icon: <PhoneCall />,
          title: "Invitez Mo' à votre Appel",
          description: "Lors d'un appel Teams, cliquez sur '+ Ajouter' et sélectionnez Mo' comme participant."
        },
        {
          icon: <Headphones />,
          title: "Traduction Instantanée",
          description: "Parlez normalement et écoutez les traductions instantanées dans votre langue préférée."
        }
      ]
    : [
        {
          icon: <Download />,
          title: "Simple Installation",
          description: "Add Mo' from the Microsoft AppSource or through your Teams administrator."
        },
        {
          icon: <Settings2 />,
          title: "Configuration",
          description: "Select your preferred languages and configure voice settings."
        },
        {
          icon: <PhoneCall />,
          title: "Invite Mo' to Your Call",
          description: "During a Teams call, click '+ Add' and select Mo' as a participant."
        },
        {
          icon: <Headphones />,
          title: "Instant Translation",
          description: "Speak naturally and hear instant translations in your preferred language."
        }
      ];
      
  // Dynamic styles based on theme
  const sectionBgClass = isDarkMode 
    ? "bg-gradient-to-br from-indigo-900/10 to-gray-900/60" 
    : "bg-gradient-to-br from-indigo-50 to-gray-50";
  
  const titleClass = isDarkMode 
    ? "text-gray-100" 
    : "text-gray-800";
  
  const subtitleClass = isDarkMode 
    ? "text-gray-400" 
    : "text-gray-600";
  
  const cardBgClass = isDarkMode 
    ? "bg-gray-900/60 border-gray-800" 
    : "bg-white border-gray-200";
  
  const stepTitleClass = isDarkMode 
    ? "text-gray-200" 
    : "text-gray-800";
  
  const stepDescClass = isDarkMode 
    ? "text-gray-400" 
    : "text-gray-600";
  
  const stepNumberClass = isDarkMode
    ? "bg-indigo-900/50 text-indigo-300"
    : "bg-indigo-100 text-indigo-700";
  
  const iconClass = isDarkMode
    ? "text-indigo-400"
    : "text-indigo-500";
  
  const connectorClass = isDarkMode
    ? "border-gray-800"
    : "border-gray-200";

  return (
    <section className={`${sectionBgClass} py-16 md:py-24 px-4`} id="how-it-works">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`text-2xl md:text-4xl font-bold mb-4 ${titleClass}`}>
            {title}
          </h2>
          <p className={`text-lg ${subtitleClass} max-w-3xl mx-auto`}>
            {subtitle}
          </p>
        </div>
        
        <div className="relative">
          {/* Connector Line */}
          <div className={`absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 border-l-2 ${connectorClass} hidden md:block`}></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`${index % 2 === 1 ? 'md:translate-y-24' : ''} relative`}
              >
                <div className={`${cardBgClass} rounded-xl border p-6 hover:border-indigo-500/50 transition-all h-full`}>
                  {/* Step Number */}
                  <div className={`absolute -top-4 left-6 ${stepNumberClass} h-8 w-8 rounded-full flex items-center justify-center font-bold text-sm`}>
                    {index + 1}
                  </div>
                  
                  <div className="p-3 bg-indigo-600/10 rounded-xl inline-flex mb-4 mt-2">
                    <div className={iconClass}>
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className={`text-lg font-semibold mb-2 ${stepTitleClass}`}>
                    {step.title}
                  </h3>
                  
                  <p className={`text-sm ${stepDescClass}`}>
                    {step.description}
                  </p>
                </div>
                
                {/* Connector Dot */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ${isDarkMode ? "bg-indigo-500" : "bg-indigo-600"} hidden md:block`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}