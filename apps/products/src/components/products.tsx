import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number; // Optional, in case price is not always available
}

export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                const products:Product[] = data.products.map((product: any): Product => ({
                    id: product.id,
                    title: product.title,
                    description: product.description,
                    thumbnail: product.thumbnail,
                    price: product.price
                }));
                setProducts(products);
            });
        // Any side effects or data fetching can be done here
    }, []);
    return (
        <div className="products">
            <ul>
                {!products.length && <li>Loading products...</li>}
                {products.length && products.map(product => (
                    <li key={product.id}>
                        <img src={product.thumbnail} alt={product.title} />
                        <p>{product.title}</p>
                        <p>${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}