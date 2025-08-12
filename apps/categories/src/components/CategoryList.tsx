import{ useState, useEffect, type FC } from 'react';
import './CategoryList.css';
import { Category, useCategoryStore } from '../store';

const Categories: FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const setCategory = useCategoryStore((state) => state.setCategory);
    const selectedCategorySlug = useCategoryStore((state) => state.category?.slug);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products/categories');
                const data = await response.json();
                const categories: Category[] = data.map((r:any):Category => ({
                    slug: r.slug,
                    name: r.name,
                    url: r.url
                }))
                setCategories(categories);
            } catch (error) {
                console.error('Error fetching categories:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);
    return (
        <div>
            <div className='list-header'>Categories</div>
            {loading && <p>Loading...</p>}
            <ul className='category-list'>
                {(categories.length && !loading) && categories.map(category => (
                    <li key={category.slug} onClick={() => setCategory(category)} className={selectedCategorySlug === category.slug ? 'active' : ''}>
                        <p>{ category.name }</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
