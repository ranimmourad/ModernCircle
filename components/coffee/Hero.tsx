"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="relative h-[88vh] min-h-[560px] w-full overflow-hidden">
      <Image
        src="https://picsum.photos/seed/moderncircle1/1920/1200"
        alt="A quiet corner of Modern Circle coffee shop"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Soft warm overlay to keep the cream/espresso mood */}
      <div className="absolute inset-0 bg-espresso/35" />

      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-end pb-20">
        <motion.div
          initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl text-cream"
        >
          <p className="text-xs tracking-[0.3em] uppercase mb-5 opacity-90">
            El Mourouj — Tunisia
          </p>
          <h1 className="font-serif text-4xl md:text-6xl leading-tight">
            Modern Circle
          </h1>
          <p className="mt-5 text-base md:text-lg opacity-90 leading-relaxed">
            A calm coffee shop and concept store. Specialty coffee, slow brunch,
            and quietly curated handmade goods.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#menu"
              className="inline-flex items-center px-5 py-3 text-sm tracking-wide bg-linen text-wood hover:bg-beige transition-colors"
            >
              View the Menu
            </Link>
            <Link
              href="/boutique"
              className="inline-flex items-center px-5 py-3 text-sm tracking-wide border border-cream text-cream hover:bg-linen/10 transition-colors"
            >
              The Concept Store
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
