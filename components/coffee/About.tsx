import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { Leaf, Coffee, UserRound } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: UserRound,
      title: "Woman-managed",
      text: "Run with care and attention to detail by a small, thoughtful team.",
    },
    {
      icon: Coffee,
      title: "Calm & non-smoking",
      text: "A quiet space designed for slow mornings, reading and focused work.",
    },
    {
      icon: Leaf,
      title: "Eco-friendly",
      text: "Seasonal sourcing, recyclable packaging and minimal waste.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid gap-16 md:grid-cols-2 items-center">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-mocha mb-4">
            Our Space
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-wood leading-tight">
            A quiet circle in El Mourouj.
          </h2>
          <p className="mt-6 text-coffee leading-relaxed">
            Modern Circle was built around a simple idea: a calm, welcoming
            place where you can take your time. The room is non-smoking and
            woman-managed, with natural light, considered music, and a kitchen
            that leans on fresh, local ingredients.
          </p>
          <p className="mt-4 text-coffee leading-relaxed">
            We care about how things are made — from the beans we serve to the
            handmade goods sitting next door in our concept store.
          </p>

          <ul className="mt-10 grid sm:grid-cols-3 gap-6">
            {values.map((v) => (
              <li key={v.title}>
                <v.icon
                  className="w-5 h-5 text-sage mb-3"
                  strokeWidth={1.5}
                />
                <p className="text-sm font-medium text-wood">{v.title}</p>
                <p className="text-xs text-coffee mt-1 leading-relaxed">
                  {v.text}
                </p>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative w-full aspect-[4/5] overflow-hidden">
            <Image
              src="https://picsum.photos/seed/moderncircle2/800/1000"
              alt="Interior of Modern Circle"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
