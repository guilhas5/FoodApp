import React from "react";
import { useState } from "react";

function Search({ onSearchQueryChange, vegetarian, vegetarianFilter }) {
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
            <div className="search--box">
                <h1 className="search--title">What are you preparing today?</h1>
                <form onSubmit={handleFormSubmit}>
                    <input
                        className="search-input"
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                        placeholder="Type your ingredients"
                    />
                    <div className="search-container-btn">
                        <button className="btn--fullvegan"
                            type="submit">Full Vegan</button>
                        <button
                            className={`vegetarian-filter-btn ${vegetarianFilter ? "selected" : ""}`}
                            onClick={vegetarian}
                        >
                            Add Vegetarian
                        </button>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default Search