"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-white">
              E-Store
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/products" className="text-gray-300 hover:text-white transition">
              Products
            </Link>
            <Link href="/categories" className="text-gray-300 hover:text-white transition">
              Categories
            </Link>
            <Link href="/offers" className="text-gray-300 hover:text-white transition">
              Offers
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition">
              Contact
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700">
          <nav className="px-4 py-4 space-y-2">
            <Link href="/products" className="block text-gray-300 hover:text-white transition">
              Products
            </Link>
            <Link href="/categories" className="block text-gray-300 hover:text-white transition">
              Categories
            </Link>
            <Link href="/offers" className="block text-gray-300 hover:text-white transition">
              Offers
            </Link>
            <Link href="/contact" className="block text-gray-300 hover:text-white transition">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
