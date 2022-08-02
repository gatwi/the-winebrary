import React, { useContext, useState } from 'react'
import { BookContext } from "../Context/bookContext";
import { DrinkContext } from '../Context/drinkContext';
import Counter from './Counter';
import { Link } from "react-router-dom";


export default function Cart() {
    const {cart, addCartItem}= useContext(BookContext)
    const [counter, setCounter] = useState(1)

    let totalAmount = 0

    for(let i=0; i<cart.length;i++) {
        const itemTotal = parseInt(cart[i].Price.match(/\d+/gi).join(''))
        totalAmount += itemTotal

    }

    
    console.log(cart)
    

  return (
    <div className="container">
        <div className="row">
                    <div className="col">
                        Title
                    </div>
                    <div className="col">
                        Quantity
                    </div>
                    <div className="col">
                        Price
                    </div>
                    <div className="col">
                        Item Total
                    </div>
        </div>
        {cart.map(item => (
            <>
            <div className="row">
                    <div className="col">
                        {item.Title}
                        {item.strDrink}
                    </div>
                    <div className="col">
                       <Counter quantity={counter} changeQuantity={setCounter}/>
                    </div>
                    <div className="col">
                        {parseInt(item.Price.match(/\d+/gi).join(''))}
                    </div>
                    <div className="col">
                        {parseInt(item.Price.match(/\d+/gi).join(''))*(counter)}
                    </div>
            </div>
            </>
        ))}
        <div className='row'>
            <div className='col'>
              Total: {totalAmount}
            </div>
        </div>
        <Link to="/register" className="btn btn-success">Check Out</Link>
    </div>
  )
}


// total amount calculated and passed to context
// update item quantity
// update total amount once quantity changes
 // re-direct to payments-new component
 