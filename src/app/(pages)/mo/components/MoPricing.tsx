"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";
import MoLogo from "@/app/components/ui/MoLogo";

interface MoPricingProps {
  language: "fr" | "en";
  isDarkMode: boolean;
}

export default function MoPricing({ language, isDarkMode }: MoPricingProps) {
  const [annual, setAnnual] = useState(true);
  
  // Content based on language
  const title = language === "fr" 
    ? "Plans Tarifaires" 
    : "Pricing Plans";
    
  const monthlyText = language === "fr" ? "Mensuel" : "Monthly";
  const annualText = language === "fr" ? "Annuel" : "Annual";
  const savingText = language === "fr" ? "-20%" : "-20%";
  
  const plans = language === "fr"
    ? [
        {
          title: "Démarrage",
          description: "Pour les petites équipes",
          price: {
            monthly: "12€",
            annual: "9,60€"
          },
          perUser: "utilisateur / mois",
          features: [
            "5 langues",
            "Traduction audio en temps réel",
            "Jusqu'à 25 utilisateurs",
            "Support par email"
          ],
          cta: "Essayer gratuitement",
          popular: false
        },
        {
          title: "Business",
          description: "Pour les équipes professionnelles",
          price: {
            monthly: "24€",
            annual: "19,20€"
          },
          perUser: "utilisateur / mois",
          features: [
            "15 langues",
            "Traduction audio optimisée",
            "Utilisateurs illimités",
            "Support prioritaire",
            "Vocabulaire personnalisé"
          ],
          cta: "Essayer gratuitement",
          popular: true
        },
        {
          title: "Entreprise",
          description: "Pour les grandes organisations",
          price: {
            monthly: "Contactez-nous",
            annual: "Contactez-nous"
          },
          perUser: "",
          features: [
            "Toutes les langues",
            "Traduction de haute précision",
            "Déploiement sur site ou cloud",
            "Support dédié 24/7",
            "Intégrations personnalisées"
          ],
          cta: "Contacter l'équipe",
          popular: false
        }
      ]
    : [
        {
          title: "Starter",
          description: "For small teams",
          price: {
            monthly: "$12",
            annual: "$9.60"
          },
          perUser: "per user / month",
          features: [
            "5 languages",
            "Real-time audio translation",
            "Up to 25 users",
            "Email support"
          ],
          cta: "Start free trial",
          popular: false
        },
        {
          title: "Business",
          description: "For professional teams",
          price: {
            monthly: "$24",
            annual: "$19.20"
          },
          perUser: "per user / month",
          features: [
            "15 languages",
            "Optimized audio translation",
            "Unlimited users",
            "Priority support",
            "Custom vocabulary"
          ],
          cta: "Start free trial",
          popular: true
        },
        {
          title: "Enterprise",
          description: "For large organizations",
          price: {
            monthly: "Contact us",
            annual: "Contact us"
          },
          perUser: "",
          features: [
            "All languages",
            "High-precision translation",
            "On-premise or cloud deployment",
            "Dedicated 24/7 support",
            "Custom integrations"
          ],
          cta: "Contact sales team",
          popular: false
        }
      ];
  
  // Dynamic styles based on theme
  const titleClass = isDarkMode 
    ? "text-gray-100" 
    : "text-gray-800";
  
  const toggleBgClass = isDarkMode 
    ? "bg-gray-800" 
    : "bg-gray-200";
  
  const toggleActiveClass = "bg-[#182b5a] text-white";
  const toggleInactiveClass = isDarkMode 
    ? "text-gray-400 hover:text-gray-300" 
    : "text-gray-600 hover:text-gray-800";
    
  const savingBgClass = isDarkMode
    ? "bg-[#182b5a]/30 text-indigo-300" 
    : "bg-[#182b5a]/10 text-[#182b5a]";
    
  const cardBgClass = isDarkMode 
    ? "bg-gray-900/50 border-gray-800" 
    : "bg-white border-gray-200";
  
  const cardHighlightClass = isDarkMode 
    ? "border-[#182b5a] ring-1 ring-[#182b5a]/30" 
    : "border-[#182b5a] ring-1 ring-[#182b5a]/30";
    
  const priceClass = isDarkMode 
    ? "text-gray-100" 
    : "text-gray-800";
    
  const perUserClass = isDarkMode 
    ? "text-gray-400" 
    : "text-gray-600";
    
  const featureItemClass = isDarkMode 
    ? "text-gray-300" 
    : "text-gray-700";
  
  const featureIconClass = isDarkMode 
    ? "bg-[#182b5a]/20 text-indigo-400" 
    : "bg-[#182b5a]/10 text-[#182b5a]";
    
  const ctaClass = "bg-[#182b5a] hover:bg-[#0f1d3d] text-white";
  const ctaOutlineClass = isDarkMode
    ? "bg-transparent hover:bg-gray-800 text-gray-100 border border-gray-700"
    : "bg-transparent hover:bg-gray-50 text-[#182b5a] border border-gray-200";
    
  const popularBadgeClass = isDarkMode
    ? "bg-[#182b5a]/40 text-indigo-300"
    : "bg-[#182b5a]/10 text-[#182b5a]";

  return (
    <section className="py-16 md:py-20 px-4" id="pricing">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <MoLogo width={60} height={60} />
          </div>
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${titleClass}`}>
            {title}
          </h2>
          
          {/* Toggle switch */}
          <div className="flex justify-center mb-8">
            <div className={`${toggleBgClass} p-1 rounded-full flex items-center`}>
              <button
                onClick={() => setAnnual(false)}
                className={`px-4 py-1.5 rounded-full transition-all ${annual ? toggleInactiveClass : toggleActiveClass}`}
              >
                {monthlyText}
              </button>
              
              <button
                onClick={() => setAnnual(true)}
                className={`px-4 py-1.5 rounded-full transition-all flex items-center gap-2 ${annual ? toggleActiveClass : toggleInactiveClass}`}
              >
                {annualText}
                <span className={`text-xs py-0.5 px-2 rounded-full ${savingBgClass}`}>
                  {savingText}
                </span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => {
            // Calculate displayed price
            const displayPrice = annual && plan.price.annual !== "Contactez-nous" && plan.price.annual !== "Contact us" 
              ? plan.price.annual 
              : plan.price.monthly;
              
            return (
              <div 
                key={index}
                className={`rounded-xl p-6 border ${plan.popular ? cardHighlightClass : cardBgClass} transition-all relative flex flex-col h-full ${plan.popular ? "transform-gpu -translate-y-2 md:-translate-y-4" : ""}`}
              >
                {plan.popular && (
                  <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${popularBadgeClass} px-3 py-1 rounded-full text-xs font-semibold`}>
                    {language === "fr" ? "Plus Populaire" : "Most Popular"}
                  </div>
                )}
                
                <div className="mb-4">
                  <h3 className={`text-xl font-bold mb-1 ${priceClass}`}>{plan.title}</h3>
                  <p className={`text-sm ${perUserClass}`}>{plan.description}</p>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-end gap-1">
                    <span className={`text-2xl font-bold ${priceClass}`}>{displayPrice}</span>
                    {plan.perUser && (
                      <span className={`text-sm ${perUserClass} mb-0.5`}>{plan.perUser}</span>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <div className={`p-0.5 rounded-full ${featureIconClass} flex-shrink-0 mt-1`}>
                        <Check size={10} />
                      </div>
                      <span className={`text-sm ${featureItemClass}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-2 rounded-full font-medium transition-all ${plan.popular ? ctaClass : ctaOutlineClass}`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}