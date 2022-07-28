import React from "react";
import BooksCard from "./BooksCard";
import CocktailsCard from "./CocktailsCard";
import { Link } from "react-router-dom";

function Catalogue(){
    return(
        <div>
            <div className="card-grid">
                <div className="container-fluid">
                 <BooksCard  bookUrl="https://static01.nyt.com/images/2020/04/24/realestate/28fix-books1/oakImage-1587754626784-articleLarge.jpg?quality=75&auto=webp&disable=upscale" />
                 <Link to="/books" className="btn btn-primary">Grab a book</Link>
                </div>

                <div className="container-fluid">
                 <CocktailsCard idDrink="" strDrink="" strDrinkThumb="https://media.istockphoto.com/photos/five-cocktails-in-hands-joined-in-celebratory-toast-picture-id1303977605?k=20&m=1303977605&s=612x612&w=0&h=wTyWaQa6mA9QupfqnvoY-sEWdkTWPVy5-w7z9kRALBA=" />
                 <Link to="/drinks" className="btn btn-primary">I'll drink to that</Link>
                </div>
            </div>
        </div>
    )
}

export default Catalogue;