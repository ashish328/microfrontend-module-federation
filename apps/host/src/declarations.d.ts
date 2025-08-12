// Tell TypeScript these are valid module names
declare module 'products/ProductsListing';
declare module 'cart/App';
declare module 'categories/CategoryList';
declare module 'categories/categoryStore' {
	export interface Category {
		slug: string;
		name: string;
		url: string;
	}
	export const useCategoryStore: import('zustand').UseBoundStore<
		import('zustand').StoreApi<{
			category: Category;
			setCategory: (category: Category) => void;
		}>
	>;
}
declare module 'products/Products';
