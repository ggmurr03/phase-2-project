import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import ItemCard from './ItemCard';



const ShopPage = () => {

const [items, setItems] = useState([])

useEffect(()=>{
    fetch("http://localhost:3000/items")
    .then(resp=>resp.json())
    .then(data => setItems(data))
    .catch(error=>console.error(error))
}, [])

const addItem = newItem => {
    setItems([...items, newItem]);
}

    return (
        <div>
            <header><NavBar /></header>
            <h1>Shop</h1>
            <p>Find items to broker, journeyman.</p>
            <ul>
                {items.map(item => <ItemCard key= {item.id} name={item.name} image={item.image} description={item.description} seller={item.seller}/>)}
            </ul>
            
        </div>
    );
}

export default ShopPage;
