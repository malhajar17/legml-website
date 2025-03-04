"use client";
import React from "react";
import FounderCard from "@/app/components/ui/FounderCard";
import { translations } from "@/app/lib/translations";

interface FoundersProps {
  language: "fr" | "en";
  isDarkMode: boolean;
}

export default function Founders({ language, isDarkMode }: FoundersProps) {
  const t = translations[language];

  return (
    <section className="max-w-6xl mx-auto px-4 pb-16 md:pb-32">
      <div className="text-center mb-10 md:mb-16">
        <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${isDarkMode ? "" : "text-indigo-800"}`}>
          {t.founders.title}
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-16">
        {t.founders.members.map((founder, index) => (
          <FounderCard
            key={index}
            name={founder.name}
            position={founder.position}
            linkText={founder.linkText}
            linkUrl={founder.linkUrl}
            imageUrl={founder.imageUrl}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </section>
  );
}