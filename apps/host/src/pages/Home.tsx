import React, {Suspense} from 'react';
import Navbar from '../components/Navbar';
import './Home.css'

import { useCategoryStore } from 'categories/categoryStore';
import type { Category } from 'categories/categoryStore';

const CategoryList = React.lazy(() => import('categories/CategoryList'))
const Products = React.lazy(() => import('products/Products'))


const Home: React.FC = () => {
    const selectedCategory: Category = useCategoryStore((state) => state.category);
    const productsHeader = selectedCategory && selectedCategory.name ? selectedCategory.name : 'All Products';
    return (
        <div className='store-layout'>
            <Navbar />
            <div className='store-content'>
                <div className="store-sidebar">
                    <CategoryList />
                </div>
                <div className="store-products">
                    <div className="store-category-selected">
                        <h2>{ productsHeader }</h2>
                    </div>
                    <div className="store-product-list">
                        <Suspense fallback={<div>Loading Products...</div>}>
                            <Products category={selectedCategory} />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;