import FadeIn from "@/components/FadeIn";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-beige">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 items-start">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-mocha mb-4">
            Visit
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-espresso leading-tight">
            Find us in El Mourouj.
          </h2>
          <p className="mt-5 text-coffee leading-relaxed max-w-md">
            Come for a quiet morning, a slow brunch, or simply a good coffee.
            We’d love to have you.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ul className="space-y-6">
            <li className="flex gap-4">
              <MapPin
                className="w-5 h-5 text-sage mt-1 shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <p className="text-sm font-medium text-espresso">Address</p>
                <p className="text-sm text-coffee leading-relaxed">
                  Av. Martyrs, Résidence Nermine
                  <br />
                  El Mourouj 6, Tunisia
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <Phone
                className="w-5 h-5 text-sage mt-1 shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <p className="text-sm font-medium text-espresso">Phone</p>
                <a
                  href="tel:+21629379400"
                  className="text-sm text-coffee hover:text-espresso transition-colors"
                >
                  29 379 400
                </a>
              </div>
            </li>

            <li className="flex gap-4">
              <Clock
                className="w-5 h-5 text-sage mt-1 shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <p className="text-sm font-medium text-espresso">Hours</p>
                <p className="text-sm text-coffee leading-relaxed">
                  Open daily — please call ahead for current hours.
                </p>
              </div>
            </li>
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
