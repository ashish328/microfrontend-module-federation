/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Product from "./Product";
import type { Product as ProductType } from "./Product";
import './Products.css';

interface Category {
    slug: string;
    name: string;
    url: string;
}
interface ProductsProps {
    category?: Category;
} 

export default function Products({ category }: ProductsProps) {
    const [products, setProducts] = useState<ProductType[]>([]);
    useEffect(() => {
        const url = category?.url || 'https://dummyjson.com/products';
        fetch(`${url}?limit=50`)
            .then(res => res.json())
            .then(data => {
                const products:ProductType[] = data.products.map((product: any): ProductType => ({
                    id: product.id,
                    title: product.title,
                    description: product.description,
                    thumbnail: product.thumbnail,
                    price: product.price
                }));
                setProducts(products);
            });
        // Any side effects or data fetching can be done here
    }, [category]);
    return (
        <div className="products">
            <ul>
                {!products.length && <li>Loading products...</li>}
                {products.length && products.map(product => (
                    <li key={product.id}>
                        {/* <img src={product.thumbnail} alt={product.title} />
                        <p>{product.title}</p>
                        <p>${product.price}</p> */}
                        <Product product={product} />
                    </li>
                ))}
            </ul>
        </div>
    );
}