"use client";
import React from "react";
import { Bot } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface MoSectionProps {
  title: string;
  description: string;
  features: Feature[];
  cta: string;
  stats: {
    users: string;
    accuracy: string;
    enterprises: string;
  };
  isDarkMode: boolean;
}

export default function MoSection({
  title,
  description,
  features,
  cta,
  stats,
  isDarkMode,
}: MoSectionProps) {
  // Dynamic styles based on theme
  const cardBgClass = isDarkMode 
    ? "bg-gradient-to-br from-gray-900 to-gray-900/50 border-gray-800" 
    : "bg-gradient-to-br from-white to-gray-50 border-gray-200";
  
  const titleClass = isDarkMode 
    ? "text-gray-200" 
    : "text-gray-800";
  
  const descriptionClass = isDarkMode 
    ? "text-gray-400" 
    : "text-gray-600";
  
  const featureBgClass = isDarkMode 
    ? "bg-gray-800/20 hover:bg-gray-800/30" 
    : "bg-gray-200/30 hover:bg-gray-200/50";
  
  const featureTitleClass = isDarkMode 
    ? "text-gray-200" 
    : "text-gray-800";
  
  const featureDescClass = isDarkMode 
    ? "text-gray-400" 
    : "text-gray-600";
  
  const statLabelClass = isDarkMode 
    ? "text-gray-400" 
    : "text-gray-600";
  
  const dividerClass = isDarkMode 
    ? "border-gray-800" 
    : "border-gray-200";

  return (
    <div className={`group relative w-full ${cardBgClass} p-4 md:p-8 rounded-2xl border hover:border-indigo-500/50 transition-all overflow-hidden`}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/0 via-indigo-600/5 to-indigo-600/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-indigo-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6 md:mb-8">
          <div className="p-3 bg-indigo-600/10 rounded-xl">
            <Bot className="text-indigo-400" size={28} />
          </div>
          <div>
            <h2 className={`text-xl md:text-2xl font-bold ${titleClass} mb-2`}>
              {title}
            </h2>
            <p className={descriptionClass}>{description}</p>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-6 mb-6 md:mb-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`flex-1 group/feature ${featureBgClass} rounded-xl p-4 md:p-6 transition-all mb-4 md:mb-0`}
            >
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <div className="p-2 bg-indigo-600/10 rounded-xl group-hover/feature:bg-indigo-600/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className={`font-semibold ${featureTitleClass}`}>
                  {feature.title}
                </h3>
              </div>
              <p className={`${featureDescClass} text-sm leading-relaxed`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats and CTA */}
        <div className={`flex flex-col md:flex-row items-center justify-between pt-4 md:pt-6 border-t ${dividerClass}`}>
          <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-12 mb-6 md:mb-0 w-full md:w-auto">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-indigo-400">
                {stats.users}
              </div>
              <div className={`text-xs md:text-sm ${statLabelClass}`}>
                Active Users
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-indigo-400">
                {stats.accuracy}
              </div>
              <div className={`text-xs md:text-sm ${statLabelClass}`}>
                Task Accuracy
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-indigo-400">
                {stats.enterprises}
              </div>
              <div className={`text-xs md:text-sm ${statLabelClass}`}>
                Enterprises
              </div>
            </div>
          </div>

          <button className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 px-4 md:px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-all group-hover:shadow-lg group-hover:shadow-indigo-600/20 text-white">
            {cta}
            <Bot size={18} className="text-indigo-200" />
          </button>
        </div>
      </div>
    </div>
  );
}