import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import ItemCard from './ItemCard';
import ItemForm from './ItemForm';
import Search from './Search';

const ShopPage = () => {
  const [items, setItems] = useState([])
  const [itemsForSearch, setForSearchFilter] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then(resp => resp.json())
      .then(data => {
        setItems(data)
        setForSearchFilter(data)
      })
      .catch(error => console.error(error));
  }, []);

  const itemsList = items.map(item =>
    <ItemCard
      itemId={item.id}
      name={item.name}
      image={item.image}
      description={item.description}
      seller={item.seller}
    />
  );

  return (
    <div>
      <header><NavBar /></header>
      <h1>Shop</h1>
      <p>Find items to broker, journeyman.</p>
      <ItemForm setItems={setItems} items={items} />
      <Search setItems={setItems} items={items} originalItems={itemsForSearch} />
      <ul>
        {itemsList}
      </ul>
    </div>
  );
}

export default ShopPage;