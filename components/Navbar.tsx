"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems } = useCart();

  const links = [
    { href: "/", label: "Coffee Shop" },
    { href: "/boutique", label: "Concept Store" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-linen border-b border-sand">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl tracking-wide text-wood"
          aria-label="Modern Circle home"
        >
          Modern Circle
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors px-1 py-2 ${
                    active
                      ? "text-wood border-b border-espresso"
                      : "text-coffee hover:text-wood"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/cart"
          aria-label={`Cart with ${totalItems} items`}
          className="relative inline-flex items-center justify-center w-10 h-10 rounded-full text-wood hover:bg-beige transition-colors"
        >
          <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 rounded-full bg-espresso text-cream text-[11px] font-medium flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </nav>

      {/* Mobile sub-links */}
      <div className="md:hidden border-t border-sand">
        <ul className="max-w-7xl mx-auto px-6 h-11 flex items-center gap-6">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-xs tracking-wide ${
                    active ? "text-wood" : "text-coffee"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
