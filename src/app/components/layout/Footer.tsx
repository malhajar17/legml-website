"use client";
import React from "react";
import { Sparkles, Linkedin, X } from "lucide-react";

interface FooterProps {
  language: "fr" | "en";
  isDarkMode: boolean;
}

export default function Footer({ language, isDarkMode }: FooterProps) {
  // Dynamic styles based on theme
  const footerBorderClass = isDarkMode
    ? "border-gray-800"
    : "border-indigo-100";
  
  const footerHeadingClass = isDarkMode
    ? "text-white"
    : "text-indigo-900";
  
  const footerTextClass = isDarkMode
    ? "text-gray-400"
    : "text-gray-600";
  
  const socialBgClass = isDarkMode
    ? "bg-gray-800 hover:bg-gray-700"
    : "bg-white hover:bg-indigo-50 border border-indigo-100 shadow-sm";

  return (
    <footer className={`border-t ${footerBorderClass} py-8 md:py-12 ${isDarkMode ? "" : "bg-white"}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-8">
          {/* Left column */}
          <div>
            <h3 className={`${footerHeadingClass} text-xl md:text-2xl font-semibold mb-6 md:mb-12`}>
              {language === "fr" ? "Entreprise" : "Company"}
            </h3>
            <a
              href="#" 
              className={`block ${footerTextClass} hover:text-indigo-500 transition-colors`}
            >
              {language === "fr" ? "Contact" : "Contact"}
            </a>
          </div>

          {/* Right column */}
          <div>
            <h3 className={`${footerHeadingClass} text-xl md:text-2xl font-semibold mb-6 md:mb-12`}>
              {language === "fr" ? "Suivez-nous" : "Follow us"}
            </h3>
            <div className="flex gap-4 md:gap-6">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/legml-ai"
                aria-label="LinkedIn"
                className={`${socialBgClass} p-3 md:p-4 rounded-full ${isDarkMode ? "text-gray-400 hover:text-white" : "text-indigo-500 hover:text-indigo-600"} transition-colors`}
              >
                <Linkedin size={20} />
              </a>
              {/* X/Twitter */}
              <a
                href="https://x.com/frenchllm?s=21"
                aria-label="X"
                className={`${socialBgClass} p-3 md:p-4 rounded-full ${isDarkMode ? "text-gray-400 hover:text-white" : "text-indigo-500 hover:text-indigo-600"} transition-colors`}
              >
                <X size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Company info section */}
        <div className="mt-12 md:mt-16">
          <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
            <Sparkles className="text-indigo-500" size={20} />
            <span className={`font-semibold text-xl md:text-2xl ${footerHeadingClass}`}>
              legml.ai
            </span>
          </div>
          <p className={`text-sm md:text-base ${footerTextClass} mb-3 md:mb-4`}>
            {language === "fr"
              ? "L'IA française pour les entreprises européennes"
              : "French AI for European enterprises"}
          </p>
          <p className={`text-sm md:text-base ${footerTextClass} mb-3 md:mb-4`}>
            © 2025 legml.ai.{" "}
            {language === "fr" ? "Tous droits réservés." : "All rights reserved."}
          </p>
          <a
            href="#"
            className={`text-sm md:text-base ${footerTextClass} hover:text-indigo-500 transition-colors`}
          >
            {language === "fr" ? "Conditions d'utilisation" : "Terms of Use"}
          </a>
        </div>
      </div>
    </footer>
  );
}