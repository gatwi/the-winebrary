import React from "react";
import BooksCard from "./BooksCard";
import CocktailsCard from "./CocktailsCard";
import { Link } from "react-router-dom";

function Catalogue(){
    return(
        <div>
            <div className="card-grid">
                <div className="container-fluid">
                 <BooksCard bookTitle="" bookId="" bookAuthor="" bookUrl="" />
                </div>

                <div className="container-fluid">
                 <CocktailsCard idDrink="" strDrink="" strDrinkThumb="" />
                 <Link to="/drinks" className="btn btn-primary">I'll drink to that</Link>
                </div>
            </div>
        </div>
    )
}

export default Catalogue;