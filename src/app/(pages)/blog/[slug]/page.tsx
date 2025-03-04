"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, Calendar, User, Tag, Share2 } from "lucide-react";
import { translations } from "@/app/lib/translations";
import Navbar from "@/app/components/layout/Navbar";
import MobileMenu from "@/app/components/layout/MobileMenu";
import Footer from "@/app/components/layout/Footer";
import Newsletter from "../components/Newsletter";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [language, setLanguage] = useState<"fr" | "en">("fr");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const t = translations[language];

  // Detect color scheme
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        setIsDarkMode(e.matches);
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  // For a real implementation, fetch the blog post data based on the slug
  // This is a mock post for demonstration
  const post = {
    title: language === "fr" 
      ? "Comment l'IA Française Révolutionne le Service Client" 
      : "How French AI is Revolutionizing Customer Service",
    date: language === "fr" ? "15 Mars 2025" : "March 15, 2025",
    author: "Alexandre Lavallee",
    category: language === "fr" ? "Études de Cas" : "Case Studies",
    imageSrc: "/api/placeholder/1200/600",
    content: language === "fr" 
      ? `
        <p>L'intelligence artificielle transforme rapidement la manière dont les entreprises interagissent avec leurs clients. En France, cette révolution prend une tournure unique, façonnée par les particularités culturelles, linguistiques et réglementaires du pays.</p>
        
        <h2>Une IA Véritablement Française</h2>
        
        <p>Contrairement aux systèmes d'IA génériques, les solutions développées spécifiquement pour le marché français offrent plusieurs avantages cruciaux :</p>
        
        <ul>
          <li><strong>Compréhension linguistique supérieure</strong> - Maîtrise des nuances, argot et expressions idiomatiques françaises</li>
          <li><strong>Conformité RGPD intégrée</strong> - Conception respectueuse de la vie privée dès le départ</li>
          <li><strong>Sensibilité culturelle</strong> - Adaptation aux attentes et normes françaises en matière de service client</li>
        </ul>
        
        <h2>Études de Cas Concrètes</h2>
        
        <p>Plusieurs entreprises françaises ont déjà adopté ces solutions avec des résultats impressionnants :</p>
        
        <h3>Carrefour</h3>
        <p>Le géant de la distribution a implémenté l'IA française pour gérer les demandes de service client, résultant en :</p>
        <ul>
          <li>Réduction de 45% du temps de réponse moyen</li>
          <li>Augmentation de 32% de la satisfaction client</li>
          <li>Traitement automatisé de 78% des demandes courantes</li>
        </ul>
        
        <h3>BNP Paribas</h3>
        <p>La banque a intégré des assistants virtuels basés sur l'IA française pour :</p>
        <ul>
          <li>Réduire les temps d'attente téléphoniques de 60%</li>
          <li>Offrir une assistance 24/7 pour les opérations bancaires courantes</li>
          <li>Maintenir une conformité totale avec les réglementations financières françaises</li>
        </ul>
        
        <h2>L'Avenir de l'IA Française dans le Service Client</h2>
        
        <p>Les innovations se poursuivent avec plusieurs développements prometteurs :</p>
        
        <ul>
          <li>Intégration omnicanale permettant une expérience cohérente à travers tous les points de contact</li>
          <li>Analyse émotionnelle pour une empathie artificielle plus authentique</li>
          <li>Solutions hybrides combinant IA et intervention humaine pour les situations complexes</li>
        </ul>
        
        <p>En conclusion, l'IA française ne se contente pas d'adopter les standards internationaux - elle établit de nouvelles références en matière de service client intelligent, adapté et respectueux des spécificités locales.</p>
      ` 
      : `
        <p>Artificial intelligence is rapidly transforming how businesses interact with their customers. In France, this revolution is taking a unique turn, shaped by the country's cultural, linguistic, and regulatory particularities.</p>
        
        <h2>A Truly French AI</h2>
        
        <p>Unlike generic AI systems, solutions developed specifically for the French market offer several crucial advantages:</p>
        
        <ul>
          <li><strong>Superior linguistic understanding</strong> - Mastery of French nuances, slang, and idiomatic expressions</li>
          <li><strong>Integrated GDPR compliance</strong> - Privacy-respecting design from the start</li>
          <li><strong>Cultural sensitivity</strong> - Adaptation to French expectations and norms in customer service</li>
        </ul>
        
        <h2>Concrete Case Studies</h2>
        
        <p>Several French companies have already adopted these solutions with impressive results:</p>
        
        <h3>Carrefour</h3>
        <p>The retail giant has implemented French AI to handle customer service requests, resulting in:</p>
        <ul>
          <li>45% reduction in average response time</li>
          <li>32% increase in customer satisfaction</li>
          <li>Automated processing of 78% of common requests</li>
        </ul>
        
        <h3>BNP Paribas</h3>
        <p>The bank has integrated virtual assistants based on French AI to:</p>
        <ul>
          <li>Reduce telephone waiting times by 60%</li>
          <li>Offer 24/7 assistance for common banking operations</li>
          <li>Maintain full compliance with French financial regulations</li>
        </ul>
        
        <h2>The Future of French AI in Customer Service</h2>
        
        <p>Innovations continue with several promising developments:</p>
        
        <ul>
          <li>Omnichannel integration allowing for a consistent experience across all contact points</li>
          <li>Emotional analysis for more authentic artificial empathy</li>
          <li>Hybrid solutions combining AI and human intervention for complex situations</li>
        </ul>
        
        <p>In conclusion, French AI is not just adopting international standards - it's setting new benchmarks for intelligent, adapted, and respectful customer service that addresses local specificities.</p>
      `
  };

  // Dynamic styles based on color mode
  const bgClass = isDarkMode 
    ? "bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" 
    : "bg-gradient-to-b from-indigo-50 via-white to-indigo-50";
  
  const textClass = isDarkMode 
    ? "text-white" 
    : "text-gray-800";
    
  const articleBgClass = isDarkMode 
    ? "bg-gray-900/50 border-gray-800" 
    : "bg-white border-gray-200";
    
  const headingClass = isDarkMode 
    ? "text-gray-100" 
    : "text-gray-800";
    
  const contentClass = isDarkMode 
    ? "text-gray-300" 
    : "text-gray-700";
    
  const metaTextClass = isDarkMode 
    ? "text-gray-400" 
    : "text-gray-500";
    
  const metaIconClass = isDarkMode 
    ? "text-gray-500" 
    : "text-gray-400";
    
  const buttonClass = isDarkMode
    ? "bg-gray-800 hover:bg-gray-700 text-gray-200"
    : "bg-gray-100 hover:bg-gray-200 text-gray-700";
    
  const tagClass = isDarkMode
    ? "bg-indigo-900/40 text-indigo-300"
    : "bg-indigo-100 text-indigo-700";

  return (
    <div className={`min-h-screen ${bgClass} ${textClass}`}>
      {/* MOBILE MENU */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        language={language}
        setLanguage={setLanguage}
        isDarkMode={isDarkMode}
      />

      {/* NAVBAR */}
      <Navbar
        language={language}
        setLanguage={setLanguage}
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
        isDarkMode={isDarkMode}
      />

      {/* ARTICLE CONTENT */}
      <main className="pt-28 md:pt-32 pb-16 md:pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <a
            href="/blog"
            className={`inline-flex items-center gap-2 mb-8 ${buttonClass} px-4 py-2 rounded-full text-sm`}
          >
            <ArrowLeft size={16} />
            {language === "fr" ? "Retour aux articles" : "Back to articles"}
          </a>
          
          {/* Article Container */}
          <article className={`${articleBgClass} rounded-2xl border p-6 md:p-8`}>
            {/* Title */}
            <h1 className={`text-2xl md:text-4xl font-bold ${headingClass} mb-6`}>
              {post.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className={`flex items-center gap-2 ${metaTextClass}`}>
                <Calendar size={16} className={metaIconClass} />
                <span>{post.date}</span>
              </div>
              
              <div className={`flex items-center gap-2 ${metaTextClass}`}>
                <User size={16} className={metaIconClass} />
                <span>{post.author}</span>
              </div>
              
              <div className={`flex items-center gap-2`}>
                <Tag size={16} className={metaIconClass} />
                <span className={`text-xs px-2 py-1 rounded-full ${tagClass}`}>
                  {post.category}
                </span>
              </div>
            </div>
            
            {/* Featured Image */}
            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-8">
              <Image
                src={post.imageSrc}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Content */}
            <div 
              className={`prose ${contentClass} max-w-none prose-headings:${headingClass} prose-strong:font-semibold`}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Share */}
            <div className="mt-12 pt-6 border-t border-gray-800 flex items-center justify-between">
              <div className={`${metaTextClass}`}>
                {language === "fr" ? "Partager cet article:" : "Share this article:"}
              </div>
              
              <div className="flex items-center gap-3">
                <button className={`p-2 rounded-full ${buttonClass}`}>
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          </article>
        </div>
      </main>

      {/* NEWSLETTER */}
      <Newsletter
        language={language}
        isDarkMode={isDarkMode}
      />

      {/* FOOTER */}
      <Footer 
        language={language} 
        isDarkMode={isDarkMode} 
      />
    </div>
  );
}