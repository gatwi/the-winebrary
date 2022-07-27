import React, { useState, useEffect } from "react";
import CocktailsCard from "../Catalogue/CocktailsCard";
import Navbar from "../NavBar/Navbar";
import Home from "../Home/Home";
import Catalogue from "../Catalogue/Catalogue";
import Search from "../Search/Search";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./../../App.css";
import SearchIcon from "./../../search.svg";
import BooksCard from "../Catalogue/BooksCard";


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
        <Route exact path="/catalogue" element={<Catalogue/>}></Route>
      </Routes>

      <div className="app">
        <h1>The Winebrary</h1>
      </div>
      <div className="container">
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
      </div>

      <div className="container-fluid">
       <BooksCard bookTitle="The Book Thief" bookId="1" bookAuthor="Markus Zukas" bookUrl="https://images-na.ssl-images-amazon.com/images/I/91pZEozf9qL.jpg" />
      </div>

      <div className="container-fluid">
        <CocktailsCard idDrink="14272" strDrink="Addison Special" strDrinkThumb="https:\/\/www.thecocktaildb.com\/images\/media\/drink\/4vo5651493068493.jpg" />
      </div>
    </Router>
  )
     

};
  

export default App;
