"use client";

import { useState, useEffect } from "react";

export default function SearchAndFilters({ partners = [], onFilterChange }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Legal", "Financial"];

  useEffect(() => {
    // Filter partners based on search term and active category filter
    let filtered = partners;

    // Apply search term filter (name-based)
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter((partner) =>
        partner.name.toLowerCase().includes(term)
      );
    }

    // Apply category filter
    if (activeFilter !== "All") {
      filtered = filtered.filter(
        (partner) => partner.category === activeFilter
      );
    }

    // Notify parent component
    if (onFilterChange) {
      onFilterChange(filtered);
    }
  }, [searchTerm, activeFilter, partners, onFilterChange]);

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center px-4 py-3 mb-2 md:mb-8">
      {/* 🔍 Search Bar */}
      <div className="w-full md:flex-1">
        <label className="flex flex-col min-w-40 h-14 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
            <div className="text-text-muted-light dark:text-text-muted-dark flex bg-white dark:bg-primary/50 items-center justify-center pl-4 rounded-l-xl border-y border-l border-primary/20 dark:border-accent/20">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input
              type="text"
              placeholder="Search by partner name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-accent border-y border-r border-primary/20 dark:border-accent/20 bg-white dark:bg-primary/50 focus:border-accent h-full placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
            />
          </div>
        </label>
      </div>

      {/* 🔹 Filter Chips */}
      <div className="flex gap-2 p-3 overflow-x-auto w-full md:w-auto">
        {filters.map((filter) => (
          <div
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`flex h-10 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg px-4 transition-colors ${
              activeFilter === filter
                ? "bg-accent text-white font-semibold"
                : "bg-primary/10 dark:bg-accent/10 text-text-light dark:text-text-dark hover:bg-accent hover:text-black"
            }`}
          >
            <p
              className={`text-sm ${
                activeFilter === filter ? "font-bold" : "font-medium"
              } leading-normal`}
            >
              {filter}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
