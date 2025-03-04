"use client";
import React from "react";
import { Headphones, Zap } from "lucide-react";

interface MoHeroProps {
  language: "fr" | "en";
  isDarkMode: boolean;
}

export default function MoHero({ language, isDarkMode }: MoHeroProps) {
  // Content based on language
  const badge = language === "fr" ? "Traduction Audio en Temps Réel" : "Real-Time Audio Translation";
  
  const title = language === "fr" 
    ? "Mo' - Traduction Instantanée des Appels Microsoft Teams" 
    : "Mo' - Instant Translation for Microsoft Teams Calls";
    
  const subtitle = language === "fr"
    ? "Éliminez les barrières linguistiques pendant vos appels professionnels avec une traduction audio en temps réel dans plus de 30 langues."
    : "Eliminate language barriers during business calls with real-time audio translation in over 30 languages.";
  
  const primaryCTA = language === "fr" ? "Essayer Gratuitement" : "Try for Free";
  const secondaryCTA = language === "fr" ? "Voir la Démo" : "Watch Demo";
  
  // Dynamic styles based on color mode
  const headerGradient = isDarkMode
    ? "bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent"
    : "bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-600 bg-clip-text text-transparent";
  
  const subtitleClass = isDarkMode
    ? "text-gray-300"
    : "text-gray-700";
    
  const heroBadgeClass = isDarkMode
    ? "bg-indigo-900/30 backdrop-blur-sm text-indigo-200"
    : "bg-indigo-100 text-indigo-700";
  
  const badgeIconClass = isDarkMode
    ? "text-indigo-400"
    : "text-indigo-500";
    
  const heroGradientOverlay = isDarkMode
    ? "from-indigo-600/10 to-transparent"
    : "from-indigo-300/20 to-transparent";
    
  const heroRadialGradient = isDarkMode
    ? "from-indigo-600/20 via-transparent to-transparent"
    : "from-indigo-400/20 via-transparent to-transparent";
    
  const secondaryButtonClass = isDarkMode
    ? "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white"
    : "bg-white hover:bg-gray-50 border border-indigo-200 hover:border-indigo-300 text-indigo-700 shadow-sm";

  return (
    <section className="relative pt-28 md:pt-32 pb-12 md:pb-20 overflow-hidden px-4">
      <div className={`absolute inset-0 bg-gradient-to-b ${heroGradientOverlay}`} />
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] ${heroRadialGradient} blur-3xl`} />
      </div>

      <div className="relative max-w-5xl mx-auto text-center px-4">
        <div className={`inline-flex items-center gap-2 mb-6 md:mb-8 ${heroBadgeClass} px-3 md:px-4 py-1 md:py-2 rounded-full`}>
          <Headphones className={badgeIconClass} size={16} />
          <span className="text-xs md:text-sm font-medium tracking-wide">
            {badge}
          </span>
        </div>

        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-8 ${headerGradient} max-w-4xl mx-auto leading-tight`}>
          {title}
        </h1>

        <p className={`text-lg md:text-xl ${subtitleClass} mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed`}>
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary CTA Button */}
          <a
            href="#pricing"
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 px-6 md:px-8 py-3 md:py-4 
                      rounded-full font-medium flex items-center justify-center gap-2 transition-all 
                      hover:translate-y-[-2px] hover:shadow-lg hover:shadow-indigo-600/20 text-white"
          >
            {primaryCTA}
            <Zap size={16} className="text-indigo-200" />
          </a>

          {/* Secondary CTA Button */}
          <a
            href="#demo"
            className={`w-full sm:w-auto ${secondaryButtonClass} backdrop-blur-sm px-6 md:px-8 py-3 md:py-4 
                      rounded-full font-medium transition-all
                      flex items-center justify-center gap-2`}
          >
            {secondaryCTA}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}