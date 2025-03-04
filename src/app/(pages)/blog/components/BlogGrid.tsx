"use client";
import React, { useState } from "react";
import BlogCard from "./BlogCard";
import BlogSearch from "./BlogSearch";

interface BlogGridProps {
  language: "fr" | "en";
  isDarkMode: boolean;
}

export default function BlogGrid({ language, isDarkMode }: BlogGridProps) {
  const [activeCategory, setActiveCategory] = useState(language === "fr" ? "Toutes" : "All");
  
  // Sample blog posts
  const blogPosts = language === "fr"
    ? [
        {
          title: "Comment l'IA Française Révolutionne le Service Client",
          excerpt: "Découvrez comment les entreprises françaises utilisent l'IA pour transformer leurs interactions avec les clients tout en respectant les réglementations RGPD.",
          date: "15 Mars 2025",
          author: "Alexandre Lavallee",
          category: "Études de Cas",
          slug: "ia-francaise-service-client",
          imageSrc: "/api/placeholder/400/300"
        },
        {
          title: "Guide Pratique: Intégrer legml à votre Application Web",
          excerpt: "Un tutoriel étape par étape pour intégrer facilement notre API dans votre application web avec des exemples de code et des conseils d'optimisation.",
          date: "2 Mars 2025",
          author: "Mohamad Alhajar",
          category: "Tutoriels",
          slug: "integrer-legml-application-web",
          imageSrc: "/api/placeholder/400/300"
        },
        {
          title: "5 Innovations Clés de l'IA Française en 2025",
          excerpt: "Un aperçu des avancées technologiques françaises en matière d'intelligence artificielle qui redéfinissent les standards de l'industrie cette année.",
          date: "21 Février 2025",
          author: "Romain Crema",
          category: "Innovations",
          slug: "innovations-ia-francaise-2025",
          imageSrc: "/api/placeholder/400/300"
        },
        {
          title: "legml v2.0: Une Nouvelle Ère pour l'IA Française",
          excerpt: "Découvrez les nouvelles fonctionnalités et améliorations de performances de notre dernière version, conçue pour les besoins spécifiques des entreprises françaises.",
          date: "10 Février 2025",
          author: "Alexandre Lavallee",
          category: "IA",
          slug: "legml-v2-nouvelle-ere",
          imageSrc: "/api/placeholder/400/300"
        },
        {
          title: "Comment Carrefour Utilise l'IA Française pour Optimiser sa Chaîne d'Approvisionnement",
          excerpt: "Étude de cas détaillée sur la façon dont le géant français de la distribution a transformé sa logistique grâce à l'intelligence artificielle.",
          date: "28 Janvier 2025",
          author: "Mohamad Alhajar",
          category: "Études de Cas",
          slug: "carrefour-ia-chaine-approvisionnement",
          imageSrc: "/api/placeholder/400/300"
        },
        {
          title: "Rejoignez-nous au Paris AI Summit 2025",
          excerpt: "legml sera présent au plus grand événement d'IA de France pour présenter nos dernières innovations et échanger avec la communauté tech.",
          date: "15 Janvier 2025",
          author: "Romain Crema",
          category: "Événements",
          slug: "paris-ai-summit-2025",
          imageSrc: "/api/placeholder/400/300"
        }
      ]
    : [
        {
          title: "How French AI is Revolutionizing Customer Service",
          excerpt: "Discover how French companies are using AI to transform their customer interactions while respecting GDPR regulations.",
          date: "March 15, 2025",
          author: "Alexandre Lavallee",
          category: "Case Studies",
          slug: "french-ai-customer-service",
          imageSrc: "/api/placeholder/400/300"
        },
        {
          title: "Practical Guide: Integrating legml into Your Web Application",
          excerpt: "A step-by-step tutorial to easily integrate our API into your web application with code examples and optimization tips.",
          date: "March 2, 2025",
          author: "Mohamad Alhajar",
          category: "Tutorials",
          slug: "integrate-legml-web-application",
          imageSrc: "/api/placeholder/400/300"
        },
        {
          title: "5 Key Innovations in French AI in 2025",
          excerpt: "An overview of French technological advances in artificial intelligence that are redefining industry standards this year.",
          date: "February 21, 2025",
          author: "Romain Crema",
          category: "Innovations",
          slug: "french-ai-innovations-2025",
          imageSrc: "/api/placeholder/400/300"
        },
        {
          title: "legml v2.0: A New Era for French AI",
          excerpt: "Discover the new features and performance improvements of our latest version, designed for the specific needs of French businesses.",
          date: "February 10, 2025",
          author: "Alexandre Lavallee",
          category: "AI",
          slug: "legml-v2-new-era",
          imageSrc: "/api/placeholder/400/300"
        },
        {
          title: "How Carrefour Uses French AI to Optimize its Supply Chain",
          excerpt: "Detailed case study on how the French retail giant has transformed its logistics using artificial intelligence.",
          date: "January 28, 2025",
          author: "Mohamad Alhajar",
          category: "Case Studies",
          slug: "carrefour-ai-supply-chain",
          imageSrc: "/api/placeholder/400/300"
        },
        {
          title: "Join Us at the Paris AI Summit 2025",
          excerpt: "legml will be present at France's largest AI event to showcase our latest innovations and interact with the tech community.",
          date: "January 15, 2025",
          author: "Romain Crema",
          category: "Events",
          slug: "paris-ai-summit-2025",
          imageSrc: "/api/placeholder/400/300"
        }
      ];
  
  // Filter posts by category if needed
  const filteredPosts = activeCategory === (language === "fr" ? "Toutes" : "All")
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section className="max-w-6xl mx-auto px-4 pb-16 md:pb-24">
      {/* Search and Filters */}
      <BlogSearch 
        language={language} 
        isDarkMode={isDarkMode} 
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      
      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredPosts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            author={post.author}
            category={post.category}
            slug={post.slug}
            imageSrc={post.imageSrc}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </section>
  );
}