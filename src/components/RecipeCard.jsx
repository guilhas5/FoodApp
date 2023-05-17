import React from "react";
import axios from "axios"
import { useState, useEffect } from "react";

function RecipeCard({ searchQuery }) {
    const [recipeData, setRecipeData] = useState(null);


    useEffect(() => {
        const fetchRecipeData = async () => {
            try {
                const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=xx&query=${searchQuery}`);
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
        <div className="container--Card">
            {recipeData && recipeData.results.map((recipe) => (
                <div key={recipe.id}>
                    <h1>{recipe.title}</h1>
                    <img src={recipe.image} alt={recipe.title} />
                </div>
            ))}
        </div>
    );
}
export default RecipeCard