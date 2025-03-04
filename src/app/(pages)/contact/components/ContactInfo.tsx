"use client";
import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface ContactInfoProps {
  language: "fr" | "en";
  isDarkMode: boolean;
}

export default function ContactInfo({ language, isDarkMode }: ContactInfoProps) {
  // Section content
  const title = language === "fr" 
    ? "Informations de Contact" 
    : "Contact Information";
    
  const contactItems = language === "fr"
    ? [
        {
          icon: <MapPin className="text-indigo-400" size={24} />,
          title: "Adresse",
          content: "25 Avenue des Champs-Élysées, 75008 Paris, France"
        },
        {
          icon: <Phone className="text-indigo-400" size={24} />,
          title: "Téléphone",
          content: "+33 1 23 45 67 89"
        },
        {
          icon: <Mail className="text-indigo-400" size={24} />,
          title: "Email",
          content: "contact@legml.ai"
        },
        {
          icon: <Clock className="text-indigo-400" size={24} />,
          title: "Heures de Bureau",
          content: "Lun-Ven: 9h00 - 18h00"
        }
      ]
    : [
        {
          icon: <MapPin className="text-indigo-400" size={24} />,
          title: "Address",
          content: "25 Avenue des Champs-Élysées, 75008 Paris, France"
        },
        {
          icon: <Phone className="text-indigo-400" size={24} />,
          title: "Phone",
          content: "+33 1 23 45 67 89"
        },
        {
          icon: <Mail className="text-indigo-400" size={24} />,
          title: "Email",
          content: "contact@legml.ai"
        },
        {
          icon: <Clock className="text-indigo-400" size={24} />,
          title: "Office Hours",
          content: "Mon-Fri: 9:00 AM - 6:00 PM"
        }
      ];
  
  // Dynamic styles based on theme
  const sectionBgClass = isDarkMode 
    ? "bg-gray-900/30" 
    : "bg-indigo-50/50";
  
  const titleClass = isDarkMode 
    ? "text-gray-100" 
    : "text-gray-800";
  
  const cardBgClass = isDarkMode 
    ? "bg-gray-900/50 border-gray-800" 
    : "bg-white border-gray-200";
  
  const itemTitleClass = isDarkMode 
    ? "text-gray-300" 
    : "text-gray-700";
  
  const itemContentClass = isDarkMode 
    ? "text-gray-400" 
    : "text-gray-600";

  return (
    <section className={`${sectionBgClass} py-16 px-4`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-2xl md:text-3xl font-bold ${titleClass} mb-8 md:mb-12 text-center`}>
          {title}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map((item, index) => (
            <div 
              key={index}
              className={`${cardBgClass} rounded-xl border p-6 text-center`}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-indigo-600/10 rounded-xl">
                  {item.icon}
                </div>
              </div>
              
              <h3 className={`text-lg font-semibold mb-2 ${itemTitleClass}`}>
                {item.title}
              </h3>
              
              <p className={`${itemContentClass}`}>
                {item.content}
              </p>
            </div>
          ))}
        </div>
        
        {/* Map Placeholder */}
        <div className={`mt-12 md:mt-16 h-80 rounded-xl overflow-hidden ${cardBgClass} border flex items-center justify-center`}>
          <p className={itemContentClass}>
            {language === "fr" 
              ? "Carte Google Maps sera intégrée ici" 
              : "Google Maps will be embedded here"}
          </p>
        </div>
      </div>
    </section>
  );
}