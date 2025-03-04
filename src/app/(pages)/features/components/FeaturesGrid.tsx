"use client";
import React from "react";
import { Shield, Globe, Zap, BarChart4, BrainCircuit, Database, Clock, FileCode } from "lucide-react";
import FeatureCard from "./FeatureCard";

interface FeaturesGridProps {
  language: "fr" | "en";
  isDarkMode: boolean;
}

export default function FeaturesGrid({ language, isDarkMode }: FeaturesGridProps) {
  // Features content
  const features = language === "fr" 
    ? [
        {
          icon: <Shield className="text-indigo-500" size={24} />,
          title: "Sécurité Souveraine",
          description: "Traitement des données en France avec conformité GDPR et protocoles de sécurité de niveau militaire."
        },
        {
          icon: <Globe className="text-indigo-500" size={24} />,
          title: "Expertise Française",
          description: "Modèle entraîné spécifiquement sur le français, comprenant les nuances culturelles et linguistiques."
        },
        {
          icon: <Zap className="text-indigo-500" size={24} />,
          title: "Performance Accélérée",
          description: "Optimisé pour une vitesse exceptionnelle même avec des demandes complexes et de grands volumes de données."
        },
        {
          icon: <BarChart4 className="text-indigo-500" size={24} />,
          title: "Analyse Avancée",
          description: "Analyse de documents juridiques et financiers avec précision, extrayant des insights pertinents."
        },
        {
          icon: <BrainCircuit className="text-indigo-500" size={24} />,
          title: "Intelligence Contextuelle",
          description: "Comprend le contexte métier français pour générer des réponses précises et adaptées."
        },
        {
          icon: <Database className="text-indigo-500" size={24} />,
          title: "Intégration de Données",
          description: "Se connecte facilement à vos systèmes existants avec des API robustes et une documentation complète."
        },
        {
          icon: <Clock className="text-indigo-500" size={24} />,
          title: "Mises à Jour Continues",
          description: "Modèle constamment amélioré avec les dernières données et avancées technologiques."
        },
        {
          icon: <FileCode className="text-indigo-500" size={24} />,
          title: "Personnalisation Avancée",
          description: "Adaptable à vos besoins spécifiques avec des options de fine-tuning sur vos données propriétaires."
        }
      ]
    : [
        {
          icon: <Shield className="text-indigo-500" size={24} />,
          title: "Sovereign Security",
          description: "Data processing in France with GDPR compliance and military-grade security protocols."
        },
        {
          icon: <Globe className="text-indigo-500" size={24} />,
          title: "French Expertise",
          description: "Model specifically trained on French, understanding cultural and linguistic nuances."
        },
        {
          icon: <Zap className="text-indigo-500" size={24} />,
          title: "Accelerated Performance",
          description: "Optimized for exceptional speed even with complex requests and large data volumes."
        },
        {
          icon: <BarChart4 className="text-indigo-500" size={24} />,
          title: "Advanced Analysis",
          description: "Analysis of legal and financial documents with precision, extracting relevant insights."
        },
        {
          icon: <BrainCircuit className="text-indigo-500" size={24} />,
          title: "Contextual Intelligence",
          description: "Understands French business context to generate accurate and adapted responses."
        },
        {
          icon: <Database className="text-indigo-500" size={24} />,
          title: "Data Integration",
          description: "Easily connects to your existing systems with robust APIs and comprehensive documentation."
        },
        {
          icon: <Clock className="text-indigo-500" size={24} />,
          title: "Continuous Updates",
          description: "Model constantly improved with the latest data and technological advances."
        },
        {
          icon: <FileCode className="text-indigo-500" size={24} />,
          title: "Advanced Customization",
          description: "Adaptable to your specific needs with fine-tuning options on your proprietary data."
        }
      ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </section>
  );
}