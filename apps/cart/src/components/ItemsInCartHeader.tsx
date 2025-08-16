import { useMemo } from "react";
import { useCartStore } from "../store";
import './ItemsInCartHeader.css';

export const ItemsInCartHeader = () => {
    const items = useCartStore((state) => state.items);
    const totalItems = useMemo(() => {
        return Object.values(items).reduce((total, item) => total + item.quantity, 0);
    }, [items]);
  return (
    <div className="items-in-cart-header">
      <p>Cart Items: <span>{totalItems}</span></p>
    </div>
  );
} 