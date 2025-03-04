"use client";
import React from "react";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  description: string;
  price: {
    monthly: string;
    annual: string;
  };
  features: string[];
  cta: string;
  popular?: boolean;
  isDarkMode: boolean;
  annual: boolean;
}

export default function PricingCard({
  title,
  description,
  price,
  features,
  cta,
  popular = false,
  isDarkMode,
  annual
}: PricingCardProps) {
  // Dynamic styles based on theme
  const cardBgClass = isDarkMode 
    ? "bg-gradient-to-br from-gray-900 to-gray-900/50 border-gray-800" 
    : "bg-gradient-to-br from-white to-gray-50 border-gray-200";
  
  const cardHighlightClass = isDarkMode 
    ? "border-indigo-500 ring-1 ring-indigo-500/30" 
    : "border-indigo-500 ring-1 ring-indigo-500/30";
  
  const titleClass = isDarkMode 
    ? "text-gray-100" 
    : "text-gray-800";
  
  const descriptionClass = isDarkMode 
    ? "text-gray-400" 
    : "text-gray-600";
  
  const priceClass = isDarkMode 
    ? "text-gray-100" 
    : "text-gray-800";
  
  const featureItemClass = isDarkMode 
    ? "text-gray-300" 
    : "text-gray-700";
  
  const featureIconClass = isDarkMode 
    ? "bg-indigo-900/40 text-indigo-400" 
    : "bg-indigo-100 text-indigo-600";

  const ctaClass = popular
    ? "bg-indigo-600 hover:bg-indigo-700 text-white"
    : isDarkMode
      ? "bg-gray-800 hover:bg-gray-700 text-gray-100"
      : "bg-white hover:bg-gray-50 text-indigo-600 border border-gray-200";

  const popularBadgeClass = isDarkMode
    ? "bg-indigo-900/60 text-indigo-300"
    : "bg-indigo-100 text-indigo-600";

  // Calculate displayed price
  const displayPrice = annual ? price.annual : price.monthly;
  const billingPeriod = annual ? "/année" : "/mois";
  const billingPeriodEn = annual ? "/year" : "/month";

  return (
    <div className={`rounded-2xl p-6 border ${popular ? cardHighlightClass : cardBgClass} transition-all relative flex flex-col h-full ${popular ? "transform-gpu -translate-y-2 md:-translate-y-4" : ""}`}>
      {popular && (
        <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${popularBadgeClass} px-3 py-1 rounded-full text-xs font-semibold`}>
          Plus Populaire
        </div>
      )}
      
      <div className="mb-6">
        <h3 className={`text-xl font-bold mb-2 ${titleClass}`}>{title}</h3>
        <p className={`text-sm ${descriptionClass}`}>{description}</p>
      </div>
      
      <div className="mb-6">
        <div className="flex items-end gap-2">
          <span className={`text-3xl font-bold ${priceClass}`}>{displayPrice}</span>
          <span className={`text-sm ${descriptionClass}`}>{billingPeriod}</span>
        </div>
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className={`p-0.5 rounded-full ${featureIconClass} flex-shrink-0 mt-1`}>
              <Check size={12} />
            </div>
            <span className={`text-sm ${featureItemClass}`}>{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className={`w-full py-3 rounded-full font-medium transition-all ${ctaClass}`}>
        {cta}
      </button>
    </div>
  );
}