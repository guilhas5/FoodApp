import React from "react";
import { useState, useEffect } from "react";

function Search({searchQuery, onSearchQueryChange }) {
    const [query, setQuery] = useState("");

    const handleInputChange = (event) => {
        setQuery(event.target.value)
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSearchQueryChange(query)

    };

    return (
        <div className="container--search">
            <h1>What are you preparing today?</h1>
            <form onSubmit={handleFormSubmit}>
                <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Type your ingridients"
                />
            <button type="submit">Let's go</button>
            </form>
            <div className="btn--filters">
                <button className="btn--filter" >All</button>
                <button className="btn--filter" >Vegeterian</button>
                <button className="btn--filter" >Vegan</button>
            </div>
            <div className="btn--times">
                <button className="btn--time" >-20min</button>
                <button className="btn--time" >+30min</button>
                <button className="btn--time" >+1h</button>
            </div>
            <div className="btn--nutrients">
                <button className="btn--nutrient" >High Protein</button>
                <button className="btn--nutrient" >Low Protein</button>
            </div>


        </div>
    )
}

export default Search