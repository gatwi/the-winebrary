import React, { useEffect, useState } from "react";
import CocktailsCard from "../Items/CocktailsCard";
import Navbar from "../NavBar/Navbar";
import Home from "../Home/Home";
import Search from "../Search/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./../../App.css";
import SearchIcon from "./../../search.svg";
import BooksCard from "./../Items/BooksCard";

const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  

  useEffect (() => {
    fetch(API_URL)
    .then(response => response.json())
    .then(data => console.log(data))
  }, []);



  

  return (
    <div className="app">
      <h1>The Winebrary</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Keep searching..."
        />
      <img
          src={SearchIcon}
          alt="search"
          onClick={() => (searchTerm) }
        />
      </div>  
    </div>
  );
};
  

export default App;
