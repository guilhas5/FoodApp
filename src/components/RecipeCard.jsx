import React from "react";
import axios from "axios"
import { useState, useEffect } from "react";

function RecipeCard({ searchQuery, setSelectedRecipe }) {
    const [recipeData, setRecipeData] = useState(null);
    const [vegetarianFilter, setVegetarianFilter] = useState(false);
    const [veganFilter, setVeganFilter] = useState(false);

    const apiKey = '734639a21c5f4d0394ffffbfba72612f'

    useEffect(() => {
        const fetchRecipeData = async () => {
            try {
                const response = await axios.get(
                    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchQuery}`
                );
                const fetchRecipeData = response.data;
                setRecipeData(fetchRecipeData)
                // Process the recipeData and update your component state
            } catch (error) {
                console.log('Error fetching recipe data:', error);
            }
        };

        fetchRecipeData();
    }, [searchQuery]);
    return (
        <div className="container--card">
            {recipeData && recipeData.results.map((recipe) => (
                <div key={recipe.id} onClick={() => setSelectedRecipe(recipe)}>
                    <div className="card">
                        <h1 className="title--recipe">{recipe.title}</h1>
                        <img className="img--recipe" src={recipe.image} alt={recipe.title} />
                    </div>
                </div>
            ))}
        </div>
    );
}
export default RecipeCard