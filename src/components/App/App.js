import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/Navbar";
import Home from "../Home/Home";
import Search from "../Search/Search";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


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

    console.log(data.Search);
  }
  useEffect(() => {
    searchCocktails("");
  }, []);

  return (
    <Router>
      <div>
       <Navbar/>
      </div>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/search" element={<Search/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
