import Link from "next/link";
import { Lock } from "lucide-react";

export default function LoginPlaceholder({ title }: { title: string }) {
  return (
    <section className="px-6 py-32">
      <div className="max-w-md mx-auto text-center">
        <div className="inline-flex w-12 h-12 items-center justify-center bg-beige border border-sand mb-6">
          <Lock className="w-5 h-5 text-coffee" strokeWidth={1.5} />
        </div>
        <h1 className="font-serif text-3xl text-espresso">{title}</h1>
        <p className="mt-4 text-coffee">Login Coming Soon</p>
        <Link
          href="/"
          className="inline-block mt-8 px-5 py-3 text-sm bg-espresso text-cream hover:bg-coffee transition-colors"
        >
          Back to Modern Circle
        </Link>
      </div>
    </section>
  );
}
