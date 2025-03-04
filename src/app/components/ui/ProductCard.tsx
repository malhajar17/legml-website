"use client";
import React from "react";
import { Check } from "lucide-react";

interface ProductCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  metrics: string[];
  linkUrl?: string;
  isDarkMode: boolean;
}

export default function ProductCard({
  icon: Icon,
  title,
  description,
  metrics,
  linkUrl,
  isDarkMode
}: ProductCardProps) {
  // Dynamic styles based on theme
  const cardBgClass = isDarkMode 
    ? "bg-gradient-to-br from-gray-900 to-gray-900/50 border-gray-800"
    : "bg-gradient-to-br from-white to-gray-50 border-gray-200";
  
  const titleClass = isDarkMode 
    ? "text-gray-200" 
    : "text-gray-800";
  
  const descriptionClass = isDarkMode 
    ? "text-gray-300" 
    : "text-gray-600";
  
  const metricTextClass = isDarkMode 
    ? "text-gray-400" 
    : "text-gray-600";
  
  const metricIconBgClass = isDarkMode 
    ? "bg-indigo-600/10" 
    : "bg-indigo-100";

  return (
    <div className={`w-full md:w-1/2 group relative ${cardBgClass} p-4 md:p-8 rounded-2xl border hover:border-indigo-500/50 transition-all mb-6 md:mb-0`}>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/0 via-indigo-600/5 to-indigo-600/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
      
      <div className="relative">
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <div className="p-2 bg-indigo-600/10 rounded-xl">
            <Icon className="text-indigo-400" size={24} />
          </div>
          <h3 className={`text-lg md:text-xl ${titleClass}`}>{title}</h3>
        </div>
        
        <p className={`${descriptionClass} text-base md:text-lg mb-6 md:mb-8`}>{description}</p>
        
        <ul className="space-y-3 md:space-y-4">
          {metrics.map((metric, i) => (
            <li
              key={i}
              className={`flex items-center gap-3 text-sm md:text-base ${metricTextClass}`}
            >
              <div className={`p-1 ${metricIconBgClass} rounded-full flex-shrink-0`}>
                <Check size={14} className="text-indigo-400" />
              </div>
              <span>{metric}</span>
            </li>
          ))}
        </ul>

        {/* Link Button at Bottom */}
        {linkUrl && (
          <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-indigo-600 text-white px-4 py-2 rounded-full 
                       font-medium hover:bg-indigo-700 transition-colors"
          >
            Découvrir
          </a>
        )}
      </div>
    </div>
  );
}