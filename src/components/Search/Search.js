import React, { useEffect, useState } from "react";

const Search = () => {
    const [search, setSearch] = useState("")
    const [books, setBooks] = useState([])
    const [drinks, setDrinks] = useState([])


    useEffect(() => {
        fetch('http://localhost:3000/books')
          .then(res => res.json())
          .then(book => setBooks(book))
      }, [])                                         

  const booksList = books.filter((val)=>{
    if(search === ""){
        return val;
    }else if(val.title.toLowerCase().includes(search.toLowerCase())){
        return val;
    }
  }).map((book)=>(
    <h3 key={book.Author}>{book.Title}</h3>
    
  ))
  return (
    <div>
      {booksList}
    </div>
  );
};

export default Search;




