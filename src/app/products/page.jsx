import ProductCard from "../../components/products/productCard";

const getProducts = async () => {
    try {
        const resp = await fetch('https://fakestoreapi.com/products?limit=12');
        return await resp.json()
    }
    catch(error) {
        console.log(error);
    }
}

export default async function ProductList() {
    const products = await getProducts();
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products?.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    )
}