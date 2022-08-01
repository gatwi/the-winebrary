import React, { useState, useEffect } from "react";
import CocktailsCard from "../CocktailsCard";
import Navbar from "../NavBar/Navbar";
import Home from "../Home/Home";
import Catalogue from "../Catalogue/Catalogue";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./../../App.css";
import BooksCard from "../BooksCard";
import SignUp from "../Sign-Up/SignUp";
import { BookProvider } from "../../Context/bookContext";
import Cart from "../Cart";



function App() {
  


  return (
    <Router>
      <div>
        <Navbar/>
      </div>

      <BookProvider>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/catalogue" element={<Catalogue/>}></Route>
          <Route exact path="/books" element={<BooksCard/>}></Route>
          <Route exact path="/drinks" element={<CocktailsCard/>}></Route>
          <Route exact path="/register" element={<SignUp/>}></Route>
          <Route exact path="/shopping" element={<Cart/>}></Route>
        </Routes>
      </BookProvider>

      
    
      
    </Router>
  )
     

};
  

export default App;
