import React, { useState } from 'react';

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
    <div>
      <label htmlFor="search">Search Items:</label>
      <input
        type="text"
        id="search"
        placeholder="Type an item name to search..."
        onChange={handleSearch}
        value={searchTerm}
      />
    </div>
  );
};

export default Search;




