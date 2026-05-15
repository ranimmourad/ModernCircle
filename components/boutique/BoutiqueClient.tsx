"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import ProductCard from "@/components/boutique/ProductCard";
import FadeIn from "@/components/FadeIn";
import { products, categories } from "@/lib/productsData";

export default function BoutiqueClient() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.description?.toLowerCase().includes(q) ?? false);
      return matchesCategory && matchesQuery;
    });
  }, [query, activeCategory]);

  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="max-w-2xl mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-mocha mb-4">
            The Concept Store
          </p>
          <h1 className="font-serif text-3xl md:text-5xl text-espresso leading-tight">
            Quietly curated, made by hand.
          </h1>
          <p className="mt-5 text-coffee leading-relaxed">
            A small selection of pieces from independent makers — clothing,
            skincare, ceramics and more.
          </p>
        </FadeIn>

        {/* Search + Filters */}
        <FadeIn>
          <div className="flex flex-col gap-5 mb-10">
            <label className="relative block max-w-md">
              <span className="sr-only">Search products</span>
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-mocha"
                strokeWidth={1.5}
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products"
                className="w-full pl-10 pr-4 py-2.5 bg-cream border border-sand text-sm text-espresso placeholder:text-mocha focus:outline-none focus:border-espresso transition-colors"
              />
            </label>

            <div className="flex flex-wrap gap-2">
              {categories.map((c) => {
                const active = c === activeCategory;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setActiveCategory(c)}
                    className={`px-4 py-2 text-xs tracking-wide border transition-colors ${
                      active
                        ? "bg-espresso text-cream border-espresso"
                        : "bg-cream text-coffee border-sand hover:bg-beige"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="text-sm text-coffee py-16 text-center">
            No products match your search.
          </p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((p, idx) => (
              <FadeIn key={p.id} delay={idx * 0.03} as="li">
                <ProductCard product={p} />
              </FadeIn>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
