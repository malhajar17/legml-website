"use client";
import React from "react";
import { Sparkles, ArrowRight } from "lucide-react";

interface CTASectionProps {
  language: "fr" | "en";
  isDarkMode: boolean;
}

export default function CTASection({ language, isDarkMode }: CTASectionProps) {
  // Section content
  const title = language === "fr" 
    ? "Prêt à Essayer legml ?" 
    : "Ready to Try legml?";
    
  const description = language === "fr"
    ? "Découvrez la puissance d'une IA conçue spécifiquement pour les entreprises françaises."
    : "Discover the power of an AI designed specifically for French businesses.";
  
  const primaryCTA = language === "fr" ? "Essayer Maintenant" : "Try Now";
  const secondaryCTA = language === "fr" ? "Voir les Tarifs" : "View Pricing";
  
  // Dynamic styles based on theme
  const sectionBgClass = isDarkMode 
    ? "bg-indigo-900/20" 
    : "bg-indigo-50";
  
  const cardBgClass = isDarkMode 
    ? "bg-gradient-to-br from-gray-900 to-gray-900/50 border-gray-800" 
    : "bg-gradient-to-br from-white to-gray-50 border-indigo-100";
  
  const titleClass = isDarkMode 
    ? "text-gray-100" 
    : "text-gray-800";
  
  const descriptionClass = isDarkMode 
    ? "text-gray-300" 
    : "text-gray-600";
  
  const secondaryBtnClass = isDarkMode
    ? "bg-gray-800 hover:bg-gray-700 text-gray-200"
    : "bg-white hover:bg-gray-50 text-indigo-700 border border-indigo-100";

  return (
    <section className={`${sectionBgClass} py-16 md:py-24 px-4`}>
      <div className="max-w-5xl mx-auto">
        <div className={`${cardBgClass} rounded-2xl p-8 md:p-12 text-center`}>
          <div className="inline-flex justify-center mb-6">
            <div className="p-3 bg-indigo-600/10 rounded-xl">
              <Sparkles className="text-indigo-400" size={28} />
            </div>
          </div>
          
          <h2 className={`text-2xl md:text-4xl font-bold ${titleClass} mb-4`}>
            {title}
          </h2>
          
          <p className={`${descriptionClass} text-lg md:text-xl mb-8 max-w-2xl mx-auto`}>
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://huggingface.co/legmlai/legml-v0.1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 md:px-8 py-3 md:py-4 
                        rounded-full font-medium flex items-center justify-center gap-2 transition-all 
                        hover:shadow-lg hover:shadow-indigo-600/20"
            >
              {primaryCTA}
              <Sparkles size={16} className="text-indigo-200" />
            </a>
            
            <a
              href="/pricing"
              className={`${secondaryBtnClass} px-6 md:px-8 py-3 md:py-4 
                        rounded-full font-medium flex items-center justify-center gap-2 transition-all`}
            >
              {secondaryCTA}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}