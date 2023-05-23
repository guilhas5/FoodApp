import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import RecipeDetails from "./RecipeDetails";

function RecipeSteps({
    selectedRecipe,
    onToggleIngredients,
    onToggleInstructions,
    onGoBack,
    isIngredientsSelected,
    isInstructionsSelected }) {
    const [steps, setSteps] = useState([]);
    const apiKey = 'dcbd98a3ecbd499e87662d41d6fecdb5'

    useEffect(() => {
        const fetchStepsData = async () => {
            try {
                const response = await axios.get(
                    `https://api.spoonacular.com/recipes/${selectedRecipe.id}/analyzedInstructions?apiKey=${apiKey}`
                );
                const fetchedStepsData = response.data.flatMap((instruction) =>
                    instruction.steps.map((step) => ({
                        number: step.number,
                        step: step.step,
                    }))
                );
                setSteps(fetchedStepsData);
            } catch (error) {
                console.log('Error fetching recipe data:', error);
            }
        };

        fetchStepsData();
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
                {isInstructionsSelected && (
            <div className="instructions--container">
                <ol className="instructions">
                    {steps.map((step) => (
                        <li className="instruction--singular" key={step.number}>{step.step}</li>
                    ))}
                </ol>
            </div>
                )}
        </> 
                    
    );
    
}

export default RecipeSteps;
