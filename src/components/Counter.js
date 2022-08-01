import React from 'react'

function Counter({quantity, changeQuantity}) {
    let count = 1
    const increment = () => {
        changeQuantity(parseInt(quantity++))
    }
    const decrement = () => {
        changeQuantity(parseInt(quantity--))
    }
  return (
    <div>
        <button type="button" className="btn btn-info" onClick={increment}>+</button>
        <span>{quantity}</span>
        <button type="button" className="btn btn-info" onClick={decrement}>-</button>
    </div>
  )
}

export default Counter