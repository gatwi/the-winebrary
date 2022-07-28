import React from "react";
import CocktailsCard from "../Catalogue/CocktailsCard";
import BooksCard from "../Catalogue/BooksCard";
import { Link } from "react-router-dom";


 function Home(){
    return(
        <div>
            <div className="app">
             <h1>The Winebrary</h1>
            </div>

            <div className="card-grid">
                <div className="container-fluid">
                 <BooksCard  bookUrl="https://static01.nyt.com/images/2020/04/24/realestate/28fix-books1/oakImage-1587754626784-articleLarge.jpg?quality=75&auto=webp&disable=upscale" />
                </div>
            </div><div className="card-grid">
                <div className="container-fluid">
                 <CocktailssCard  bookUrl="https://static01.nyt.com/images/2020/04/24/realestate/28fix-books1/oakImage-1587754626784-articleLarge.jpg?quality=75&auto=webp&disable=upscale" />
                </div>
            </div>
        </div>
    )
}

export default Home;