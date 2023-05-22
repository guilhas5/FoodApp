import React from "react";
import axios from "axios"
import { useState, useEffect } from "react";

function RecipeCard({
    searchQuery,
    setSelectedRecipe,
    vegetarian,
    handleFilter
}) {
    const [recipeData, setRecipeData] = useState(null);
    ;

    const apiKey = '6b7d167564fc4204b1d70e57754cf57e'

    useEffect(() => {
        const fetchRecipeData = async () => {
            try {
                const response = await axios.get(
                    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchQuery}&diet=${handleFilter()}`
                );
                const fetchRecipeData = response.data;
                setRecipeData(fetchRecipeData)
                // Process the recipeData and update your component state
            } catch (error) {
                console.log('Error fetching recipe data:', error);
            }
        };

        fetchRecipeData();
    }, [searchQuery, vegetarian, handleFilter]);
    return (
        <> 
        <div className="filter">
            <button className="vegetarian--filter" onClick={vegetarian}>Show me Vegetarian options</button>
        </div>
          <div className="container--card">
            
          {recipeData &&
            recipeData.results.map((recipe) => (
              <div key={recipe.id} onClick={() => setSelectedRecipe(recipe)}>
                <div className="card">
                  <h1 className="title--recipe">{recipe.title}</h1>
                  <img className="img--recipe" src={recipe.image} alt={recipe.title} />
                </div>
              </div>
            ))}
        </div>
        </>
      );
    }
    
    export default RecipeCard;