import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import NavBar from './NavBar';
import ItemCard from './ItemCard';
import ItemForm from './ItemForm';
import Search from './Search';

const StyledDiv = styled.div`
    text-align: center;
`

const StyledH1 = styled.h1`
    font-family: Uncial Antiqua, cursive;
    font-size: 48px;
`
const StyledP = styled.p`
    font-family: Uncial Antiqua, cursive;
    font-size: 26px;
    padding-bottom: 10px
`

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
      key={item.id}
      itemId={item.id}
      name={item.name}
      image={item.image}
      description={item.description}
      seller={item.seller}
      items={items}
      setItems={setItems}
    />
  );

  return (
    <div>
      <header><NavBar /></header>
      <StyledDiv>
        <StyledH1>Shop</StyledH1>
        <StyledP>Find items to broker, journeyman.</StyledP>
        <ItemForm setItems={setItems} items={items} />
        <Search setItems={setItems} items={items} originalItems={itemsForSearch} />
        <ul>
          {itemsList}
        </ul>
      </StyledDiv>
    </div>
  );
}

export default ShopPage;