"use client";
import React, { useState, useEffect } from "react";
import { Frown, Home } from "lucide-react";
import { useTheme } from "./components/layout/ThemeProvider";

export default function NotFound() {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const { isDarkMode } = useTheme();

  // Content based on language
  const title = language === "fr" ? "404 - Page Non Trouvée" : "404 - Page Not Found";
  const message = language === "fr" 
    ? "La page que vous cherchez n'existe pas ou a été déplacée." 
    : "The page you are looking for doesn't exist or has been moved.";
  const buttonText = language === "fr" ? "Retour à l'accueil" : "Back to Home";

  // Dynamic styles based on theme
  const bgClass = isDarkMode 
    ? "bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" 
    : "bg-gradient-to-b from-indigo-50 via-white to-indigo-50";
  
  const textClass = isDarkMode 
    ? "text-white" 
    : "text-gray-800";
  
  const subTextClass = isDarkMode 
    ? "text-gray-400" 
    : "text-gray-600";
  
  const buttonClass = isDarkMode
    ? "bg-indigo-600 hover:bg-indigo-700"
    : "bg-indigo-600 hover:bg-indigo-700";
  
  const iconClass = isDarkMode
    ? "text-gray-600"
    : "text-gray-300";

  return (
    <div className={`min-h-screen ${bgClass} ${textClass} flex items-center justify-center p-4`}>
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <Frown size={80} className={iconClass} />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className={`text-lg mb-8 ${subTextClass}`}>{message}</p>
        
        {/* Language Toggle */}
        <div className="mb-8 flex justify-center">
          <div className={`flex items-center gap-2 text-sm ${isDarkMode ? "bg-gray-800/50" : "bg-gray-200/80"} rounded-full p-1`}>
            <button
              onClick={() => setLanguage("fr")}
              className={`px-3 py-1 rounded-full transition-all ${
                language === "fr" 
                  ? "bg-indigo-600 text-white" 
                  : isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-300"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-full transition-all ${
                language === "en" 
                  ? "bg-indigo-600 text-white" 
                  : isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-300"
              }`}
            >
              EN
            </button>
          </div>
        </div>
        
        <a 
          href="/home" 
          className={`${buttonClass} px-6 py-3 rounded-full text-white font-medium inline-flex items-center gap-2`}
        >
          <Home size={16} />
          {buttonText}
        </a>
      </div>
    </div>
  );
}