"use client";
import React, { useState, useEffect } from "react";
import { translations } from "@/app/lib/translations";
import Navbar from "@/app/components/layout/Navbar";
import MobileMenu from "@/app/components/layout/MobileMenu";
import Footer from "@/app/components/layout/Footer";
import BlogHero from "./components/BlogHero";
import BlogGrid from "./components/BlogGrid";
import Newsletter from "./components/Newsletter";

export default function BlogPage() {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const t = translations[language];

  // Detect color scheme
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        setIsDarkMode(e.matches);
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  // Dynamic styles based on color mode
  const bgClass = isDarkMode 
    ? "bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" 
    : "bg-gradient-to-b from-indigo-50 via-white to-indigo-50";
  
  const textClass = isDarkMode 
    ? "text-white" 
    : "text-gray-800";

  return (
    <div className={`min-h-screen ${bgClass} ${textClass}`}>
      {/* MOBILE MENU */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        language={language}
        setLanguage={setLanguage}
        isDarkMode={isDarkMode}
      />

      {/* NAVBAR */}
      <Navbar
        language={language}
        setLanguage={setLanguage}
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
        isDarkMode={isDarkMode}
      />

      {/* HERO SECTION */}
      <BlogHero
        language={language}
        isDarkMode={isDarkMode}
      />

      {/* BLOG GRID */}
      <BlogGrid
        language={language}
        isDarkMode={isDarkMode}
      />

      {/* NEWSLETTER */}
      <Newsletter
        language={language}
        isDarkMode={isDarkMode}
      />

      {/* FOOTER */}
      <Footer 
        language={language} 
        isDarkMode={isDarkMode} 
      />
    </div>
  );
}