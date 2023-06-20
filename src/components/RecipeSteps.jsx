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
    const [isLoading, setIsLoading] = useState(true)
    const apiKey = '734639a21c5f4d0394ffffbfba72612f'

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
                setIsLoading(false);
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
            {isLoading ? (
                <h1 className="loading">Loading our instructions list</h1>
            ) : (
                isInstructionsSelected && (
                    <div className="instructions--container">
                        <ol className="instructions">
                            {steps.map((step) => (
                                <li className="instruction--singular" key={step.number}>{step.step}</li>
                            ))}
                        </ol>
                    </div>
                )
            )}
        </>
    )
}

export default RecipeSteps;
