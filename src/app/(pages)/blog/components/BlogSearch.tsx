"use client";
import React from "react";
import { Search } from "lucide-react";

interface BlogSearchProps {
  language: "fr" | "en";
  isDarkMode: boolean;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function BlogSearch({ 
  language, 
  isDarkMode, 
  activeCategory, 
  setActiveCategory 
}: BlogSearchProps) {
  // Component content
  const searchPlaceholder = language === "fr" 
    ? "Rechercher des articles..." 
    : "Search articles...";
  
  const allCategories = language === "fr" ? "Toutes" : "All";
  
  const categories = language === "fr"
    ? ["Toutes", "IA", "Tutoriels", "Études de Cas", "Innovations", "Événements"]
    : ["All", "AI", "Tutorials", "Case Studies", "Innovations", "Events"];
  
  // Dynamic styles based on theme
  const searchBgClass = isDarkMode 
    ? "bg-gray-900/50 border-gray-800" 
    : "bg-white border-gray-200";
  
  const searchIconClass = isDarkMode 
    ? "text-gray-500" 
    : "text-gray-400";
  
  const searchPlaceholderClass = isDarkMode 
    ? "placeholder-gray-500" 
    : "placeholder-gray-400";
  
  const searchTextClass = isDarkMode 
    ? "text-gray-200" 
    : "text-gray-800";
  
  const categoryBgActive = isDarkMode
    ? "bg-indigo-600 text-white"
    : "bg-indigo-600 text-white";
  
  const categoryBgInactive = isDarkMode
    ? "bg-gray-800/50 text-gray-300 hover:bg-gray-800"
    : "bg-gray-200/70 text-gray-600 hover:bg-gray-200";

  return (
    <div className="max-w-6xl mx-auto px-4 pb-12">
      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        {/* Search Box */}
        <div className={`w-full md:w-auto relative ${searchBgClass} rounded-full overflow-hidden flex-grow max-w-md`}>
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search size={18} className={searchIconClass} />
          </div>
          <input
            type="text"
            placeholder={searchPlaceholder}
            className={`w-full py-3 pl-10 pr-4 bg-transparent focus:outline-none ${searchPlaceholderClass} ${searchTextClass}`}
          />
        </div>
        
        {/* Categories */}
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category ? categoryBgActive : categoryBgInactive
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}