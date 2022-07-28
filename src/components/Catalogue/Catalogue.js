import React from "react";
import BooksCard from "./BooksCard";
import CocktailsCard from "./CocktailsCard";

function Catalogue(){
    return(
        <div>
            <div className="card-grid">
                <div className="container-fluid">
                 <BooksCard bookTitle="" bookId="" bookAuthor="" bookUrl="" />
                </div>

                <div className="container-fluid">
                 <CocktailsCard idDrink="" strDrink="" strDrinkThumb="" />
                </div>
            </div>
        </div>
    )
}

export default Catalogue;