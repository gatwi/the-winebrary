import React, { createContext, useState } from 'react';


const DrinkContext = createContext()

const DrinkProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const dispatchUserEvent = (actionType, payload) => {
        switch (actionType) {
            case "ADD_TO_CART":
                setCart([...cart, payload]);
                return;
            case "REMOVE_FROM_CART":
                setCart(cart.filter(item => item.idDrink !== payload.idDrink));
                return;
        
            default:
                return;
        }
    }

    return(
        <DrinkContext.Provider value={{cart, dispatchUserEvent}}>
            {children} 
        </DrinkContext.Provider>
    )
}

export { DrinkContext, DrinkProvider };

