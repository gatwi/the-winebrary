import React, { useContext } from 'react'
import { BookContext } from "../Context/bookContext";


export default function Cart() {
    const {cart, addCartItem}= useContext(BookContext)
    console.log(cart)
  return (
    <div className="container">
        <div className="row">
            <div className="col">
                Item
            </div>
            <div className="col">
                Quantity
            </div>
            <div className="col">
                 Amount
            </div>
        </div>
    </div>
    // <div>{cart.map(item => (
    //     <>
    //     <p>{item.Title}</p>
    //     <p>{item.Price}</p>
    //     </>
    // ))}</div>
  )
}


// total amount calculated and passed to context
// update item quantity
// update total amount once quantity changes
 // re-direct to payments-new component
 