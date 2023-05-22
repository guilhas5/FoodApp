import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import RecipeDetails from "./RecipeDetails";


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
    <RecipeDetails
        selectedRecipe={selectedRecipe}
        onGoBack={onGoBack}
        onToggleIngredients={onToggleIngredients}
        onToggleInstructions={onToggleInstructions}
        isIngredientsSelected={isIngredientsSelected}
        isInstructionsSelected={isInstructionsSelected}
        />
            <div className="ingredients--container">
                <ul className="ingredients">
                    {ingredients.map((ingredient) => (
                        <li key={ingredient.id}>{ingredient.original} </li>

                    ))}
                </ul>
            </div>
        </>
    );
}

export default RecipeIngredients

