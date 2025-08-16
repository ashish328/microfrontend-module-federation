import React from 'react';
import './Product.css';
import AddToCart from 'cart/AddToCart';

export interface Product {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
}

const Product: React.FC<{ product: Product}> = ({ product }) => {
  return (
    <div className="product">
      <div className="image">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="details">
        <div className="description">
          <p>{product.title}</p>
          <p className="price">${product.price}</p>
        </div>
        <div className="add-to-cart">
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
};

export default Product;