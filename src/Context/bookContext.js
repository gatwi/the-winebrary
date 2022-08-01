import React, { createContext, useState } from "react";

const BookContext = createContext()

const BookProvider = ({children}) => {
    const [cart, setCart] = useState([])

    // cart stuff!!
    // we want to add items to cart
    // be able to remove items from cart
    // calculate cart total
   
    const dispatchUserEvent = (actionType, payload) => {
        switch (actionType) {
            case "ADD_TO_CART":
                setCart([...cart, payload]);
                return;
            case "REMOVE_FROM_CART":
                setCart(cart.filter(item => item.id !== payload.id));
                return;
        
            default:
                return;
        }
    }
// child inherits the state, variables, data or functions of the parent component.
    
    return(
        <BookContext.Provider value={{cart, dispatchUserEvent}}>
            {children} 
        </BookContext.Provider>
    )
}

export { BookContext, BookProvider };