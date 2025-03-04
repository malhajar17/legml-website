"use client";
import React from "react";
import { MessageSquare, Users, Building, ArrowRight } from "lucide-react";

interface CustomQuoteProps {
  language: "fr" | "en";
  isDarkMode: boolean;
}

export default function CustomQuote({ language, isDarkMode }: CustomQuoteProps) {
  // Section content
  const title = language === "fr" 
    ? "Besoin d'une Solution sur Mesure ?" 
    : "Need a Custom Solution?";
    
  const description = language === "fr"
    ? "Notre équipe d'experts peut créer une solution adaptée spécifiquement aux besoins de votre entreprise."
    : "Our team of experts can create a solution specifically tailored to your company's needs.";
  
  const cta = language === "fr" 
    ? "Obtenir un Devis Personnalisé" 
    : "Get a Custom Quote";
  
  const useCases = language === "fr"
    ? [
        {
          icon: <MessageSquare className="text-indigo-500" size={24} />,
          title: "Service Client",
          description: "Automatisez jusqu'à 80% de vos requêtes de service client avec des réponses précises, en français."
        },
        {
          icon: <Users className="text-indigo-500" size={24} />,
          title: "Ressources Humaines",
          description: "Améliorez vos processus RH avec une IA qui comprend le contexte juridique français."
        },
        {
          icon: <Building className="text-indigo-500" size={24} />,
          title: "Conformité Légale",
          description: "Analysez les documents juridiques et assurez la conformité avec les réglementations françaises."
        }
      ]
    : [
        {
          icon: <MessageSquare className="text-indigo-500" size={24} />,
          title: "Customer Service",
          description: "Automate up to 80% of your customer service requests with accurate responses in French."
        },
        {
          icon: <Users className="text-indigo-500" size={24} />,
          title: "Human Resources",
          description: "Enhance your HR processes with an AI that understands the French legal context."
        },
        {
          icon: <Building className="text-indigo-500" size={24} />,
          title: "Legal Compliance",
          description: "Analyze legal documents and ensure compliance with French regulations."
        }
      ];
  
  // Dynamic styles based on theme
  const sectionBgClass = isDarkMode 
    ? "bg-gradient-to-br from-indigo-900/20 to-gray-900" 
    : "bg-gradient-to-br from-indigo-50 to-white";
  
  const cardBgClass = isDarkMode 
    ? "bg-gray-900/60 border-gray-800" 
    : "bg-white border-gray-200";
  
  const titleClass = isDarkMode 
    ? "text-gray-100" 
    : "text-gray-800";
  
  const descriptionClass = isDarkMode 
    ? "text-gray-300" 
    : "text-gray-600";
  
  const useCaseTitleClass = isDarkMode 
    ? "text-gray-200" 
    : "text-gray-800";
  
  const useCaseDescClass = isDarkMode 
    ? "text-gray-400" 
    : "text-gray-600";
  
  const ctaBgClass = isDarkMode
    ? "bg-indigo-600 hover:bg-indigo-700 text-white"
    : "bg-indigo-600 hover:bg-indigo-700 text-white";

  return (
    <section className={`${sectionBgClass} py-16 md:py-24 px-4`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Left: Info */}
          <div className="md:col-span-1">
            <h2 className={`text-2xl md:text-3xl font-bold ${titleClass} mb-4`}>
              {title}
            </h2>
            
            <p className={`${descriptionClass} mb-6 md:mb-8`}>
              {description}
            </p>
            
            <a
              href="#"
              className={`inline-flex items-center gap-2 ${ctaBgClass} px-6 py-3 rounded-full font-medium transition-all`}
            >
              {cta}
              <ArrowRight size={16} />
            </a>
          </div>
          
          {/* Right: Use Cases */}
          <div className="md:col-span-2">
            <div className={`border rounded-2xl p-6 md:p-8 ${cardBgClass}`}>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {useCases.map((useCase, index) => (
                  <div key={index}>
                    <div className="p-2 bg-indigo-600/10 rounded-xl inline-flex mb-3">
                      {useCase.icon}
                    </div>
                    <h3 className={`text-lg font-semibold mb-2 ${useCaseTitleClass}`}>
                      {useCase.title}
                    </h3>
                    <p className={`text-sm ${useCaseDescClass}`}>
                      {useCase.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}