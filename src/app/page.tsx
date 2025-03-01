"use client";
import React, { useState, useEffect } from "react";
import { Sparkles, Star, ArrowUpRight, Globe, Zap, MessageSquare } from "lucide-react";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import ProductCard from "./components/ProductCard";
import MoSection from "./components/MoSection";
import FounderCard from "./components/FounderCard";
import { translations } from "./lib/translations";
import { Linkedin, BarChart3, X } from "lucide-react";

export default function HomePage() {
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

  // Build moFeatures with icons
  const moFeatures = t.mo.features.map((feature, index) => {
    const icons = [
      <Globe key="globe" className="text-indigo-500" size={24} />,
      <Zap key="zap" className="text-indigo-500" size={24} />,
      <MessageSquare key="message" className="text-indigo-500" size={24} />
    ];
    return { ...feature, icon: icons[index] };
  });

  // Dynamic styles based on color mode
  const bgClass = isDarkMode 
    ? "bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" 
    : "bg-gradient-to-b from-indigo-50 via-white to-indigo-50"; // Subtle indigo tint for light mode
  
  const textClass = isDarkMode 
    ? "text-white" 
    : "text-gray-800"; // Darker text for better contrast
  
  const headerGradient = isDarkMode
    ? "bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent"
    : "bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-600 bg-clip-text text-transparent"; // Richer indigo gradient
  
  const subtitleClass = isDarkMode
    ? "text-gray-300"
    : "text-gray-700"; // Darker for better readability
  
  const secondaryButtonClass = isDarkMode
    ? "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white"
    : "bg-white hover:bg-gray-50 border border-indigo-200 hover:border-indigo-300 text-indigo-700 shadow-sm"; // More visible button
  
  const footerBorderClass = isDarkMode
    ? "border-gray-800"
    : "border-indigo-100"; // Subtle indigo border
  
  const footerHeadingClass = isDarkMode
    ? "text-white"
    : "text-indigo-900"; // Deeper indigo for headings
  
  const footerTextClass = isDarkMode
    ? "text-gray-400"
    : "text-gray-600"; // Better contrast
  
  const socialBgClass = isDarkMode
    ? "bg-gray-800 hover:bg-gray-700"
    : "bg-white hover:bg-indigo-50 border border-indigo-100 shadow-sm"; // More elegant social buttons

  // Hero badge styling
  const heroBadgeClass = isDarkMode
    ? "bg-indigo-900/30 backdrop-blur-sm text-indigo-200"
    : "bg-indigo-100 text-indigo-700"; // More visible badge
    
  // Badge star color
  const badgeIconClass = isDarkMode
    ? "text-indigo-400"
    : "text-indigo-500"; // Brighter icon

  // Hero background gradients
  const heroGradientOverlay = isDarkMode
    ? "from-indigo-600/10 to-transparent"
    : "from-indigo-300/20 to-transparent"; // Subtle indigo gradient
    
  const heroRadialGradient = isDarkMode
    ? "from-indigo-600/20 via-transparent to-transparent"
    : "from-indigo-400/20 via-transparent to-transparent"; // Soft glow

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
      <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden px-4">
        <div className={`absolute inset-0 bg-gradient-to-b ${heroGradientOverlay}`} />
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] ${heroRadialGradient} blur-3xl`} />
        </div>

        <div className="relative max-w-5xl mx-auto text-center px-4">
          <div className={`inline-flex items-center gap-2 mb-6 md:mb-8 ${heroBadgeClass} px-3 md:px-4 py-1 md:py-2 rounded-full`}>
            <Star className={badgeIconClass} size={14} />
            <span className="text-xs md:text-sm font-medium tracking-wide">
              {t.hero.badge}
            </span>
          </div>

          <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8 ${headerGradient} max-w-4xl mx-auto leading-tight`}>
            {t.hero.title}
          </h1>

          <p className={`text-lg md:text-xl lg:text-2xl ${subtitleClass} mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed`}>
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Button #1: Essayer Gratuitement -> huggingface.co */}
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

            {/* Button #2: Explorer les Solutions -> #mo-section */}
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

      {/* PRODUCTS SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
          {/* LEGML card -> Hugging Face link */}
          <ProductCard
            icon={Sparkles}
            title={t.products.legml.title}
            description={t.products.legml.description}
            metrics={t.products.legml.metrics}
            linkUrl="https://huggingface.co/legmlai/legml-v0.1"
            isDarkMode={isDarkMode}
          />

          {/* LE-LEADERBOARD card -> Hugging Face link */}
          <ProductCard
            icon={BarChart3}
            title={t.products.leaderboard.title}
            description={t.products.leaderboard.description}
            metrics={t.products.leaderboard.metrics}
            linkUrl="https://huggingface.co/le-leadboard"
            isDarkMode={isDarkMode}
          />
        </div>
      </section>

      {/* MO SECTION */}
      <section id="mo-section" className="max-w-6xl mx-auto px-4 pb-12 md:pb-24">
        <MoSection
          title={t.mo.title}
          description={t.mo.description}
          features={moFeatures}
          cta={t.mo.cta}
          stats={t.mo.stats}
          isDarkMode={isDarkMode}
        />
      </section>

      {/* FOUNDERS SECTION */}
      <section className="max-w-6xl mx-auto px-4 pb-16 md:pb-32">
        <div className="text-center mb-10 md:mb-16">
          <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${isDarkMode ? "" : "text-indigo-800"}`}>
            {t.founders.title}
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-16">
          {t.founders.members.map((founder, index) => (
            <FounderCard
              key={index}
              name={founder.name}
              position={founder.position}
              linkText={founder.linkText}
              linkUrl={founder.linkUrl}
              imageUrl={founder.imageUrl}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </section>

      {/* FOOTER */}
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
    </div>
  );
}