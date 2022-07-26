import React from "react";


 const CocktailsCard = ({ cocktail1 }) => {
    return (
        <div className="cocktail">
            <div>
              <p>{cocktail1.idDrink}</p>
            </div>

            <div>
             <img src={cocktail1.strDrinkThumb} alt={cocktail1.strDrink}/>
            </div>

            <div>
             <h3>{cocktail1.strDrink}</h3>
            </div>
        </div>
    );
 }


export default CocktailsCard;