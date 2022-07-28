import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function BooksCard({bookId, bookTitle, bookAuthor, bookUrl}){
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/books")
        .then((r) => r.json())
        .then((books) => console.log(books));
    }, []);

    
    return(
        <div className="card" style={{width: 18 + 'rem'}}>
            <img src={bookUrl} className="card-img-top" alt={bookAuthor}/>
            <div className="card-body">
              <h5 className="card-title">{bookTitle}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to={`/books/${bookId}`} className="btn btn-primary">Grab a book</Link>
            </div>
        </div>
    )
}

export default BooksCard;





