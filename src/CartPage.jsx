import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import styled from "styled-components";

const StyledH1 = styled.h1`
    font-family: Uncial Antiqua, cursive;
    font-size: 48px;
`
const StyledDiv = styled.div`
    text-align: center;
`
const StyledP = styled.p`
    width: 50%;
    margin: auto;
    font-family: Uncial Antiqua, cursive;
    font-size: 26px;
    padding-top: 15px
`

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
      <StyledDiv>
        <StyledH1>Shopping Cart</StyledH1>
        {cartItems.length === 0 ? (
          <StyledP>Your cart is empty.</StyledP>
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
      </StyledDiv>
    </div>
  )
}

export default CartPage;
