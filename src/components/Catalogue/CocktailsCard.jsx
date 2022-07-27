import React from "react";
import { Link } from "react-router-dom";

function CocktailsCard({idDrink, strDrink, strDrinkThumb}) {
    return(
        <div className="card" style={{width: 18 + 'rem'}}>
            <img src={strDrinkThumb} className="card-img-top" alt={idDrink}/>
            <div className="card-body">
                <h5 className="card-title">{strDrink}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Link to={`/cocktail/${strDrink}`} className="btn btn-primary">I'll drink to that</Link>
            </div>
        </div>
    )
}


export default CocktailsCard;