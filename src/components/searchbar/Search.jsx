import React from 'react';
import './s.scss'

const SearchBar = () => {
    return (
        <div className="search-bars">
            <input type="text" placeholder="Search..." />
            <i className="search-icon fas fa-search"></i>
        </div>
    );
};

export default SearchBar;
