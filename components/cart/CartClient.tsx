"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import FadeIn from "@/components/FadeIn";

export default function CartClient() {
  const {
    items,
    totalItems,
    totalPrice,
    increment,
    decrement,
    removeFromCart,
    clearCart,
  } = useCart();

  if (items.length === 0) {
    return (
      <section className="px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <ShoppingBag
            className="w-8 h-8 text-mocha mx-auto mb-6"
            strokeWidth={1.25}
          />
          <h1 className="font-serif text-3xl text-espresso">
            Your cart is empty.
          </h1>
          <p className="mt-4 text-coffee">
            Have a look at the concept store — you might find something you
            love.
          </p>
          <Link
            href="/boutique"
            className="inline-block mt-8 px-5 py-3 text-sm bg-espresso text-cream hover:bg-coffee transition-colors"
          >
            Browse the Concept Store
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-mocha mb-4">
            Your Cart
          </p>
          <h1 className="font-serif text-3xl md:text-4xl text-espresso">
            {totalItems} {totalItems === 1 ? "item" : "items"}
          </h1>
        </FadeIn>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_360px] items-start">
          <ul className="divide-y divide-sand border-y border-sand">
            {items.map((item) => (
              <li key={item.id} className="py-6 flex gap-5">
                <div className="relative w-24 h-28 shrink-0 bg-beige overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="96px"
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between gap-4">
                    <div>
                      <p className="text-[11px] tracking-widest uppercase text-mocha">
                        {item.category}
                      </p>
                      <h3 className="font-serif text-lg text-espresso mt-0.5">
                        {item.name}
                      </h3>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.name}`}
                      className="w-8 h-8 inline-flex items-center justify-center text-mocha hover:bg-beige transition-colors"
                    >
                      <X className="w-4 h-4" strokeWidth={1.5} />
                    </button>
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <div className="inline-flex items-center border border-sand">
                      <button
                        type="button"
                        onClick={() => decrement(item.id)}
                        aria-label="Decrease quantity"
                        className="w-8 h-8 inline-flex items-center justify-center text-coffee hover:bg-beige transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                      </button>
                      <span className="w-8 text-center text-sm text-espresso">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => increment(item.id)}
                        aria-label="Increase quantity"
                        className="w-8 h-8 inline-flex items-center justify-center text-coffee hover:bg-beige transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                      </button>
                    </div>

                    <p className="text-sm text-espresso">
                      {item.price * item.quantity} TND
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <aside className="bg-beige border border-sand p-6">
            <h2 className="font-serif text-xl text-espresso">Summary</h2>

            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex justify-between">
                <dt className="text-coffee">Subtotal</dt>
                <dd className="text-espresso">{totalPrice} TND</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-coffee">Shipping</dt>
                <dd className="text-mocha">Calculated at checkout</dd>
              </div>
              <div className="border-t border-sand pt-3 flex justify-between text-base">
                <dt className="text-espresso">Total</dt>
                <dd className="text-espresso">{totalPrice} TND</dd>
              </div>
            </dl>

            <button
              type="button"
              className="mt-6 w-full py-3 text-sm tracking-wide bg-espresso text-cream hover:bg-coffee transition-colors"
            >
              Checkout
            </button>

            <button
              type="button"
              onClick={clearCart}
              className="mt-3 w-full py-3 text-sm tracking-wide bg-cream text-coffee border border-sand hover:bg-sand/40 transition-colors"
            >
              Clear cart
            </button>

            <Link
              href="/boutique"
              className="mt-4 block text-center text-xs tracking-widest uppercase text-mocha hover:text-espresso transition-colors"
            >
              Continue shopping
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
