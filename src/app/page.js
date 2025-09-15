import Image from "next/image";
import Hero from "./home/heroSection";
import FeaturedProducts from "./home/featuredProducts";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}
