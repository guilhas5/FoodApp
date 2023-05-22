import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function RecipeIngredients({
    selectedRecipe,
    onGoBack,
    onToggleIngredients,
    onToggleInstructions,
    isIngredientsSelected,
    isInstructionsSelected, }) {
    const [ingredients, setIngredients] = useState([])

    const apiKey = '734639a21c5f4d0394ffffbfba72612f'

    useEffect(() => {
        const fetchIngredientsData = async () => {
            try {
                const response = await axios.get(
                    `https://api.spoonacular.com/recipes/${selectedRecipe.id}/information?apiKey=${apiKey}&includeNutrition=false`

                );
                const fetchedIngredientsData = response.data.extendedIngredients
                setIngredients(fetchedIngredientsData)
            } catch (error) {
                console.log("Error fetching recipe data", error)
            }
        }

        fetchIngredientsData();
    }, [selectedRecipe]);




    return (
        <>
            <div className="recipe-details-container">
                <img className="card-details-img" src={selectedRecipe.image} alt={selectedRecipe.title} />
                <h1 className="card-details-title">{selectedRecipe.title}</h1>
                <div className="card--buttons">
                    <button className={`ingredients--btn ${isIngredientsSelected ? 'selected' : ""}`} 
                    onClick={onToggleIngredients}>Ingredients</button>
                    <button className={`instructions--btn ${isInstructionsSelected ? "selected" : ""}`} onClick={onToggleInstructions}>Instructions</button>
                </div>
            </div>
            <div className="ingredients--container">
                <ul className="ingredients">
                    {ingredients.map((ingredient) => (
                        <li key={ingredient.id}>{ingredient.original} </li>

                    ))}
                </ul>
            </div>
            <button onClick={onGoBack}>Go back</button>
        </>
    );
}

export default RecipeIngredients

