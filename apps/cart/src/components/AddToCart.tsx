
import React, { useMemo } from 'react';
import './AddToCart.css';
import { useCartStore, type Product } from '../store';

interface AddToCartProps {
  product: Product
}

const AddToCart: React.FC<AddToCartProps> = ({ product }) => {
    const items = useCartStore((state) => state.items);
    const addToCart = useCartStore((state) => state.addToCart);
    const increaseQuantity = useCartStore((state) => state.increaseQuantity);
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
    const inCart = useMemo(() => {
        return !!items[product.id];
    }, [items, product.id]);
    const quantity = useMemo(() => {
        const item = items[product.id];
        return item ? item.quantity : 0;
    }, [items, product.id]);
  return (
    <div>
      {!inCart ? (
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
      ) : (
        <div className="quantity-controls">
          <button className='add-to-cart-btn' disabled={quantity === 1}  onClick={() => decreaseQuantity(product.id)}>-</button>
          <span>{quantity}</span>
          <button className='add-to-cart-btn' onClick={() => increaseQuantity(product.id)}>+</button>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
