import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { menuItems } from "@/lib/menuData";

export default function Menu() {
  return (
    <section id="menu" className="py-24 px-6 bg-beige">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="max-w-2xl mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-mocha mb-4">
            The Menu
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso leading-tight">
            Brunch, pastries & specialty coffee.
          </h2>
          <p className="mt-5 text-coffee leading-relaxed">
            Small, seasonal and made with care. A short menu we cook well.
          </p>
        </FadeIn>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item, idx) => (
            <FadeIn key={item.id} delay={idx * 0.04} as="li">
              <article className="bg-cream overflow-hidden border border-sand hover:bg-sand/40 transition-colors h-full flex flex-col">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-xl text-espresso">
                      {item.name}
                    </h3>
                    <span className="text-sm text-coffee whitespace-nowrap">
                      {item.price} TND
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-coffee leading-relaxed">
                    {item.description}
                  </p>
                  <p className="mt-4 text-[11px] tracking-widest uppercase text-mocha">
                    {item.category}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
