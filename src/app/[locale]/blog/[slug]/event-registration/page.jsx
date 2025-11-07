"use client";
import React from "react";
import { useState, useEffect } from "react";
import MainContent from "@/components/event_registration/MainContent";
import Timer from "@/components/event_registration/Timer";
import HeroSection from "@/components/home/HeroSection";

export default function EventRegistrationPage() {
  // Countdown logic
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 18,
    minutes: 30,
    seconds: 55,
  });

  useEffect(() => {
    const targetDate = new Date("2024-10-26T19:00:00Z").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;
      if (diff <= 0) return clearInterval(timer);
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Data arrays
  const learnData = [
    "Market analysis: Key growth drivers in Abidjan's property sector.",
    "Investment hotspots: Identifying the most promising neighborhoods.",
    "Legal framework: Navigating property acquisition and ownership laws.",
    "Financing options: Securing local and international funding.",
  ];

  const speakers = [
    {
      name: "Jean-Luc Bamba",
      role: "Real Estate Analyst",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbhcbYB8pFwuSTIeo27W-I9ESuqjLd-LbdN5z-yXYRF1QiuLPokCM6UBaWocMkqleWqZp8Kbi5e8Mm47UCB8KtYmZINEf5AUxRMk7batEncm4rKWR2_t6DbmX5BrR3lEhMkrQUYub0OSfa3fJORUakcvGEbzcsOKcQkqoNrKuASH7K8wL8RSnD0eU5w7BJSWlQKOO7GvqwmgYN1Zl6KAHaAq9ThAegC4O7jyJJPiHYWBDFZcfgad2ZwoTckilz2QOQpxvLT97HggU",
    },
    {
      name: "Aminata Koné",
      role: "Investment Strategist",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBneDC-1kxB4pfQawAx8zaSrLi6BFozPfngkzYjabL6Zt5lEskH50vgQdJUVo0MJZES8vTayDTYIYnY05qQgYFbN_Ca-XyRud6uYDQO9J9TPTcz6mbOcO-RkzD9sFd8hF_3CsT9ZxG061cchZAYKY4Rovhl7Udmoj4Y-pF5JemTjyW09GXezKD2Dx7UyLMws_hO7vVzZccNRJn5FhZP6EACnXqgf_i3zYnGtjGFLU3BA9FE23uorvDrqpdz4hvbCtPiwDBCckVIXxo",
    },
  ];

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="layout-content-container flex flex-col max-w-7xl flex-1 mx-auto">
          {/* Hero Section */}
          <HeroSection />
          {/* Timer */}
          <Timer timeLeft={timeLeft} />

          {/* Main Content */}
          <MainContent speakers={speakers} learnData={learnData} />
        </div>
      </div>
    </main>
  );
}
