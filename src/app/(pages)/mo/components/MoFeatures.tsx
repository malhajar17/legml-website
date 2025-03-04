"use client";
import React from "react";
import { Headphones, Zap, Volume2, Clock } from "lucide-react";
import MoLogo from "@/app/components/ui/MoLogo";

interface MoFeaturesProps {
  language: "fr" | "en";
  isDarkMode: boolean;
}

export default function MoFeatures({ language, isDarkMode }: MoFeaturesProps) {
  // Content based on language
  const title = language === "fr" 
    ? "Comment Ça Marche" 
    : "How It Works";
    
  const features = language === "fr"
    ? [
        {
          icon: <Headphones />,
          title: "Traduction Instantanée",
          description: "Traduit la voix en temps réel dans plus de 30 langues."
        },
        {
          icon: <Zap />,
          title: "Intégration Teams",
          description: "S'ajoute à vos appels en un clic, sans application externe."
        },
        {
          icon: <Volume2 />,
          title: "Multi-Langues",
          description: "Chaque participant entend la conversation dans sa langue."
        },
        {
          icon: <Clock />,
          title: "Zéro Délai",
          description: "Traduction si rapide que la conversation reste naturelle."
        }
      ]
    : [
        {
          icon: <Headphones />,
          title: "Instant Translation",
          description: "Translates voice in real-time across 30+ languages."
        },
        {
          icon: <Zap />,
          title: "Teams Integration",
          description: "Joins your calls with one click, no external apps."
        },
        {
          icon: <Volume2 />,
          title: "Multi-Language",
          description: "Each participant hears the conversation in their language."
        },
        {
          icon: <Clock />,
          title: "Zero Delay",
          description: "Translation so fast the conversation stays natural."
        }
      ];
      
  // Dynamic styles based on theme
  const titleClass = isDarkMode 
    ? "text-gray-100" 
    : "text-gray-800";
  
  const cardBgClass = isDarkMode 
    ? "bg-gray-900/50 border-gray-800" 
    : "bg-white border-gray-200";
  
  const featureTitleClass = isDarkMode 
    ? "text-gray-200" 
    : "text-gray-800";
  
  const featureDescClass = isDarkMode 
    ? "text-gray-400" 
    : "text-gray-600";
  
  const iconClass = isDarkMode
    ? "text-indigo-400"
    : "text-indigo-500";

  return (
    <section className="py-16 md:py-20 px-4" id="features">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <MoLogo width={60} height={60} />
          </div>
          <h2 className={`text-2xl md:text-3xl font-bold ${titleClass}`}>
            {title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`${cardBgClass} rounded-xl border p-6 hover:border-[#182b5a]/50 transition-all text-center`}
            >
              <div className="p-3 bg-[#182b5a]/10 rounded-xl inline-flex mb-4 mx-auto">
                <div className="text-[#182b5a]">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className={`text-lg font-semibold mb-2 ${featureTitleClass}`}>
                {feature.title}
              </h3>
              
              <p className={`text-sm ${featureDescClass}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}