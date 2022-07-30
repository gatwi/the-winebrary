import React, { useState, useEffect } from "react";
import CocktailsCard from "../CocktailsCard";
import Navbar from "../NavBar/Navbar";
import Home from "../Home/Home";
import Catalogue from "../Catalogue/Catalogue";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./../../App.css";
import BooksCard from "../BooksCard";
import SignUp from "../Sign-Up/SignUp";



function App() {
  


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
        <Route exact path="/register" element={<SignUp/>}></Route>
      </Routes>

      
    
      
    </Router>
  )
     

};
  

export default App;
