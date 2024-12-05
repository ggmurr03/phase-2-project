import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const StyledCard = styled.li`
    font-family: Uncial Antiqua, cursive;
    color: gold;
    border: ridge 8px #333;
    background-color: #8c8c8c;
`
const StyledImg = styled.img`
    padding: 10px;
`

const ItemCard = ({itemId,name,image,description,seller,items,setItems}) => {

    const navigate = useNavigate()

    function handleBrokerItem(){
        const itemData = {name, image, description, seller}

        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []

        cartItems.push(itemData)

        localStorage.setItem('cartItems', JSON.stringify(cartItems))

        //navigate('/cart')
        
    }

    function handleRemoveItem(){
        fetch(`http://localhost:3000/items/${itemId.toString()}`, {
            method: "DELETE",
        })
            .then((resp) => resp.json())         
            .then(()=>setItems(items.filter(i => i.id.toString() !== itemId.toString())))
            .catch(error=>console.error(error))
    }

    return (
        <StyledCard>
            <h2>{name}</h2>
            <StyledImg src={image} />
            <p>{description}</p>
            <p>Seller: {seller}</p>
            <button onClick={handleBrokerItem}>Broker Item</button>
            <div></div>
            <button onClick={handleRemoveItem}>Remove from Shop</button>
        </StyledCard>
    );
}

export default ItemCard;
