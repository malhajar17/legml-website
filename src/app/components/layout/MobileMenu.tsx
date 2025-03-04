// app/components/MobileMenu.tsx
"use client";
import React, { useEffect, useState } from "react";
import { X, Sparkles } from "lucide-react";
import { translations } from "../../lib/translations";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  language: "fr" | "en";
  setLanguage: (lang: "fr" | "en") => void;
  isDarkMode: boolean;
}

export default function MobileMenu({
  isOpen,
  onClose,
  language,
  setLanguage,
}: MobileMenuProps) {
  const t = translations[language];
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Detect color scheme
  useEffect(() => {
    // Check if window is defined (browser environment)
    if (typeof window !== 'undefined') {
      // Initial check
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      // Listen for changes
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        setIsDarkMode(e.matches);
      };
      
      mediaQuery.addEventListener('change', handleChange);
      
      // Cleanup
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  if (!isOpen) return null;

  // Conditional classes based on dark/light mode
  const bgClass = isDarkMode 
    ? "bg-gray-950/95" 
    : "bg-white/95";
  
  const textClass = isDarkMode 
    ? "text-white" 
    : "text-gray-900";
  
  const menuItemClass = isDarkMode 
    ? "text-gray-300 hover:text-indigo-400" 
    : "text-gray-600 hover:text-indigo-600";
  
  const langSwitcherBg = isDarkMode 
    ? "bg-gray-800/50" 
    : "bg-gray-200/80";
  
  const inactiveLanguageBg = isDarkMode 
    ? "hover:bg-gray-700" 
    : "hover:bg-gray-300";

  return (
    <div className={`fixed inset-0 ${bgClass} z-50 flex flex-col p-6`}>
      <div className="flex justify-between items-center mb-12">
        <div className={`text-2xl font-bold tracking-tight flex items-center gap-2 ${textClass}`}>
          <Sparkles className="text-indigo-400" size={24} />
          legml.ai
        </div>
        <button onClick={onClose} className="p-2">
          <X size={24} className={isDarkMode ? "text-gray-300" : "text-gray-600"} />
        </button>
      </div>

      {/* Menu Links */}
      <div className="flex flex-col space-y-6 text-lg">
        <a href="/home" className={`transition-colors ${menuItemClass}`}>
          {t.nav.home}
        </a>
        <a href="/features" className={`transition-colors ${menuItemClass}`}>
          {t.nav.features}
        </a>
        <a href="/pricing" className={`transition-colors ${menuItemClass}`}>
          {t.nav.pricing}
        </a>
        <a href="/mo" className={`transition-colors ${menuItemClass}`}>
          Mo'
        </a>
        <a href="/blog" className={`transition-colors ${menuItemClass}`}>
          {t.nav.blog}
        </a>
        <a href="/contact" className={`transition-colors ${menuItemClass}`}>
          Contact
        </a>
      </div>

      <div className="mt-auto">
        <div className={`flex items-center gap-2 text-sm ${langSwitcherBg} rounded-full p-1 mb-6`}>
          <button
            onClick={() => setLanguage("fr")}
            className={`px-3 py-1 rounded-full transition-all ${
              language === "fr" 
                ? "bg-indigo-600 text-white" 
                : inactiveLanguageBg
            }`}
          >
            FR
          </button>
          <button
            onClick={() => setLanguage("en")}
            className={`px-3 py-1 rounded-full transition-all ${
              language === "en" 
                ? "bg-indigo-600 text-white" 
                : inactiveLanguageBg
            }`}
          >
            EN
          </button>
        </div>

        <a 
          href="https://huggingface.co/legmlai/legml-v0.1"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-indigo-600 hover:bg-indigo-700 transition-all px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 text-white"
        >
          {t.nav.try}
          <Sparkles size={16} className="text-indigo-200" />
        </a>
      </div>
    </div>
  );
}