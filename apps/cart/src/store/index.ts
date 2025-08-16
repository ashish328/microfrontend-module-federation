 import { create } from "zustand";

 export interface Product {
   id: number;
   title: string;
   image: string;
   price: number;
 }

 export interface CartItem extends Product {
   quantity: number;
 }

 export interface Cart {
    items: Record<number, CartItem>;
    total: number;
 }

 interface Actions {
   addToCart: (product: Product) => void;
   removeFromCart: (productId: number) => void;
   increaseQuantity: (productId: number) => void;
   decreaseQuantity: (productId: number) => void;
   clearCart: () => void;
 }

 export const useCartStore = create<Cart & Actions>((set, get) => ({
   items: {},
   total: 0,

   addToCart: (product) => {
     const existingItem = get().items[product.id];
     if (existingItem) {
       set(state => ({
         items: {
           ...state.items,
           [product.id]: {
             ...existingItem,
             quantity: existingItem.quantity + 1,
           },
         },
         total: state.total + product.price
       }));
     } else {
       set(state => ({
         items: { ...state.items, [product.id]: { ...product, quantity: 1 } },
         total: state.total + product.price
       }));
     }
   },

   removeFromCart: (productId) => {
     set(state => {
       const itemToRemove = state.items[productId];
       if (!itemToRemove) return state;
       // eslint-disable-next-line @typescript-eslint/no-unused-vars
       const { [productId]: _, ...restItems } = state.items;
       return {
         items: restItems,
         total: state.total - (itemToRemove.price * itemToRemove.quantity)
       };
     });
   },

   increaseQuantity: (productId) => {
     set(state => {
       const item = state.items[productId];
       if (!item) return state;
       return {
         items: {
           ...state.items,
           [productId]: { ...item, quantity: item.quantity + 1 }
         },
         total: state.total + item.price
       };
     });
   },

   decreaseQuantity: (productId) => {
     set(state => {
       const item = state.items[productId];
       if (!item || item.quantity <= 1) return state;
       return {
         items: {
           ...state.items,
           [productId]: { ...item, quantity: item.quantity - 1 }
         },
         total: state.total - item.price
       };
     });
   },

   clearCart: () => set({ items: {}, total: 0 })
 }));