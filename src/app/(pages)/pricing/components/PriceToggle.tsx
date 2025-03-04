"use client";
import React from "react";

interface PriceToggleProps {
  annual: boolean;
  setAnnual: (value: boolean) => void;
  language: "fr" | "en";
  isDarkMode: boolean;
}

export default function PriceToggle({ annual, setAnnual, language, isDarkMode }: PriceToggleProps) {
  const monthlyText = language === "fr" ? "Mensuel" : "Monthly";
  const annualText = language === "fr" ? "Annuel" : "Annual";
  const savingText = language === "fr" ? "Économisez 20%" : "Save 20%";
  
  // Dynamic styles based on theme
  const toggleBgClass = isDarkMode 
    ? "bg-gray-800" 
    : "bg-gray-200";
  
  const toggleActiveClass = "bg-indigo-600 text-white";
  const toggleInactiveClass = isDarkMode 
    ? "text-gray-400 hover:text-gray-300" 
    : "text-gray-600 hover:text-gray-800";
    
  const savingBgClass = isDarkMode
    ? "bg-indigo-900/40 text-indigo-300" 
    : "bg-indigo-100 text-indigo-600";

  return (
    <div className="flex justify-center mb-12">
      <div className={`${toggleBgClass} p-1 rounded-full flex items-center`}>
        <button
          onClick={() => setAnnual(false)}
          className={`px-5 py-2 rounded-full transition-all ${annual ? toggleInactiveClass : toggleActiveClass}`}
        >
          {monthlyText}
        </button>
        
        <button
          onClick={() => setAnnual(true)}
          className={`px-5 py-2 rounded-full transition-all flex items-center gap-2 ${annual ? toggleActiveClass : toggleInactiveClass}`}
        >
          {annualText}
          <span className={`text-xs py-0.5 px-2 rounded-full ${savingBgClass}`}>
            {savingText}
          </span>
        </button>
      </div>
    </div>
  );
}