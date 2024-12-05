import React, { useState } from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`
  padding-top: 20px;
  font-family: Uncial Antiqua, cursive;
  font-size: 20px;
`

const Search = ({ items, setItems, originalItems }) => {
  const [searchTerm, setSearchTerm] = useState("")

  function handleSearch(event) {
    const targetValue = event.target.value
    setSearchTerm(targetValue)

    
    if (targetValue === "") {setItems(originalItems)
    } else {setItems(originalItems.filter(item => item.name.toLowerCase().includes(targetValue.toLowerCase())))
    }
  }

  return (
    <StyledDiv>
      <label htmlFor="search">Search Items:</label>
      <div></div>
      <input
        type="text"
        id="search"
        placeholder="Type an item name to search..."
        onChange={handleSearch}
        value={searchTerm}
      />
    </StyledDiv>
  );
};

export default Search;




