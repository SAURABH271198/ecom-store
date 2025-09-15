"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-auto w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div>
            <h2 className="text-white text-lg font-bold">E-Store</h2>
            <p className="mt-2 text-sm">
              Your one-stop shop for the best products online.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-2">Shop</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/products" className="hover:underline">Products</Link></li>
              <li><Link href="/categories" className="hover:underline">Categories</Link></li>
              <li><Link href="/offers" className="hover:underline">Offers</Link></li>
              <li><Link href="/new-arrivals" className="hover:underline">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-2">Support</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/returns" className="hover:underline">Returns</Link></li>
              <li><Link href="/shipping" className="hover:underline">Shipping</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-2">Newsletter</h3>
            <p className="text-sm mb-3">Subscribe for updates & offers.</p>
            <form className="flex items-center space-x-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-3 py-2 rounded bg-gray-800 text-sm text-white placeholder-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} E-Store. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
