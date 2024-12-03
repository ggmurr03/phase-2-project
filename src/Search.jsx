import React, {useState} from 'react';

const Search = ({items, setItems}) => {
    const [searchTerm, setSearchTerm] = useState("")

    function handleSearch(event, items){
        setSearchTerm (event.target.value)
        setItems(items.filter(item=>item.name.toLowerCase().includes(searchTerm.toLowerCase())))
    }

    return (
        <div>
        <label htmlFor="search">Search Items:</label>
         <input
           type="text"
           id="search"
           placeholder="Type an item name to search..."
           onChange={(event)=> handleSearch(event, items)}
           value={searchTerm}
         />
            
        </div>
    );
}

export default Search;



