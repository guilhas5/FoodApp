import React from "react";
import { useEffect, useState } from "react";

function HomePage({ onStartCooking }) {
    return (
        <div className="container--homepage">
            <div className="chef--icon">
                <img className="chef--img" src="/images/HomePage--chef.png" alt="chef" />
                <h4 className="title--homepage">Vegan & Vegetarian Recipes</h4>
                <div className="text--homepage">
                    <h1 className="sub-title-homepage">Get Cooking</h1>
                    <h5>Tasty way to find a healthy recipe</h5>
                    <div className="btn--homepage">
                        <button onClick={onStartCooking} className="btn--start-cooking">Start Cooking</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage