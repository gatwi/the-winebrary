import React from "react";
import { Link } from "react-router-dom";

function BooksCard({books: {Title, bookThumbnail, Author, Year, bookId }}){
    return(
        <div className="card" style={{width: 18 + 'rem'}}>
            <img src={bookThumbnail} className="card-img-top" alt={Title}/>
            <div className="card-body">
              <h5 className="card-title">{Author}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to={`/books/${bookId}`} className="btn btn-primary">Go somewhere</Link> 
            </div>
        </div>
    )
}

export default BooksCard;





