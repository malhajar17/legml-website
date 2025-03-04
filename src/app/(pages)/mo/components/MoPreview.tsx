"use client";
import React from "react";
import { Mic, MicOff, PhoneCall, Video } from "lucide-react";
import MoLogo from "@/app/components/ui/MoLogo";

interface MoPreviewProps {
  language: "fr" | "en";
  isDarkMode: boolean;
}

export default function MoPreview({ language, isDarkMode }: MoPreviewProps) {
  // Dynamic styles based on theme
  const sectionBgClass = isDarkMode 
    ? "bg-gray-900/30" 
    : "bg-gray-50/80";
  
  const containerBgClass = isDarkMode 
    ? "bg-gray-900/60 border-gray-800" 
    : "bg-white border-gray-200";
  
  const highlightBgClass = isDarkMode 
    ? "bg-[#182b5a]/20" 
    : "bg-[#182b5a]/10";
  
  const textHighlightClass = isDarkMode 
    ? "text-indigo-400" 
    : "text-[#182b5a]";
  
  const participantBgClass = isDarkMode 
    ? "bg-gray-800" 
    : "bg-gray-100";
  
  const buttonBgClass = isDarkMode 
    ? "bg-gray-800 hover:bg-gray-700" 
    : "bg-gray-100 hover:bg-gray-200";
  
  const activeButtonClass = "bg-[#182b5a] text-white hover:bg-[#0f1d3d]";
  
  const translationText = language === "fr" 
    ? "Traduction en direct : Français → Anglais" 
    : "Live translation: English → French";

  return (
    <section className={`${sectionBgClass} py-16 px-4`}>
      <div className="max-w-4xl mx-auto">
        <div className={`${containerBgClass} border rounded-2xl overflow-hidden shadow-xl`}>
          {/* Teams Call Interface */}
          <div className="p-4 md:p-6">
            {/* Call Header */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-700/30">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-[#182b5a] w-8 h-8 flex items-center justify-center text-white font-bold">
                  <span className="text-xs">Mo'</span>
                </div>
                <div>
                  <h3 className={`font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                    {language === "fr" ? "Appel international" : "International call"}
                  </h3>
                </div>
              </div>
              
              <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${highlightBgClass}`}>
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#182b5a]"></span>
                </div>
                <span className={`text-xs font-medium ${textHighlightClass}`}>
                  {translationText}
                </span>
              </div>
            </div>
            
            {/* Call Content */}
            <div className="py-6">
              {/* Mo logo and status */}
              <div className="flex justify-center mb-6">
                <div className="text-center">
                  <MoLogo width={80} height={80} />
                  <p className={`mt-2 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                    {language === "fr" ? "Traduction active" : "Translation active"}
                  </p>
                </div>
              </div>
              
              {/* Call Participants */}
              <div className="grid grid-cols-2 gap-4">
                {/* User 1 - French */}
                <div className={`${participantBgClass} rounded-xl overflow-hidden`}>
                  <div className="p-3 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-blue-600 w-8 h-8 flex items-center justify-center text-white font-bold">
                        S
                      </div>
                      <div>
                        <p className={`text-sm font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                          Sophie
                        </p>
                        <p className={`text-xs ${textHighlightClass}`}>
                          {language === "fr" ? "Français" : "French"}
                        </p>
                      </div>
                    </div>
                    <button className={`p-1.5 rounded-full ${activeButtonClass}`}>
                      <Mic size={14} className="text-white" />
                    </button>
                  </div>
                </div>
                
                {/* User 2 - English */}
                <div className={`${participantBgClass} rounded-xl overflow-hidden`}>
                  <div className="p-3 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-green-600 w-8 h-8 flex items-center justify-center text-white font-bold">
                        M
                      </div>
                      <div>
                        <p className={`text-sm font-medium ${isDarkMode ? "text-white" : "text-gray-800"}`}>
                          Maria
                        </p>
                        <p className={`text-xs ${textHighlightClass}`}>
                          {language === "fr" ? "Anglais" : "English"}
                        </p>
                      </div>
                    </div>
                    <button className={`p-1.5 rounded-full ${buttonBgClass}`}>
                      <MicOff size={14} className={isDarkMode ? "text-gray-400" : "text-gray-600"} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call Controls */}
            <div className="flex justify-center gap-3 py-4 border-t border-gray-700/30">
              <button className={`p-3 rounded-full ${activeButtonClass}`}>
                <Mic size={16} className="text-white" />
              </button>
              <button className={`p-3 rounded-full ${buttonBgClass}`}>
                <Video size={16} className={isDarkMode ? "text-gray-400" : "text-gray-600"} />
              </button>
              <button className="p-3 rounded-full bg-red-600 hover:bg-red-700 transition-colors text-white">
                <PhoneCall size={16} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Caption */}
        <p className={`text-center mt-4 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
          {language === "fr" 
            ? "Mo' traduit instantanément les conversations pour tous les participants de l'appel" 
            : "Mo' instantly translates conversations for all call participants"}
        </p>
      </div>
    </section>
  );
}