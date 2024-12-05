import React from 'react';
import styled from "styled-components";

const StyledCard = styled.li`
    font-family: Uncial Antiqua, cursive;
    color: #f4f4f9*;
    border: ridge 8px #333;
    background-color: #a6a6a6;
`
const StyledImg = styled.img`
    padding: 10px;
`
const StyledP = styled.p`
    width: 400px;
    margin: auto;
    padding: 10px
`

const SellerCard = ({name, image, biography}) => {
    return (
     <StyledCard>
        <h2>{name}</h2>
        <StyledImg src={image} />
        <StyledP>{biography}</StyledP>
        <div></div>
    </StyledCard>
    );
}

export default SellerCard;
