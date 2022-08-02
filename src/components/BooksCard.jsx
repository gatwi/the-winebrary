import React, { useState, useEffect, useContext } from "react";
import { BookContext } from "../Context/bookContext";
import StarRating from "./StarRating";


function BooksCard({addToFavorites}){
    const [books, setBooks] = useState([]);
    const [isRead, setIsRead] = useState(false)
    

    const {cart, dispatchUserEvent}= useContext(BookContext)
    console.log(cart)

    useEffect(() => {
        fetch("https://tourmaline-pretty-crib.glitch.me/drinks")
        .then((r) => r.json())
        .then((books) => {
            setBooks(books)
        });
    }, []);

    const addCartItem = (book) => {
        dispatchUserEvent("ADD_TO_CART", book)
    } 

    
    const booksList = books.map((book) => (
            <div className="flex-fill">
                <div className="w-100">
                    <img src={book.Url} className="" alt={book.Title} style={{width: "300px"}}/>
                </div>
                <p className="card-text">{book.Title} by {book.Author}</p>
                <StarRating />
                <button className="btn btn-success" onClick={() => setIsRead(!isRead)} >
                    Mark as {isRead ? "unread" : "read" }
                </button>
                <button className="btn btn-dark" onClick={() => addToFavorites(book)}>
                    {book.isFavorite ? "Unfavorite" : "♥ Favorite"}
                </button>
                <button onClick={() => addCartItem(book)} className="btn btn-primary btn-block">Add to Cart</button>
            </div>
            
    ))

    
    return(
        <div className="container-fluid">
            <div className="d-flex flex-wrap">
                {booksList}
            </div>
        </div>
    );
};

export default BooksCard;


