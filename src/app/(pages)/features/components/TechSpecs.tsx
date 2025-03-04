"use client";
import React from "react";
import { Bot } from "lucide-react";

interface TechSpecsProps {
  language: "fr" | "en";
  isDarkMode: boolean;
}

export default function TechSpecs({ language, isDarkMode }: TechSpecsProps) {
  // Section content
  const title = language === "fr" 
    ? "Spécifications Techniques" 
    : "Technical Specifications";
    
  const description = language === "fr"
    ? "Notre large modèle de langue est construit sur une architecture de pointe pour des performances optimales."
    : "Our large language model is built on cutting-edge architecture for optimal performance.";
  
  const specs = language === "fr"
    ? [
        { name: "Architecture", value: "Transformer Hybride" },
        { name: "Paramètres", value: "75 milliards" },
        { name: "Context Window", value: "32K tokens" },
        { name: "Taille de Vocabulaire", value: "250K tokens" },
        { name: "Langues", value: "Français (natif), Anglais, Allemand, Espagnol, Italien" },
        { name: "Format d'Entrainement", value: "Pré-entraînement + RLHF" },
        { name: "Options de Déploiement", value: "Cloud, On-premise, API" },
        { name: "Temps de Réponse", value: "< 100ms (médiane)" }
      ]
    : [
        { name: "Architecture", value: "Hybrid Transformer" },
        { name: "Parameters", value: "75 billion" },
        { name: "Context Window", value: "32K tokens" },
        { name: "Vocabulary Size", value: "250K tokens" },
        { name: "Languages", value: "French (native), English, German, Spanish, Italian" },
        { name: "Training Format", value: "Pre-training + RLHF" },
        { name: "Deployment Options", value: "Cloud, On-premise, API" },
        { name: "Response Time", value: "< 100ms (median)" }
      ];
  
  // Dynamic styles based on theme
  const sectionBgClass = isDarkMode 
    ? "bg-gray-900/40" 
    : "bg-indigo-50/50";
  
  const titleClass = isDarkMode 
    ? "text-gray-100" 
    : "text-gray-800";
  
  const descriptionClass = isDarkMode 
    ? "text-gray-400" 
    : "text-gray-600";
  
  const itemBorderClass = isDarkMode 
    ? "border-gray-800" 
    : "border-indigo-100";
  
  const nameClass = isDarkMode 
    ? "text-gray-400" 
    : "text-gray-500";
  
  const valueClass = isDarkMode 
    ? "text-indigo-300" 
    : "text-indigo-700";

  return (
    <section className={`${sectionBgClass} py-16 md:py-24 px-4`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-12">
          <div className="p-3 bg-indigo-600/10 rounded-xl">
            <Bot className="text-indigo-400" size={28} />
          </div>
          <div>
            <h2 className={`text-2xl md:text-3xl font-bold ${titleClass} mb-2`}>
              {title}
            </h2>
            <p className={descriptionClass}>{description}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, index) => (
            <div 
              key={index} 
              className={`p-5 border rounded-xl ${itemBorderClass} bg-gradient-to-br ${
                isDarkMode ? 'from-gray-900 to-gray-800/50' : 'from-white to-gray-50'
              }`}
            >
              <div className={`text-sm font-medium mb-1 ${nameClass}`}>
                {spec.name}
              </div>
              <div className={`text-lg font-semibold ${valueClass}`}>
                {spec.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}