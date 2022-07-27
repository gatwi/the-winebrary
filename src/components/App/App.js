import React, { useState, useEffect } from "react";
import CocktailsCard from "../Catalogue/CocktailsCard";
import Navbar from "../NavBar/Navbar";
import Home from "../Home/Home";
import Search from "../Search/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./../../App.css";
import SearchIcon from "./../../search.svg";
import BooksCard from "../Catalogue/BooksCard";

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

      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/" element={<Catalogue/>}></Route>
      </Routes>

    </Router>
  )
     

};
  

export default App;
