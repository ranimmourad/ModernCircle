"use client";

import Image from "next/image";
import { useCart, type Product } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <article className="bg-cream border border-sand overflow-hidden flex flex-col h-full hover:bg-sand/40 transition-colors">
      <div className="relative aspect-[4/5] w-full bg-beige">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className={`object-cover ${!product.inStock ? "opacity-70" : ""}`}
        />
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <p className="text-[11px] tracking-widest uppercase text-mocha">
          {product.category}
        </p>
        <h3 className="font-serif text-lg text-espresso mt-1">
          {product.name}
        </h3>

        {product.description && (
          <p className="mt-2 text-sm text-coffee leading-relaxed">
            {product.description}
          </p>
        )}

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-espresso">{product.price} TND</span>
          <span
            className={`text-xs tracking-wide ${
              product.inStock ? "text-sage" : "text-mocha"
            }`}
          >
            <span
              className={`inline-block w-2 h-2 rounded-full mr-2 align-middle ${
                product.inStock ? "bg-sage" : "bg-mocha"
              }`}
            />
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <button
          type="button"
          onClick={() => product.inStock && addToCart(product)}
          disabled={!product.inStock}
          className={`mt-5 w-full py-2.5 text-sm tracking-wide transition-colors ${
            product.inStock
              ? "bg-espresso text-cream hover:bg-coffee"
              : "bg-sand text-mocha cursor-not-allowed"
          }`}
        >
          {product.inStock ? "Add to Cart" : "Unavailable"}
        </button>
      </div>
    </article>
  );
}
