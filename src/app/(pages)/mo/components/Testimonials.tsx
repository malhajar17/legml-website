"use client";
import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

interface TestimonialsProps {
  language: "fr" | "en";
  isDarkMode: boolean;
}

export default function Testimonials({ language, isDarkMode }: TestimonialsProps) {
  // Content based on language
  const title = language === "fr" 
    ? "Ce Que Nos Clients Disent" 
    : "What Our Customers Say";
    
  const testimonials = language === "fr"
    ? [
        {
          quote: "Mo' a complètement transformé nos conférences internationales. Nous pouvons désormais mener des appels directs avec nos équipes chinoises sans passer par un interprète.",
          author: "Marie Dupont",
          position: "Directrice des Opérations Internationales, Société Générale",
          avatar: "/api/placeholder/60/60"
        },
        {
          quote: "La qualité des traductions audio en temps réel est exceptionnelle. Même les termes techniques sont correctement traduits, ce qui est crucial dans notre secteur.",
          author: "Thomas Martin",
          position: "Chef de Projet IT, Renault Group",
          avatar: "/api/placeholder/60/60"
        },
        {
          quote: "Avant Mo', organiser des appels avec nos partenaires japonais était un véritable défi. Maintenant, nous communiquons sans effort, et la traduction instantanée nous fait gagner un temps précieux.",
          author: "Laure Girard",
          position: "Responsable R&D, L'Oréal",
          avatar: "/api/placeholder/60/60"
        }
      ]
    : [
        {
          quote: "Mo' has completely transformed our international conferences. We can now conduct direct calls with our Chinese teams without going through an interpreter.",
          author: "Marie Dupont",
          position: "Director of International Operations, Société Générale",
          avatar: "/api/placeholder/60/60"
        },
        {
          quote: "The quality of real-time audio translations is exceptional. Even technical terms are correctly translated, which is crucial in our industry.",
          author: "Thomas Martin",
          position: "IT Project Manager, Renault Group",
          avatar: "/api/placeholder/60/60"
        },
        {
          quote: "Before Mo', organizing calls with our Japanese partners was a real challenge. Now, we communicate effortlessly, and the instant translation saves us valuable time.",
          author: "Laure Girard",
          position: "R&D Manager, L'Oréal",
          avatar: "/api/placeholder/60/60"
        }
      ];
      
  // Dynamic styles based on theme
  const titleClass = isDarkMode 
    ? "text-gray-100" 
    : "text-gray-800";
  
  const cardBgClass = isDarkMode 
    ? "bg-gray-900/50 border-gray-800" 
    : "bg-white border-gray-200";
  
  const quoteClass = isDarkMode 
    ? "text-gray-300" 
    : "text-gray-700";
  
  const authorClass = isDarkMode 
    ? "text-white" 
    : "text-gray-900";
  
  const positionClass = isDarkMode 
    ? "text-gray-400" 
    : "text-gray-500";
  
  const quoteBgClass = isDarkMode
    ? "text-gray-700"
    : "text-gray-200";

  return (
    <section className="py-16 md:py-24 px-4" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-2xl md:text-4xl font-bold ${titleClass}`}>
            {title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`${cardBgClass} rounded-xl border p-6 md:p-8 relative`}
            >
              {/* Quote mark */}
              <div className={`absolute -top-4 -left-2 text-6xl ${quoteBgClass}`}>
                "
              </div>
              
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#FFC107" stroke="#FFC107" />
                ))}
              </div>
              
              {/* Quote */}
              <p className={`text-lg mb-6 relative z-10 ${quoteClass}`}>
                {testimonial.quote}
              </p>
              
              {/* Author */}
              <div className="flex items-center">
                <div className="rounded-full overflow-hidden h-12 w-12 mr-4">
                  <Image 
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    width={60}
                    height={60}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className={`font-medium ${authorClass}`}>{testimonial.author}</h4>
                  <p className={`text-sm ${positionClass}`}>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}