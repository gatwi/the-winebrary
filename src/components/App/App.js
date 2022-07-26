import React, { useEffect, useState } from "react";
import CocktailsCard from "../Items/CocktailsCard";
import SearchIcon from "../Search/"
import Navbar from "../NavBar/Navbar";
import Home from "../Home/Home";
import Search from "../Search/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import BookCard from "../Items/BookCard";


const API_URL = "www.thecocktaildb.com/api/json/v1/1/search.php";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    searchCocktails("");
  }, []);

  const searchCocktails = async (name) => {
    const response = await fetch(`${API_URL}&s={name}`);
    const data = await response.json();

    
  };

  useEffect(() => {
    searchCocktails("");
  }, []);

  return (
    <div className="app">
      <h1>The Winebrary</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a book and a drink"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchCocktails(searchTerm)}
        />
      </div>

        <div className="container">
          {cocktails.map((cocktails) => (
            <CocktailsCard cocktails={cocktails} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2></h2>
        </div>
    </div>
  );
};
  

export default App;
