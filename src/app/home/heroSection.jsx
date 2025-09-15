"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gray-800 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=80')" }}
        aria-hidden="true"
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-32 sm:py-48 lg:py-56">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Discover the Best Deals on Top Products
        </h1>
        <p className="mt-4 text-lg max-w-lg">
          Shop from a wide variety of categories and enjoy exclusive offers.
        </p>
        <Link
          href="/products"
          className="inline-block mt-8 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
