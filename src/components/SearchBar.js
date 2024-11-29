import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSearch = () => {
        if (city) {
            onSearch(city); // Call the onSearch function passed from App.js
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)} // Update city on input change
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
