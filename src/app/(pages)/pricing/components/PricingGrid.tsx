"use client";
import React, { useState } from "react";
import PricingCard from "./PricingCard";
import PriceToggle from "./PriceToggle";

interface PricingGridProps {
  language: "fr" | "en";
  isDarkMode: boolean;
}

export default function PricingGrid({ language, isDarkMode }: PricingGridProps) {
  const [annual, setAnnual] = useState(true);
  
  // Pricing plans content
  const plans = language === "fr" 
    ? [
        {
          title: "Démarrage",
          description: "Parfait pour les petites équipes et les startups",
          price: {
            monthly: "499€",
            annual: "399€"
          },
          features: [
            "5 millions de tokens / mois",
            "Modèle standard",
            "Support par email",
            "Context window limité",
            "API REST",
            "Documentation complète"
          ],
          cta: "Commencer Gratuitement",
          popular: false
        },
        {
          title: "Professionnel",
          description: "Pour les équipes en croissance avec des besoins avancés",
          price: {
            monthly: "999€",
            annual: "799€"
          },
          features: [
            "25 millions de tokens / mois",
            "Modèle optimisé",
            "Support prioritaire",
            "Context window étendu",
            "API REST & SDK",
            "Intégration personnalisée",
            "Formation de base"
          ],
          cta: "Sélectionner ce Plan",
          popular: true
        },
        {
          title: "Entreprise",
          description: "Solution complète pour les grandes organisations",
          price: {
            monthly: "Sur mesure",
            annual: "Sur mesure"
          },
          features: [
            "Tokens illimités",
            "Modèle personnalisé",
            "Support dédié 24/7",
            "Context window maximal",
            "Déploiement sur site",
            "Conformité RGPD avancée",
            "Formation complète",
            "SLA garantie"
          ],
          cta: "Contacter l'équipe",
          popular: false
        }
      ]
    : [
        {
          title: "Starter",
          description: "Perfect for small teams and startups",
          price: {
            monthly: "€499",
            annual: "€399"
          },
          features: [
            "5 million tokens / month",
            "Standard model",
            "Email support",
            "Limited context window",
            "REST API",
            "Complete documentation"
          ],
          cta: "Start for Free",
          popular: false
        },
        {
          title: "Professional",
          description: "For growing teams with advanced needs",
          price: {
            monthly: "€999",
            annual: "€799"
          },
          features: [
            "25 million tokens / month",
            "Optimized model",
            "Priority support",
            "Extended context window",
            "REST API & SDK",
            "Custom integration",
            "Basic training"
          ],
          cta: "Select This Plan",
          popular: true
        },
        {
          title: "Enterprise",
          description: "Complete solution for large organizations",
          price: {
            monthly: "Custom",
            annual: "Custom"
          },
          features: [
            "Unlimited tokens",
            "Custom model",
            "Dedicated 24/7 support",
            "Maximum context window",
            "On-premise deployment",
            "Advanced GDPR compliance",
            "Complete training",
            "SLA guarantee"
          ],
          cta: "Contact Sales",
          popular: false
        }
      ];
  
  return (
    <section className="max-w-6xl mx-auto px-4 pb-16 md:pb-24">
      <PriceToggle 
        annual={annual} 
        setAnnual={setAnnual} 
        language={language}
        isDarkMode={isDarkMode}
      />
      
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            description={plan.description}
            price={plan.price}
            features={plan.features}
            cta={plan.cta}
            popular={plan.popular}
            isDarkMode={isDarkMode}
            annual={annual}
          />
        ))}
      </div>
    </section>
  );
}