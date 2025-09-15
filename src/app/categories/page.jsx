"use client";

import Link from "next/link";

const categories = [
  {
    id: "electronics",
    name: "Electronics",
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "fashion",
    name: "Fashion",
    imageUrl: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "home-garden",
    name: "Home & Garden",
    imageUrl: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sports",
    name: "Sports & Outdoors",
    imageUrl: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "beauty",
    name: "Beauty & Health",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "toys",
    name: "Toys & Games",
    imageUrl: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80",
  },
];

export default function CategoriesPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      {/* Page Header */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Explore our wide range of categories and find exactly what you're looking for.
        </p>
      </header>

      {/* Category Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map(({ id, name, imageUrl }) => (
          <Link
            key={id}
            href={`/categories/${id}`}
            className="group block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative h-48 sm:h-56 md:h-64 w-full">
              <img
                src={imageUrl}
                alt={name}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="p-4 bg-white">
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                {name}
              </h2>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
