import React from 'react';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faBowlFood, faClock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function RecipeDetails({
  selectedRecipe,
  onGoBack,
  onToggleIngredients,
  onToggleInstructions,
  isIngredientsSelected,
  isInstructionsSelected }) {
  const [readyInMinutes, setReadyInMinutes] = useState(0);
  const [servings, setServings] = useState(0);
  const apiKey = '734639a21c5f4d0394ffffbfba72612f'


  useEffect(() => {
    const fetchRecipeData = async () => {
      if (selectedRecipe && selectedRecipe.id)
        try {
          const response = await axios.get(
            `https://api.spoonacular.com/recipes/${selectedRecipe.id}/information?apiKey=${apiKey}&includeNutrition=false`
          );
          const { readyInMinutes, servings } = response.data;
          setReadyInMinutes(readyInMinutes);
          setServings(servings);
        } catch (error) {
          console.log('Error fetching recipe data:', error);
        }
    };
    fetchRecipeData();
  }, [selectedRecipe && selectedRecipe.id]);

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
        <div className="recipe--info">
          <p className="servings--icon">
            <FontAwesomeIcon icon={faBowlFood} style={{ color: '#129575' }} /> {servings} servings
          </p>
          <p className="time--icon">
            <FontAwesomeIcon icon={faClock} style={{ color: '#129575' }} /> {readyInMinutes} minutes
          </p>
        </div>

      </div>
    </>
  );
}

export default RecipeDetails;
