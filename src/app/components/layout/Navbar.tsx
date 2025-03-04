"use client";
import React from "react";
import { Sparkles, Menu } from "lucide-react";
import { translations } from "../../lib/translations";

interface NavbarProps {
  language: "fr" | "en";
  setLanguage: (lang: "fr" | "en") => void;
  onOpenMobileMenu: () => void;
  isDarkMode: boolean;
}

export default function Navbar({
  language,
  setLanguage,
  onOpenMobileMenu,
  isDarkMode,
}: NavbarProps) {
  const t = translations[language];

  // Dynamic styles based on theme
  const navBgClass = isDarkMode 
    ? "bg-black/80" 
    : "bg-white/80";
  
  const navBorderClass = isDarkMode 
    ? "border-gray-800/50" 
    : "border-gray-200/50";
  
  const navLinkClass = isDarkMode 
    ? "text-gray-300 hover:text-indigo-400" 
    : "text-gray-600 hover:text-indigo-600";
  
  const logoTextClass = isDarkMode 
    ? "text-white" 
    : "text-gray-800";
  
  const langSwitcherBg = isDarkMode 
    ? "bg-gray-800/50" 
    : "bg-gray-200/80";
  
  const inactiveLanguageBg = isDarkMode 
    ? "hover:bg-gray-700" 
    : "hover:bg-gray-300";
  
  const menuIconClass = isDarkMode 
    ? "text-gray-300" 
    : "text-gray-600";

  return (
    <nav className={`fixed top-0 left-0 right-0 ${navBgClass} backdrop-blur-lg border-b ${navBorderClass} z-40`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-4">
        {/* Left: Logo + Desktop Nav */}
        <div className="flex items-center gap-8">
          <div className={`text-xl md:text-2xl font-bold tracking-tight flex items-center gap-2 ${logoTextClass}`}>
            <Sparkles className="text-indigo-400" size={24} />
            legml.ai
          </div>
          {/* Desktop Links */}
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/home" className={`transition-colors ${navLinkClass}`}>
              {t.nav.home}
            </a>
            <a href="/features" className={`transition-colors ${navLinkClass}`}>
              {t.nav.features}
            </a>
            <a href="/pricing" className={`transition-colors ${navLinkClass}`}>
              {t.nav.pricing}
            </a>
            <a href="/mo" className={`transition-colors ${navLinkClass}`}>
              Mo'
            </a>
            <a href="/blog" className={`transition-colors ${navLinkClass}`}>
              {t.nav.blog}
            </a>
            <a href="/contact" className={`transition-colors ${navLinkClass}`}>
              Contact
            </a>
          </div>
        </div>

        {/* Right: Language Switch, CTA, Mobile Menu Button */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Language Switch (Desktop only) */}
          <div className={`hidden md:flex items-center gap-2 text-sm ${langSwitcherBg} rounded-full p-1`}>
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

          {/* CTA (Desktop) */}
          <a
            href="https://huggingface.co/legmlai/legml-v0.1"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex bg-indigo-600 hover:bg-indigo-700 transition-all px-6 py-2 rounded-full font-medium items-center gap-2 text-white"
          >
            {t.nav.try}
            <Sparkles size={16} className="text-indigo-200" />
          </a>

          {/* Mobile menu button */}
          <button
            onClick={onOpenMobileMenu}
            className="md:hidden p-1 rounded-md hover:bg-gray-800/30"
          >
            <Menu size={24} className={menuIconClass} />
          </button>
        </div>
      </div>
    </nav>
  );
}