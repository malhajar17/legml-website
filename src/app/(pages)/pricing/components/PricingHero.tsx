"use client";
import React from "react";
import { Tags } from "lucide-react";

interface PricingHeroProps {
  language: "fr" | "en";
  isDarkMode: boolean;
}

export default function PricingHero({ language, isDarkMode }: PricingHeroProps) {
  // Section content
  const title = language === "fr" 
    ? "Tarification Simple et Transparente" 
    : "Simple and Transparent Pricing";
    
  const subtitle = language === "fr"
    ? "Choisissez le plan qui correspond aux besoins de votre entreprise. Tous les plans incluent un support client dédié."
    : "Choose the plan that matches your business needs. All plans include dedicated customer support.";
  
  // Dynamic styles based on color mode
  const headerGradient = isDarkMode
    ? "bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent"
    : "bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-600 bg-clip-text text-transparent";
  
  const subtitleClass = isDarkMode
    ? "text-gray-300"
    : "text-gray-700";
    
  const heroGradientOverlay = isDarkMode
    ? "from-indigo-600/10 to-transparent"
    : "from-indigo-300/20 to-transparent";
    
  const heroRadialGradient = isDarkMode
    ? "from-indigo-600/20 via-transparent to-transparent"
    : "from-indigo-400/20 via-transparent to-transparent";

  return (
    <section className="relative pt-28 md:pt-32 pb-12 md:pb-16 overflow-hidden px-4">
      <div className={`absolute inset-0 bg-gradient-to-b ${heroGradientOverlay}`} />
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] ${heroRadialGradient} blur-3xl`} />
      </div>

      <div className="relative max-w-5xl mx-auto text-center px-4">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-indigo-600/10 rounded-xl">
            <Tags className="text-indigo-500" size={30} />
          </div>
        </div>

        <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 ${headerGradient} max-w-4xl mx-auto leading-tight`}>
          {title}
        </h1>

        <p className={`text-lg md:text-xl ${subtitleClass} mb-8 max-w-3xl mx-auto leading-relaxed`}>
          {subtitle}
        </p>
      </div>
    </section>
  );
}