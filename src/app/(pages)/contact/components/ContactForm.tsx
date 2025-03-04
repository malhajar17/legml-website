"use client";
import React, { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

interface ContactFormProps {
  language: "fr" | "en";
  isDarkMode: boolean;
}

export default function ContactForm({ language, isDarkMode }: ContactFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Form field contents
  const nameLabel = language === "fr" ? "Nom complet" : "Full name";
  const emailLabel = language === "fr" ? "Adresse email" : "Email address";
  const companyLabel = language === "fr" ? "Entreprise" : "Company";
  const subjectLabel = language === "fr" ? "Sujet" : "Subject";
  const messageLabel = language === "fr" ? "Message" : "Message";
  const submitButtonText = language === "fr" ? "Envoyer le message" : "Send message";
  const successTitle = language === "fr" ? "Message Envoyé!" : "Message Sent!";
  const successMessage = language === "fr" 
    ? "Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais."
    : "Thank you for contacting us. Our team will get back to you shortly.";
  
  // Subject options
  const subjectOptions = language === "fr"
    ? [
        "Choisissez un sujet",
        "Demande de démo",
        "Support technique",
        "Tarification",
        "Partenariat",
        "Autre"
      ]
    : [
        "Choose a subject",
        "Demo request",
        "Technical support",
        "Pricing",
        "Partnership",
        "Other"
      ];
  
  // Dynamic styles based on theme
  const cardBgClass = isDarkMode 
    ? "bg-gray-900/50 border-gray-800" 
    : "bg-white border-gray-200";
  
  const labelClass = isDarkMode 
    ? "text-gray-300" 
    : "text-gray-700";
  
  const inputBgClass = isDarkMode 
    ? "bg-gray-800/50 border-gray-700 text-gray-200 placeholder-gray-500" 
    : "bg-gray-50 border-gray-200 text-gray-800 placeholder-gray-400";
  
  const buttonClass = isDarkMode
    ? "bg-indigo-600 hover:bg-indigo-700 text-white"
    : "bg-indigo-600 hover:bg-indigo-700 text-white";
  
  const successBgClass = isDarkMode
    ? "bg-indigo-900/20"
    : "bg-indigo-50";
  
  const successTextClass = isDarkMode
    ? "text-gray-200"
    : "text-gray-800";
  
  const successDescClass = isDarkMode
    ? "text-gray-400"
    : "text-gray-600";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would handle the form submission here
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={`max-w-3xl mx-auto px-4 pb-16 md:pb-24`}>
        <div className={`${successBgClass} rounded-2xl p-8 md:p-12 text-center`}>
          <div className="inline-flex justify-center mb-6">
            <CheckCircle size={64} className="text-green-500" />
          </div>
          
          <h2 className={`text-2xl md:text-3xl font-bold ${successTextClass} mb-4`}>
            {successTitle}
          </h2>
          
          <p className={`${successDescClass} text-lg mb-8`}>
            {successMessage}
          </p>
          
          <button
            onClick={() => setIsSubmitted(false)}
            className={buttonClass + " px-6 py-3 rounded-full font-medium"}
          >
            {language === "fr" ? "Envoyer un autre message" : "Send another message"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 pb-16 md:pb-24">
      <form 
        onSubmit={handleSubmit}
        className={`${cardBgClass} rounded-2xl border p-6 md:p-8`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Name */}
          <div>
            <label className={`block ${labelClass} text-sm font-medium mb-2`}>
              {nameLabel} *
            </label>
            <input 
              type="text" 
              required
              className={`w-full px-4 py-3 rounded-lg ${inputBgClass} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
          </div>
          
          {/* Email */}
          <div>
            <label className={`block ${labelClass} text-sm font-medium mb-2`}>
              {emailLabel} *
            </label>
            <input 
              type="email" 
              required
              className={`w-full px-4 py-3 rounded-lg ${inputBgClass} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
          </div>
          
          {/* Company */}
          <div>
            <label className={`block ${labelClass} text-sm font-medium mb-2`}>
              {companyLabel}
            </label>
            <input 
              type="text"
              className={`w-full px-4 py-3 rounded-lg ${inputBgClass} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
          </div>
          
          {/* Subject */}
          <div>
            <label className={`block ${labelClass} text-sm font-medium mb-2`}>
              {subjectLabel} *
            </label>
            <select 
              required
              className={`w-full px-4 py-3 rounded-lg ${inputBgClass} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            >
              {subjectOptions.map((option, index) => (
                <option key={index} value={index === 0 ? "" : option} disabled={index === 0}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Message */}
        <div className="mb-6">
          <label className={`block ${labelClass} text-sm font-medium mb-2`}>
            {messageLabel} *
          </label>
          <textarea 
            required
            rows={6}
            className={`w-full px-4 py-3 rounded-lg ${inputBgClass} focus:outline-none focus:ring-2 focus:ring-indigo-500`}
          ></textarea>
        </div>
        
        {/* Submit Button */}
        <button
          type="submit"
          className={`${buttonClass} w-full md:w-auto px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2`}
        >
          {submitButtonText}
          <Send size={16} />
        </button>
      </form>
    </div>
  );
}