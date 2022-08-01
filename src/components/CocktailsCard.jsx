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
        <div className="flex-fill">
                <div className="w-100">
                    <img src={drink.strDrinkThumb} className="" alt={drink.strDrink} style={{width: "300px"}}/>
                </div>
                <p className="card-text">{drink.strDrink}</p>
                <StarRating />
                <button className="btn btn-dark" onClick={() => addToFavorites(drink)}>
                    {drink.isFavorite ? "Unfavorite" : "♥ Favorite"}
                </button>
                <button onClick={() => addCartItem(drink)} className="btn btn-primary btn-block">Add to Cart</button>
            </div>
    ))



    return(
        <div className="container-fluid">
            <div className="d-flex flex-wrap">
                {drinksList}
            </div>
        </div>
    )
}


export default CocktailsCard;