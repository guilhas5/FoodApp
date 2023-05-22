import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function RecipeSteps({ selectedRecipe,
     onToggleIngredients,
      onToggleInstructions,
       onGoBack, 
       isIngredientsSelected,
       isInstructionsSelected }) {
    const [steps, setSteps] = useState([]);
    const apiKey = '734639a21c5f4d0394ffffbfba72612f';

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
            <div className="recipe-details-container">
                <img className="card-details-img" src={selectedRecipe.image} alt={selectedRecipe.title} />
                <h1 className="card-details-title">{selectedRecipe.title}</h1>
                <div className="card--buttons">
                    <button className={`ingredients--btn ${isIngredientsSelected ? 'selected' : ""}`} 
                    onClick={onToggleIngredients}>Ingredients</button>
                    <button className={`instructions--btn ${isInstructionsSelected ? "selected" : ""}`} onClick={onToggleInstructions}>Instructions</button>
                </div>
            </div>
            <div className="instructions--container">
                <ol className="instructions">
                    {steps.map((step) => (
                        <li className="instruction--singular" key={step.number}>{step.step}</li>
                    ))}
                </ol>
            </div>
            <button onClick={onGoBack}>Go back</button>
        </>
    );
}

export default RecipeSteps;
