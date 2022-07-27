import React, { useState, useEffect } from "react";
import CocktailsCard from "../Items/CocktailsCard";
import Navbar from "../NavBar/Navbar";
import Home from "../Home/Home";
import Search from "../Search/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./../../App.css";
import SearchIcon from "./../../search.svg";
import BooksCard from "./../Items/BooksCard";

// const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail";



function App() {
  const [searchTerm, setSearchTerm] = useState("");
  

  useEffect (() => {
    fetch("http://localhost:3000/books")
    .then(response => response.json())
    .then(response => console.log(response))
  }, []);


  return (
      <Router>
        <div>
          <Navbar/>
        </div>
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
             onClick={() => {}}
            />
          </div>

          <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/" element={<Home/>}></Route>
          </Routes>

        </div>
      </Router>
   );
};
  

export default App;
