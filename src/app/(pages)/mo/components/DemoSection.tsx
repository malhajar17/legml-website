"use client";
import React from "react";
import { Play, Check } from "lucide-react";

interface DemoSectionProps {
  language: "fr" | "en";
  isDarkMode: boolean;
}

export default function DemoSection({ language, isDarkMode }: DemoSectionProps) {
  // Content based on language
  const title = language === "fr" 
    ? "Voir Mo' en Action" 
    : "See Mo' in Action";
    
  const subtitle = language === "fr"
    ? "Découvrez comment Mo' traduit instantanément les conversations en temps réel dans Microsoft Teams"
    : "Discover how Mo' instantly translates conversations in real-time in Microsoft Teams";
  
  const demoPoints = language === "fr"
    ? [
        "Traduction instantanée de 30+ langues",
        "Interface intuitive directement dans Teams",
        "Détection automatique de la langue",
        "Traductions contextuelles intelligentes"
      ]
    : [
        "Instant translation of 30+ languages",
        "Intuitive interface directly in Teams",
        "Automatic language detection",
        "Intelligent contextual translations"
      ];
      
  const ctaText = language === "fr"
    ? "Réserver une Démo Personnalisée"
    : "Book a Personalized Demo";
  
  // Dynamic styles based on theme
  const sectionBgClass = isDarkMode 
    ? "bg-gray-900/30" 
    : "bg-indigo-50/50";
  
  const titleClass = isDarkMode 
    ? "text-gray-100" 
    : "text-gray-800";
  
  const subtitleClass = isDarkMode 
    ? "text-gray-400" 
    : "text-gray-600";
  
  const cardBgClass = isDarkMode 
    ? "bg-gray-900/50 border-gray-800" 
    : "bg-white border-gray-200";
  
  const videoBgClass = isDarkMode
    ? "bg-gray-800"
    : "bg-gray-200";
  
  const checkmarkClass = isDarkMode
    ? "bg-indigo-900/50 text-indigo-400"
    : "bg-indigo-100 text-indigo-600";
  
  const pointTextClass = isDarkMode
    ? "text-gray-300"
    : "text-gray-700";

  return (
    <section className={`${sectionBgClass} py-16 md:py-24 px-4`} id="demo">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`text-2xl md:text-4xl font-bold mb-4 ${titleClass}`}>
            {title}
          </h2>
          <p className={`text-lg ${subtitleClass} max-w-3xl mx-auto`}>
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Video Demo */}
          <div className={`${cardBgClass} rounded-xl border overflow-hidden shadow-xl`}>
            <div className={`aspect-video ${videoBgClass} relative flex items-center justify-center`}>
              {/* Video Placeholder - In a real implementation, this would be a video player */}
              <div className="text-center">
                <button className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center transition-all">
                  <Play fill="white" size={24} className="text-white ml-1" />
                </button>
                <p className={`mt-4 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                  {language === "fr" ? "Cliquez pour voir la démo" : "Click to watch demo"}
                </p>
              </div>
            </div>
          </div>
          
          {/* Demo Points */}
          <div className="flex flex-col">
            <ul className="space-y-4 mb-8">
              {demoPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className={`p-1 rounded-full ${checkmarkClass} flex-shrink-0 mt-1`}>
                    <Check size={14} />
                  </div>
                  <span className={`text-lg ${pointTextClass}`}>
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            
            <a 
              href="#pricing"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-medium inline-flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-indigo-600/20 mt-4"
            >
              {ctaText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}