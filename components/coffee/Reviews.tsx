import FadeIn from "@/components/FadeIn";
import { Quote } from "lucide-react";

const reviews = [
  {
    quote:
      "Une expérience exceptionnelle au Modern Circle ! Le lieu est magnifiquement décoré...",
    author: "Yassine H",
  },
  {
    quote:
      "J’aime beaucoup cet endroit qui est propice au travail...",
    author: "Lina Aouadi",
  },
  {
    quote: "Un endroit superbe pour un brunch ou petit déjeuner !",
    author: "Khadidja Djeb",
  },
];

export default function Reviews() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="max-w-2xl mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-mocha mb-4">
            Kind Words
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-wood leading-tight">
            What our guests say.
          </h2>
        </FadeIn>

        <ul className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, idx) => (
            <FadeIn key={r.author} delay={idx * 0.08} as="li">
              <figure className="h-full bg-beige border border-sand p-8 flex flex-col">
                <Quote
                  className="w-5 h-5 text-sage mb-4"
                  strokeWidth={1.5}
                />
                <blockquote className="text-coffee leading-relaxed text-[15px] flex-1">
                  {r.quote}
                </blockquote>
                <figcaption className="mt-6 text-sm text-wood">
                  — {r.author}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
