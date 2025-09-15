import ProductCard from "../../components/products/productCard";

const getFeaturedProducts = async () => {
    try {
        const resp = await fetch('https://fakestoreapi.com/products?limit=6');
        return await resp.json()
    }
    catch(error) {
        console.log(error);
    }
}

export default async function FeaturedProducts() {
    const featuredProducts = await getFeaturedProducts();
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
