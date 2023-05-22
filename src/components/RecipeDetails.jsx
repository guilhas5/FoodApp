import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function RecipeDetails({ selectedRecipe, onGoBack, onToggleIngredients, onToggleInstructions, isIngredientsSelected, isInstructionsSelected }) {
  return (
    <>
    <div className="recipe--return">
        <button onClick={onGoBack} className="return--btn">
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#129575' }} />
        </button>
      </div>
    <div className="recipe-details-container">
      
      <img className="card-details-img" src={selectedRecipe.image} alt={selectedRecipe.title} />
      <h1 className="card-details-title">{selectedRecipe.title}</h1>
      <div className="card--buttons">
        <button className={`ingredients--btn ${isIngredientsSelected ? 'selected' : ''}`} onClick={onToggleIngredients}>
          Ingredients
        </button>
        <button className={`instructions--btn ${isInstructionsSelected ? 'selected' : ''}`} onClick={onToggleInstructions}>
          Instructions
        </button>
      </div>
    </div>
    </>
  );
}

export default RecipeDetails;
