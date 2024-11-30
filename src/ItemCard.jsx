import React from 'react';

const ItemCard = ({name,image,description,seller}) => {
    return (
        <li>
            <h2>{name}</h2>
            <img src={image} />
            <p>{description}</p>
            <p>{seller}</p>
            <button>Broker Item</button>

        </li>
    );
}

export default ItemCard;
