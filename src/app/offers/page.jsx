"use client";

import Link from "next/link";

const offers = [
  {
    id: 1,
    title: "Up to 50% Off on Electronics",
    description: "Grab the hottest deals on smartphones, headphones, and more.",
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    cta: "Shop Electronics",
    href: "/categories/electronics",
  },
  {
    id: 2,
    title: "Buy 1 Get 1 Free - Fashion",
    description: "Trendy styles, unbeatable deals. Limited time only.",
    imageUrl: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
    cta: "Explore Fashion",
    href: "/categories/fashion",
  },
  {
    id: 3,
    title: "Home Essentials Sale - 30% Off",
    description: "Redecorate your space with stylish and affordable home goods.",
    imageUrl: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
    cta: "Shop Home & Garden",
    href: "/categories/home-garden",
  },
];

export default function OffersPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      {/* Page Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Special Offers</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our latest promotions and save big on top categories.
        </p>
      </header>

      {/* Offers Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="group rounded-lg overflow-hidden shadow hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            <div className="relative h-56 w-full overflow-hidden">
              <img
                src={offer.imageUrl}
                alt={offer.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              {/* Optional Discount Tag */}
              <div className="absolute top-2 left-2 bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded">
                Offer
              </div>
            </div>

            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-900">{offer.title}</h2>
              <p className="text-gray-600 mt-2">{offer.description}</p>
              <Link
                href={offer.href}
                className="inline-block mt-4 text-red-600 hover:text-red-800 font-semibold transition"
              >
                {offer.cta} →
              </Link>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
