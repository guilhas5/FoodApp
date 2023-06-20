import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function RecipeCard({
  searchQuery,
  setSelectedRecipe,
  handleFilter,
}) {
  const [recipeData, setRecipeData] = useState(null);
  const [error, setError] = useState(false);

  const apiKey = '734639a21c5f4d0394ffffbfba72612f';

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchQuery}&diet=${handleFilter()}`
        );
        const fetchedRecipeData = response.data;
        setRecipeData(fetchedRecipeData);
        setError(false);
      } catch (error) {
        console.log('Error fetching recipe data:', error);
        setError(true);
      }
    };

    fetchRecipeData();
  }, [searchQuery, handleFilter]);

  return (
    <>
      <div className="container--card">
        {error ? (
          <h1 className="recipe-notfound">We are sorry but our website is under maintenance.</h1>
        ) : recipeData ? (
          recipeData.results.length > 0 ? (
            recipeData.results.map((recipe) => (
              <div key={recipe.id} onClick={() => setSelectedRecipe(recipe)}>
                <div className="card">
                  <h1 className="title--recipe">{recipe.title}</h1>
                  <img className="img--recipe" src={recipe.image} alt={recipe.title} />
                </div>
              </div>
            ))
          ) : (
            <h1 className="recipe-notfound">We are sorry but we can't find a recipe.</h1>
          )
        ) : (
          <h1 className="recipe-notfound">Loading...</h1>
        )}
      </div>
    </>
  );
}

export default RecipeCard;
