import React from 'react';
import './Product.css';

export interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number; // Optional, in case price is not always available
}

const Product: React.FC<{ product: Product}> = ({ product }) => {
    return (
        <div className="product">
            <div className="image">
                <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className="details">
                <p>{product.title}</p>
                <p>${product.price}</p>
            </div>
        </div>
    );
};

export default Product;