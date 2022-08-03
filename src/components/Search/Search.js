import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
    const [searchOptions, setSearchOptions] = useState("books")
    const [search, setSearch] = useState("")
    const [books, setBooks] = useState([])
    const [drinks, setDrinks] = useState([])



    useEffect(() => {
      fetch(`https://tourmaline-pretty-crib.glitch.me/${searchOptions}`)
        .then(res => res.json())
        .then(data => {
          if(searchOptions === 'drinks'){
            setDrinks(data)
          }else if(searchOptions === 'books'){
            setBooks(data)
          }
        })
    }, [searchOptions])

    const getBooks = () =>{
      if(searchOptions === "books"){
        const booksList = books.filter((val)=>{
          if(search === ""){
              return val;
          }else if(val.Title.toLowerCase().includes(search.toLowerCase())){
              return val;
          }
        }).map((book)=>(
          <h4 key={book.Author}>{book.Title}</h4>  
        ))
        return booksList
      }
    }

    const getDrinks = () =>{
      if(searchOptions === "drinks"){
        const drinksList = drinks.filter((val)=>{
          if(search === ""){
              return val;
          }else if(val.strDrink.toLowerCase().includes(search.toLowerCase())){
              return val;
          }
        }).map((drink)=>(
          <h4 key={drink.idDrink}>{drink.strDrink}</h4>
        ))
        return drinksList
      }
    }

    return (
      <div className="container">
        <div className="dropdown">
        <select type="button" className="btn btn-secondary" value={searchOptions} onChange={(e)=>setSearchOptions(e.target.value)} id="searchOptions" name="searchOptions">
          <option value="books">Books</option>
          <option value="drinks">Drinks</option>
        </select>
        </div>
        <input
          type="text"
          placeholder={"Search Items"}
          onChange={(e)=>setSearch(e.target.value)}
        />
          <h1>Catalogue Items</h1>
          {searchOptions === "books"?getBooks():getDrinks()}
      </div>
    
    
    
  );
};

  
  

export default Search;



