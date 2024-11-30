import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemCard = ({name,image,description,seller}) => {

    const navigate = useNavigate()

    function handleBrokerItem(){
        const itemData = {name, image, description, seller}

        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []

        cartItems.push(itemData)

        localStorage.setItem('cartItems', JSON.stringify(cartItems))

        //navigate('/cart')
        
    }
    return (
        <li>
            <h2>{name}</h2>
            <img src={image} />
            <p>{description}</p>
            <p>{seller}</p>
            <button onClick={handleBrokerItem}>Broker Item</button>

        </li>
    );
}

export default ItemCard;
