import React, { useState, useEffect, useContext } from "react";
import { BookContext, BookProvider } from "../Context/bookContext";
import StarRating from "./StarRating";


function BooksCard({addToFavorites}){
    const [books, setBooks] = useState([]);
    const [isRead, setIsRead] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const {cart, dispatchUserEvent}= useContext(BookContext)
    console.log(cart)

    useEffect(() => {
        fetch("http://localhost:3000/books")
        .then((r) => r.json())
        .then((books) => {
            setBooks(books)
        });
    }, []);

    const addCartItem = (book) => {
        dispatchUserEvent("ADD_TO_CART", book)
    } 

    
    const booksList = books.map((book) => (
        <div className="card-grid" style={{width: 40 + 'rem'}}>
            <img src={book.Url} className="card-img-top" alt={book.Title}/>
            <div className="card-body">
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


