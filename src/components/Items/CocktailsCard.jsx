import React from "react";

const CocktailsCard = ({ cocktail }) => {
    return (
        <div className="cocktail">
            <div>
             <p>{cocktail.idDrink}</p>
            </div>

            <div>
             <img src={cocktail.strDrinkThumb} alt={cocktail.idDrink}/>
            </div>

            <div>
             <h3>{cocktail.strDrink}</h3>
            </div>

        </div>
    );
}

export default CocktailsCard;