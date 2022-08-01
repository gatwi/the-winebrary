import React, { useState, useEffect, useContext } from "react";
import { DrinkContext } from "../Context/drinkContext";
import StarRating from "./StarRating";



function CocktailsCard({addToFavorites}) {
    const [drinks, setDrinks] = useState([]);
    

    const {cart, dispatchUserEvent}= useContext(DrinkContext)
    console.log(cart)
    

    useEffect(() => {
        fetch("http://localhost:3000/drinks")
        .then((response) => response.json())
        .then((drinks) => {
            setDrinks(drinks)
        });
    }, []);

    const addCartItem = (drink) => {
        dispatchUserEvent("ADD_TO_CART", drink)
    } 

    const drinksList = drinks.map((drink) => (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4" style={{width: 18 + 'rem'}}>
            <img src={drink.strDrinkThumb} className="card-img-top" alt={drink.strDrink}/>
            <div className="card-body">
                <p className="card-text">{drink.strDrink}</p>
                <StarRating />
                <button className="btn btn-dark" onClick={() => addToFavorites(drink)}>
                    {drink.isFavorite ? "Unfavorite" : "♥ Favorite"}
                </button>
                <button onClick={() => addCartItem(drink)} className="btn btn-primary">Add to Cart</button>
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