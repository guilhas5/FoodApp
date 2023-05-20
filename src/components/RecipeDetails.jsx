import React from "react";
import { useState, useEffect } from "react";

function RecipeDetails({ selectedRecipe, onGoBack }) {
    return (
        <>
        <div className="recipe-details-container">

            <h1 className="card-details-title">{selectedRecipe.title}</h1>
            <img className="card-details-img" src={selectedRecipe.image} alt={selectedRecipe.title} />
            </div>
            <button onClick={onGoBack}>Go back</button>


        </>
    )
}

export default RecipeDetails