"use client";
import React, { useState, useEffect } from "react";
import { translations } from "@/app/lib/translations";
import Navbar from "@/app/components/layout/Navbar";
import MobileMenu from "@/app/components/layout/MobileMenu";
import Footer from "@/app/components/layout/Footer";
import { useTheme } from "@/app/components/layout/ThemeProvider";

// Mo Page Components
import MoHero from "./components/MoHero";
import MoPreview from "./components/MoPreview";
import MoFeatures from "./components/MoFeatures";
import MoPricing from "./components/MoPricing";
import CTASection from "./components/CTASection";

export default function MoPage() {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode } = useTheme();
  const t = translations[language];

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
      <MoHero
        language={language}
        isDarkMode={isDarkMode}
      />

      {/* PREVIEW SECTION */}
      <MoPreview
        language={language}
        isDarkMode={isDarkMode}
      />

      {/* FEATURES SECTION */}
      <MoFeatures
        language={language}
        isDarkMode={isDarkMode}
      />

      {/* PRICING SECTION */}
      <MoPricing
        language={language}
        isDarkMode={isDarkMode}
      />

      {/* CTA SECTION */}
      <CTASection
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