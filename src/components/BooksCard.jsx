import React, { useState, useEffect } from "react";
import StarRating from "./StarRating";


function BooksCard({addToFavorites}){
    const [books, setBooks] = useState([]);
    const [isRead, setIsRead] = useState(false)

    useEffect(() => {
        fetch("http://localhost:3000/books")
        .then((r) => r.json())
        .then((books) => setBooks(books));
    }, [books]);

    const booksList = books.map((book) => (
        <div className="card-grid" style={{width: 40 + 'rem'}}>
            <img src={book.Url} className="card-img-top" alt={book.Title}/>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <StarRating />
                <button className="btn btn-success" onClick={() => setIsRead(!isRead)} >
                    Mark as {isRead ? "unread" : "read" }
                </button>
                <button className="btn btn-dark" onClick={() => addToFavorites(book)}>
                    {book.isFavorite ? "Unfavorite" : "♥ Favorite"}
                </button>
                <button className="btn btn-primary btn-block">Add to Cart</button>
            </div>
        </div>
    ))

    
    return(
        <div>
            <ul>
                {booksList}
            </ul>
        </div>
        
    );
};

export default BooksCard;


