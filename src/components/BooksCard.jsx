import React, { useState, useEffect } from "react";


function BooksCard(){
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/books")
        .then((r) => r.json())
        .then((books) => setBooks(books));
    }, [books]);

    const booksList = books.map((book) => (
        <div className="card" style={{width: 40 + 'rem'}}>
            <img src={book.Url} className="card-img-top" alt={book.Title}/>
            <div className="card-body">
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    ))

    
    return(
        <div>
            <ul>
                {booksList}
            </ul>
        </div>
    ) 

}


export default BooksCard;





