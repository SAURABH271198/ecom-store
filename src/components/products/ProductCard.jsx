"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ id, title, price, image, href }) {
  return (
    <Link href={href || `/products/${id}`} className="block bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative w-full h-48 sm:h-56 md:h-64">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          priority={false}
        />
      </div>
      <div className="p-4">
        <h3 className="text-gray-900 font-semibold text-lg truncate">{title}</h3>
        <p className="mt-1 text-red-600 font-bold text-xl">${price.toFixed(2)}</p>
      </div>
    </Link>
  );
}
