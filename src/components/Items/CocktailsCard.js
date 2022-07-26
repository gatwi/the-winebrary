import React from "react";

 const CocktailsCard = ({ cocktails: { drinks, idDrink, strDrink, strDrinkThumb} }) => {
    return (
        <div className="cocktails" key={idDrink}>
            <div>
                <img src={strDrinkThumb} alt={drinks} />
            </div>
            <div>
                <span>{idDrink}</span>
                <h3>{strDrink}</h3>
            </div>
        </div>
    )
 }

export default CocktailsCard;