"use client";
import React from "react";
import { Sparkles, Star, ArrowUpRight } from "lucide-react";
import { translations } from "@/app/lib/translations";

interface HeroProps {
  language: "fr" | "en";
  isDarkMode: boolean;
}

export default function Hero({ language, isDarkMode }: HeroProps) {
  const t = translations[language];

  // Dynamic styles based on color mode
  const headerGradient = isDarkMode
    ? "bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent"
    : "bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-600 bg-clip-text text-transparent";
  
  const subtitleClass = isDarkMode
    ? "text-gray-300"
    : "text-gray-700";
  
  const secondaryButtonClass = isDarkMode
    ? "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white"
    : "bg-white hover:bg-gray-50 border border-indigo-200 hover:border-indigo-300 text-indigo-700 shadow-sm";

  // Hero badge styling
  const heroBadgeClass = isDarkMode
    ? "bg-indigo-900/30 backdrop-blur-sm text-indigo-200"
    : "bg-indigo-100 text-indigo-700";
    
  // Badge star color
  const badgeIconClass = isDarkMode
    ? "text-indigo-400"
    : "text-indigo-500";

  // Hero background gradients
  const heroGradientOverlay = isDarkMode
    ? "from-indigo-600/10 to-transparent"
    : "from-indigo-300/20 to-transparent";
    
  const heroRadialGradient = isDarkMode
    ? "from-indigo-600/20 via-transparent to-transparent"
    : "from-indigo-400/20 via-transparent to-transparent";

  return (
    <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background gradients */}
      <div className={`absolute inset-0 bg-gradient-to-b ${heroGradientOverlay}`} />
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] ${heroRadialGradient} blur-3xl`} />
      </div>

      {/* Content container */}
      <div className="relative max-w-5xl mx-auto text-center px-4">
        {/* Hero badge */}
        <div className={`inline-flex items-center gap-2 mb-6 md:mb-8 ${heroBadgeClass} px-3 md:px-4 py-1 md:py-2 rounded-full`}>
          <Star className={`${badgeIconClass}`} size={14} />
          <span className="text-xs md:text-sm font-medium tracking-wide">
            {t.hero.badge}
          </span>
        </div>

        {/* Main heading */}
        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8 ${headerGradient} max-w-4xl mx-auto leading-tight`}>
          {t.hero.title}
        </h1>

        {/* Subtitle */}
        <p className={`text-lg md:text-xl lg:text-2xl ${subtitleClass} mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed`}>
          {t.hero.subtitle}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Primary CTA button */}
          <a
            href="https://huggingface.co/legmlai/legml-v0.1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 px-6 md:px-8 py-3 md:py-4 
                      rounded-full font-medium flex items-center justify-center gap-2 transition-all 
                      hover:translate-y-[-2px] hover:shadow-lg hover:shadow-indigo-600/20 text-white"
          >
            {t.hero.cta}
            <Sparkles size={16} className="text-indigo-200" />
          </a>

          {/* Secondary CTA button */}
          <a
            href="#mo-section"
            className={`w-full sm:w-auto ${secondaryButtonClass} backdrop-blur-sm px-6 md:px-8 py-3 md:py-4 
                      rounded-full font-medium transition-all
                      flex items-center justify-center gap-2`}
          >
            {t.hero.secondary}
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}