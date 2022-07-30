import React, { useState, useEffect } from "react";
import StarRating from "./StarRating";



const cocktails_url = "http://localhost:3000/drinks"

function CocktailsCard() {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        fetch(cocktails_url)
        .then((response) => response.json())
        .then((data) => setDrinks(data))
    }, []);

    const drinksList = drinks.map((drink) => (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" style={{width: 18 + 'rem'}}>
            <img src={drink.strDrinkThumb} className="card-img-top" alt={drink.strDrink}/>
            <div className="card-body">
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <StarRating />
             <button className="btn btn-success">Add to Cart</button>
            </div>
        </div>
    ))



    return(
        <div>
            {drinksList}
        </div>
    )
}


export default CocktailsCard;