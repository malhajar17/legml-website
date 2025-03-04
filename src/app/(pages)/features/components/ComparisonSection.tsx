"use client";
import React from "react";
import { BarChart3, Check, X } from "lucide-react";

interface ComparisonSectionProps {
  language: "fr" | "en";
  isDarkMode: boolean;
}

export default function ComparisonSection({ language, isDarkMode }: ComparisonSectionProps) {
  // Section content
  const title = language === "fr" 
    ? "Comment legml se Compare" 
    : "How legml Compares";
    
  const description = language === "fr"
    ? "Notre modèle surpasse les concurrents sur les métriques clés pour les entreprises françaises."
    : "Our model outperforms competitors on key metrics for French businesses.";
  
  const models = ["legml", "GPT-4", "Claude 3", "Mistral"];
  
  const features = language === "fr"
    ? [
        { name: "Précision en Français", legml: true, gpt: false, claude: false, mistral: true },
        { name: "Conformité RGPD", legml: true, gpt: false, claude: false, mistral: true },
        { name: "Contexte Juridique Français", legml: true, gpt: false, claude: false, mistral: false },
        { name: "Termes Techniques Français", legml: true, gpt: false, claude: false, mistral: true },
        { name: "Déploiement sur site", legml: true, gpt: false, claude: false, mistral: true },
        { name: "Traitement des Données en France", legml: true, gpt: false, claude: false, mistral: true },
        { name: "Fine-tuning Personnalisé", legml: true, gpt: true, claude: true, mistral: false },
        { name: "Support Entreprise Français", legml: true, gpt: false, claude: false, mistral: false }
      ]
    : [
        { name: "Accuracy in French", legml: true, gpt: false, claude: false, mistral: true },
        { name: "GDPR Compliance", legml: true, gpt: false, claude: false, mistral: true },
        { name: "French Legal Context", legml: true, gpt: false, claude: false, mistral: false },
        { name: "French Technical Terms", legml: true, gpt: false, claude: false, mistral: true },
        { name: "On-premise Deployment", legml: true, gpt: false, claude: false, mistral: true },
        { name: "Data Processing in France", legml: true, gpt: false, claude: false, mistral: true },
        { name: "Custom Fine-tuning", legml: true, gpt: true, claude: true, mistral: false },
        { name: "French Enterprise Support", legml: true, gpt: false, claude: false, mistral: false }
      ];
  
  // Dynamic styles based on theme
  const sectionClass = isDarkMode 
    ? "bg-gradient-to-b from-gray-900 to-gray-950" 
    : "bg-white";
  
  const titleClass = isDarkMode 
    ? "text-gray-100" 
    : "text-gray-800";
  
  const descriptionClass = isDarkMode 
    ? "text-gray-400" 
    : "text-gray-600";
  
  const tableHeadClass = isDarkMode 
    ? "bg-gray-800 text-gray-200" 
    : "bg-indigo-50 text-indigo-800";
  
  const tableBorderClass = isDarkMode 
    ? "border-gray-800" 
    : "border-gray-200";
  
  const rowBgEven = isDarkMode 
    ? "bg-gray-900/50" 
    : "bg-gray-50";
  
  const rowBgOdd = isDarkMode 
    ? "bg-transparent" 
    : "bg-white";
  
  const featureTextClass = isDarkMode 
    ? "text-gray-300" 
    : "text-gray-700";
  
  const checkClass = "text-green-500";
  const xClass = isDarkMode ? "text-gray-600" : "text-gray-400";

  return (
    <section className={`${sectionClass} py-16 md:py-24 px-4`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-12">
          <div className="p-3 bg-indigo-600/10 rounded-xl">
            <BarChart3 className="text-indigo-400" size={28} />
          </div>
          <div>
            <h2 className={`text-2xl md:text-3xl font-bold ${titleClass} mb-2`}>
              {title}
            </h2>
            <p className={descriptionClass}>{description}</p>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className={`w-full border-collapse border ${tableBorderClass} rounded-lg overflow-hidden`}>
            <thead className={tableHeadClass}>
              <tr>
                <th className="text-left py-4 px-4 font-semibold">{language === "fr" ? "Fonctionnalité" : "Feature"}</th>
                {models.map((model, index) => (
                  <th key={index} className="text-center py-4 px-4 font-semibold">
                    {model}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr 
                  key={index} 
                  className={`border-t ${tableBorderClass} ${index % 2 === 0 ? rowBgEven : rowBgOdd}`}
                >
                  <td className={`py-4 px-4 ${featureTextClass}`}>
                    {feature.name}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {feature.legml ? <Check className={checkClass} size={20} /> : <X className={xClass} size={20} />}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {feature.gpt ? <Check className={checkClass} size={20} /> : <X className={xClass} size={20} />}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {feature.claude ? <Check className={checkClass} size={20} /> : <X className={xClass} size={20} />}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {feature.mistral ? <Check className={checkClass} size={20} /> : <X className={xClass} size={20} />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}