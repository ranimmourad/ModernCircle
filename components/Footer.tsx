import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-beige border-t border-sand mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-lg text-espresso mb-3">
            Modern Circle
          </h3>
          <p className="text-sm text-coffee leading-relaxed max-w-xs">
            A calm coffee shop and concept store in El Mourouj. Specialty
            coffee, slow brunch, and carefully curated handmade goods.
          </p>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-mocha mb-3">
            Visit
          </h4>
          <address className="not-italic text-sm text-coffee leading-relaxed">
            Av. Martyrs, Résidence Nermine
            <br />
            El Mourouj 6, Tunisia
            <br />
            <a
              href="tel:+21629379400"
              className="hover:text-espresso transition-colors"
            >
              29 379 400
            </a>
          </address>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest text-mocha mb-3">
            Staff
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/admin-login"
                className="text-coffee hover:text-espresso transition-colors"
              >
                Admin Login
              </Link>
            </li>
            <li>
              <Link
                href="/employee-login"
                className="text-coffee hover:text-espresso transition-colors"
              >
                Employee Login
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-sand">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-mocha">
            © {new Date().getFullYear()} Modern Circle. All rights reserved.
          </p>
          <p className="text-xs text-mocha">El Mourouj, Tunisia</p>
        </div>
      </div>
    </footer>
  );
}
