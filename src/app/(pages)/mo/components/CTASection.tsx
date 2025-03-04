"use client";
import React from "react";
import { Zap } from "lucide-react";
import MoLogo from "@/app/components/ui/MoLogo";

interface CTASectionProps {
  language: "fr" | "en";
  isDarkMode: boolean;
}

export default function CTASection({ language, isDarkMode }: CTASectionProps) {
  // Content based on language
  const title = language === "fr" 
    ? "Prêt à Essayer Mo' ?" 
    : "Ready to Try Mo'?";
    
  const subtitle = language === "fr"
    ? "Commencez gratuitement pendant 14 jours"
    : "Start free for 14 days";
  
  const cta = language === "fr" ? "Essayer Gratuitement" : "Start Free Trial";
  
  // Dynamic styles based on theme
  const sectionBgClass = isDarkMode 
    ? "bg-[#182b5a]/10" 
    : "bg-[#182b5a]/5";
  
  const cardBgClass = isDarkMode 
    ? "bg-gray-900/60 border-gray-800" 
    : "bg-white border-gray-200";
  
  const titleClass = isDarkMode 
    ? "text-white" 
    : "text-gray-800";
  
  const subtitleClass = isDarkMode 
    ? "text-gray-300" 
    : "text-gray-600";

  return (
    <section className={`${sectionBgClass} py-16 px-4`}>
      <div className="max-w-3xl mx-auto">
        <div className={`${cardBgClass} rounded-2xl border shadow-lg p-8 text-center`}>
          <div className="inline-flex justify-center mb-4">
            <MoLogo width={80} height={80} />
          </div>
          
          <h2 className={`text-2xl md:text-3xl font-bold ${titleClass} mb-2`}>
            {title}
          </h2>
          
          <p className={`${subtitleClass} text-lg mb-6 max-w-xl mx-auto`}>
            {subtitle}
          </p>
          
          <div className="flex justify-center">
            <a
              href="#pricing"
              className="bg-[#182b5a] hover:bg-[#0f1d3d] text-white px-6 py-3 
                        rounded-full font-medium flex items-center justify-center gap-2 transition-all 
                        hover:shadow-lg hover:shadow-[#182b5a]/20"
            >
              {cta}
              <Zap size={16} className="text-indigo-200" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}