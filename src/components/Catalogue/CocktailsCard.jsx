import React, { useState, useEffect } from "react";



const cocktails_url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"

function CocktailsCard({idDrink, strDrink, strDrinkThumb}) {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        fetch(cocktails_url)
        .then((response) => response.json())
        .then((data) => setDrinks(data.drinks))
    }, []);



    

    return(
        <div className="card-grid" style={{width: 18 + 'rem'}}>
            <img src={strDrinkThumb} className="card-img-top" alt={strDrink}/>
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                {drinks.map((drinks) => (<CocktailsCard drinks={drinks} />))}
            </div>
        </div>
    )
}


export default CocktailsCard;