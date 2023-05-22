import React from "react";

function RecipeDetails({ selectedRecipe, isIngredientsSelected, isInstructionsSelected, onToggleIngredients, onToggleInstructions }) {
  return (
    <div className="recipe-details-container">
      <img className="card-details-img" src={selectedRecipe.image} alt={selectedRecipe.title} />
      <h1 className="card-details-title">{selectedRecipe.title}</h1>
      <div className="card--buttons">
        <button
          className={`ingredients--btn ${isIngredientsSelected ? 'selected' : ''}`}
          onClick={onToggleIngredients}
        >
          Ingredients
        </button>
        <button
          className={`instructions--btn ${isInstructionsSelected ? 'selected' : ''}`}
          onClick={onToggleInstructions}
        >
          Instructions
        </button>
      </div>
    </div>
  );
}

export default RecipeDetails;
