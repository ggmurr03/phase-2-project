import React from 'react';
import { useNavigate } from 'react-router-dom';

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
        
        fetch(`http://localhost:3000/items/${itemId}`, {
            method: "DELETE",
        })
            .then((resp) => resp.json())
            .then(() => console.log("Removed from shop"))            
            .then(()=>setItems(items.filter(i => i.id !== itemId)))
            .catch(error=>console.error(error))
    }

    return (
        <li>
            <h2>{name}</h2>
            <img src={image} />
            <p>{description}</p>
            <p>Seller: {seller}</p>
            <button onClick={handleBrokerItem}>Broker Item</button>
            <button onClick={handleRemoveItem}>Remove from Shop</button>

        </li>
    );
}

export default ItemCard;
