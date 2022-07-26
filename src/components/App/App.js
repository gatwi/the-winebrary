import React, { useEffect, useState } from "react";
import CocktailsCard from "../Items/CocktailsCard";
import Navbar from "../NavBar/Navbar";
import Home from "../Home/Home";
import Search from "../Search/Search";
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

    
  };

  useEffect(() => {
    searchCocktails("");
  }, []);

  return (
    <div className="app">
      <h1>The Winebrary</h1>
      <Router>
        <div>
         <Navbar/>
        </div>
       <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/search" element={<Search/>}></Route>
       </Routes>
     </Router>
 
      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a book and a drink"
        />
        {/* <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchCocktails(searchTerm)}
        /> */}
      </div>

        <div className="container">
          {cocktails.map((cocktails) => (
            <CocktailsCard cocktails={cocktails} />
          ))}
        </div>
    </div>
  );
};
  

export default App;
