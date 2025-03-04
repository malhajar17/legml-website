"use client";
import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isDarkMode: boolean;
}

export default function FeatureCard({
  icon,
  title,
  description,
  isDarkMode
}: FeatureCardProps) {
  // Dynamic styles based on theme
  const cardBgClass = isDarkMode 
    ? "bg-gray-900/50 border-gray-800" 
    : "bg-white border-gray-200";
  
  const titleClass = isDarkMode 
    ? "text-gray-100" 
    : "text-gray-800";
  
  const descriptionClass = isDarkMode 
    ? "text-gray-400" 
    : "text-gray-600";

  return (
    <div className={`group p-6 rounded-2xl border ${cardBgClass} transition-all hover:border-indigo-500/50`}>
      <div className="p-3 bg-indigo-600/10 rounded-xl inline-flex mb-4">
        {icon}
      </div>
      
      <h3 className={`text-xl font-semibold mb-3 ${titleClass}`}>
        {title}
      </h3>
      
      <p className={`${descriptionClass}`}>
        {description}
      </p>
    </div>
  );
}