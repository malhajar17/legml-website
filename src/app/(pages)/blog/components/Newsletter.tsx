"use client";
import React from "react";
import { Mail } from "lucide-react";

interface NewsletterProps {
  language: "fr" | "en";
  isDarkMode: boolean;
}

export default function Newsletter({ language, isDarkMode }: NewsletterProps) {
  // Component content
  const title = language === "fr" 
    ? "Restez Informé" 
    : "Stay Informed";
    
  const description = language === "fr"
    ? "Abonnez-vous à notre newsletter pour recevoir les dernières actualités, tutoriels et mises à jour sur l'IA française."
    : "Subscribe to our newsletter to receive the latest news, tutorials, and updates on French AI.";
  
  const placeholder = language === "fr" 
    ? "Votre adresse email" 
    : "Your email address";
    
  const buttonText = language === "fr" 
    ? "S'abonner" 
    : "Subscribe";
    
  const privacyText = language === "fr"
    ? "Nous respectons votre vie privée. Désabonnez-vous à tout moment."
    : "We respect your privacy. Unsubscribe at any time.";
  
  // Dynamic styles based on theme
  const sectionBgClass = isDarkMode 
    ? "bg-indigo-900/20" 
    : "bg-indigo-50";
  
  const cardBgClass = isDarkMode 
    ? "bg-gray-900/80 border-gray-800" 
    : "bg-white border-gray-200";
  
  const titleClass = isDarkMode 
    ? "text-gray-100" 
    : "text-gray-800";
  
  const descriptionClass = isDarkMode 
    ? "text-gray-300" 
    : "text-gray-600";
  
  const inputBgClass = isDarkMode 
    ? "bg-gray-800/50 border-gray-700 text-gray-200 placeholder-gray-500" 
    : "bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400";
  
  const buttonClass = isDarkMode
    ? "bg-indigo-600 hover:bg-indigo-700 text-white"
    : "bg-indigo-600 hover:bg-indigo-700 text-white";
    
  const privacyTextClass = isDarkMode
    ? "text-gray-500"
    : "text-gray-500";

  return (
    <section className={`${sectionBgClass} py-16 md:py-24 px-4`}>
      <div className="max-w-4xl mx-auto">
        <div className={`${cardBgClass} rounded-2xl p-6 md:p-8 border`}>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="p-4 bg-indigo-600/20 rounded-xl">
              <Mail className="text-indigo-400" size={32} />
            </div>
            
            <div className="flex-grow">
              <h2 className={`text-xl md:text-2xl font-bold ${titleClass} mb-2`}>
                {title}
              </h2>
              <p className={`${descriptionClass} text-sm md:text-base mb-4`}>
                {description}
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder={placeholder}
                  required
                  className={`flex-grow px-4 py-3 rounded-full ${inputBgClass} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                />
                <button
                  type="submit"
                  className={`${buttonClass} px-6 py-3 rounded-full font-medium transition-all sm:whitespace-nowrap`}
                >
                  {buttonText}
                </button>
              </form>
              
              <p className={`mt-3 text-xs ${privacyTextClass}`}>
                {privacyText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}