"use client";
import React from "react";
import Image from "next/image";

interface FounderCardProps {
  name: string;
  position: string;
  linkText: string;
  linkUrl: string;
  imageUrl: string;
  isDarkMode: boolean;
}

export default function FounderCard({
  name,
  position,
  linkText,
  linkUrl,
  imageUrl,
  isDarkMode,
}: FounderCardProps) {
  // Dynamic styles based on theme
  const nameClass = isDarkMode 
    ? "text-gray-100" 
    : "text-gray-800";
  
  const positionClass = isDarkMode 
    ? "text-gray-400" 
    : "text-gray-600";
  
  const linkClass = isDarkMode 
    ? "text-indigo-400 hover:text-indigo-300" 
    : "text-indigo-600 hover:text-indigo-500";

  return (
    <div className="flex flex-col items-center mb-8 md:mb-0">
      <div className="w-16 h-16 md:w-20 md:h-20 overflow-hidden rounded-full mb-4">
        <Image
          src={imageUrl}
          alt={name}
          width={80}
          height={80}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className={`text-base md:text-lg font-semibold ${nameClass} mb-1`}>
        {name}
      </h3>
      <p className={`text-xs md:text-sm ${positionClass} mb-2`}>{position}</p>
      <a
        href={linkUrl}
        className={`text-xs md:text-sm ${linkClass} transition-colors`}
        target="_blank" 
        rel="noopener noreferrer"
      >
        {linkText}
      </a>
    </div>
  );
}