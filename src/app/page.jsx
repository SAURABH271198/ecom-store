import Image from "next/image";
import HeroSection from "./home/heroSection";
import FeaturedProductsPage from "./home/featuredProducts";

export default function Home() {
  return (
    <>
        <HeroSection />
        <FeaturedProductsPage/>
    </>
  );
}
