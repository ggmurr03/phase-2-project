import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    console.log("CartPage render")
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || []
    setCartItems(storedCartItems)
  }, [])


  return (
    <div >
      <header><NavBar /></header>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <img src={item.image} alt={item.name} />
              <p>{item.description}</p>
              <p>Seller: {item.seller}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CartPage;
