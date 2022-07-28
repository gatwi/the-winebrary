import React, { useState, useEffect } from "react";
import CocktailsCard from "../Catalogue/CocktailsCard";
import Navbar from "../NavBar/Navbar";
import Home from "../Home/Home";
import Catalogue from "../Catalogue/Catalogue";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./../../App.css";
import BooksCard from "../Catalogue/BooksCard";


function App() {
  
  

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
        <Route exact path="/books" element={<BooksCard/>}></Route>
        <Route exact path="/drinks" element={<CocktailsCard/>}></Route>
      </Routes>

      
      

      
    </Router>
  )
     

};
  

export default App;
