import{ useState, useEffect, type FC } from 'react';
import '../App.css';

interface Recipe {
    id: number;
    title: string;
    ingredients: string[];
    rating: number;
    image: string;
}

const Recipes: FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch('https://dummyjson.com/recipes');
                const data = await response.json();
                const recipes: Recipe[] = data.recipes.map((r:any):Recipe => ({
                    id: r.id,
                    title: r.name,
                    ingredients: r.ingredients,
                    rating: r.rating,
                    image: r.image
                }))
                setRecipes(recipes);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, []);
    return (
        <div>
            <h2>Hello from TypeScript React!</h2>
            {loading && <p>Loading...</p>}
            {!loading && !recipes.length && <p>No recipes found.</p>}
            <ul className='recipes-list'>
                {(recipes.length) && recipes.map(r => (<li>
                    <img src={r.image} alt={r.title}/>
                    <p>{r.title}</p>
                    <p>Ingredients: {r.ingredients.join(', ')}</p>
                    <p>Rating: {r.rating}</p>
                </li>))}
            </ul>
        </div>
    );
};

export default Recipes;
