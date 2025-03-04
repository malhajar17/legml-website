"use client";
import React from "react";
import { Sparkles, BarChart3 } from "lucide-react";
import ProductCard from "@/app/components/ui/ProductCard";
import { translations } from "@/app/lib/translations";
import MoLogo from "@/app/components/ui/MoLogo";

interface ProductsProps {
  language: "fr" | "en";
  isDarkMode: boolean;
}

export default function Products({ language, isDarkMode }: ProductsProps) {
    const t = translations[language];
  
    const moProduct = language === "fr"
    ? {
        title: "Mo'",
        description: "Traduction audio en temps réel pour les appels Microsoft Teams",
        metrics: [
          "Traduction instantanée dans 30+ langues",
          "Intégration native avec Teams",
          "Traduction d'appels audio en temps réel",
          "Idéal pour les équipes internationales"
        ]
      }
    : {
        title: "Mo'",
        description: "Real-time audio translation for Microsoft Teams calls",
        metrics: [
          "Instant translation in 30+ languages",
          "Native integration with Teams",
          "Real-time call audio translation",
          "Perfect for international teams"
        ]
      };
  
    return (
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch">
          {/* LEGML card -> Hugging Face link */}
          <ProductCard
            icon={Sparkles}
            title={t.products.legml.title}
            description={t.products.legml.description}
            metrics={t.products.legml.metrics}
            linkUrl="https://huggingface.co/legmlai/legml-v0.1"
            isDarkMode={isDarkMode}
          />
  
          {/* LE-LEADERBOARD card -> Hugging Face link */}
          <ProductCard
            icon={BarChart3}
            title={t.products.leaderboard.title}
            description={t.products.leaderboard.description}
            metrics={t.products.leaderboard.metrics}
            linkUrl="https://huggingface.co/le-leadboard"
            isDarkMode={isDarkMode}
          />
        </div>
        
        {/* Mo' Translation Bot */}
        <div className="mt-12">
          <h2 className={`text-2xl md:text-3xl font-bold mb-8 ${isDarkMode ? 'text-gray-100' : 'text-gray-800'} text-center`}>
            {language === "fr" ? "Produits Spécialisés" : "Specialized Products"}
          </h2>
          
          <div className="flex justify-center">
          <div className="w-full md:w-2/3">
            <ProductCard
              icon={() => <MoLogo width={24} height={24} />}
              title={moProduct.title}
              description={moProduct.description}
              metrics={moProduct.metrics}
              linkUrl="/mo"
              isDarkMode={isDarkMode}
            />
          </div>
          </div>
        </div>
      </section>
    );
}