"use client";
import BlogCard from "@/components/blog/BlogCard";
import { useState } from "react";
import initialData from "@/lib/blogData";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/i18n";

export default function BlogPage() {
  const { locale } = useLanguage();
  const { t } = useTranslation(locale);
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200">
      <div className="mx-auto max-w-7xl px-4 md:px-10 py-6">
        <div className="flex flex-col gap-6  mb-6">
          {/**search section text  */}
          <h1 className="  text-2xl lg:text-3xl font-bold min-w-72">
            {t("Blog.SearchResults")}
            {searchQuery ? `: ${searchQuery}` : ":"}
          </h1>
          <div className="max-w-2xl h-13 mb-2">
            <label className="w-full h-10 md:w-[20%]">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
                <div className="text-text-muted-light dark:text-text-muted-dark flex bg-white/50 dark:bg-primary/50 items-center justify-center pl-4 rounded-l-xl border-y border-l border-primary/20 dark:border-accent/20">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-accent border-y border-r border-primary/20 dark:border-accent/20 bg-white/50 dark:bg-primary/50 focus:border-accent h-full placeholder:text-text-muted-light dark:placeholder:text-text-muted-dark px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  placeholder={t("Blog.searchByKeyword")}
                  value={searchQuery}
                  onChange={handleChange}
                  type="text"
                  name="heading"
                />
              </div>
            </label>
          </div>
        </div>

        <BlogCard initialData={initialData} searchQuery={searchQuery} />
      </div>
    </main>
  );
}
