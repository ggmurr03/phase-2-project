import React from 'react';

const SellerCard = ({name, image, biography}) => {
    return (
     <li>
        <h2>{name}</h2>
        <img src={image} />
        <p>{biography}</p>

    </li>
    );
}

export default SellerCard;
