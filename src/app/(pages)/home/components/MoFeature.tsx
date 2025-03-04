"use client";
import React from "react";
import { Globe, Zap, MessageSquare } from "lucide-react";
import MoSection from "@/app/components/ui/MoSection";
import { translations } from "@/app/lib/translations";

interface MoFeatureProps {
  language: "fr" | "en";
  isDarkMode: boolean;
}

export default function MoFeature({ language, isDarkMode }: MoFeatureProps) {
  const t = translations[language];

  // Build moFeatures with icons
  const moFeatures = t.mo.features.map((feature, index) => {
    const icons = [
      <Globe key="globe" className="text-indigo-500" size={24} />,
      <Zap key="zap" className="text-indigo-500" size={24} />,
      <MessageSquare key="message" className="text-indigo-500" size={24} />
    ];
    return { ...feature, icon: icons[index] };
  });

  return (
    <section id="mo-section" className="max-w-6xl mx-auto px-4 pb-12 md:pb-24">
      <MoSection
        title={t.mo.title}
        description={t.mo.description}
        features={moFeatures}
        cta={t.mo.cta}
        stats={t.mo.stats}
        isDarkMode={isDarkMode}
      />
    </section>
  );
}