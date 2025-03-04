"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  slug: string;
  imageSrc: string;
  isDarkMode: boolean;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  author,
  category,
  slug,
  imageSrc,
  isDarkMode
}: BlogCardProps) {
  // Dynamic styles based on theme
  const cardBgClass = isDarkMode 
    ? "bg-gray-900/50 border-gray-800" 
    : "bg-white border-gray-200";
  
  const titleClass = isDarkMode 
    ? "text-gray-100" 
    : "text-gray-800";
  
  const categoryClass = isDarkMode 
    ? "bg-indigo-900/40 text-indigo-300" 
    : "bg-indigo-100 text-indigo-700";
  
  const excerptClass = isDarkMode 
    ? "text-gray-400" 
    : "text-gray-600";
  
  const metaClass = isDarkMode 
    ? "text-gray-500" 
    : "text-gray-500";
  
  const readMoreClass = isDarkMode
    ? "text-indigo-400 hover:text-indigo-300"
    : "text-indigo-600 hover:text-indigo-500";

  return (
    <article className={`rounded-2xl border ${cardBgClass} overflow-hidden flex flex-col h-full transition-all hover:border-indigo-500/30 hover:shadow-lg group`}>
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={200}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${categoryClass}`}>
            {category}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 flex flex-col h-full">
        <h3 className={`text-xl font-semibold mb-3 ${titleClass}`}>
          {title}
        </h3>
        
        <p className={`text-sm ${excerptClass} mb-4 flex-grow`}>
          {excerpt}
        </p>
        
        <div className="mt-auto">
          <div className={`flex justify-between items-center text-xs ${metaClass} mb-3`}>
            <span>{author}</span>
            <span>{date}</span>
          </div>
          
          <a
            href={`/blog/${slug}`}
            className={`text-sm font-medium flex items-center gap-1 ${readMoreClass} transition-colors`}
          >
            Lire la suite <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}