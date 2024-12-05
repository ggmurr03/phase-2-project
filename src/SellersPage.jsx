import React from 'react';
import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import SellerCard from './SellerCard';
import SellerForm from './SellerForm';
import styled from "styled-components";

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


const SellersPage = () => {
    const [sellers, setSellers] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/characters")
        .then(resp=>resp.json())
        .then(data => setSellers(data))
        .catch(error=>console.error(error))
    }, [])
        return (
            <div>
                <header><NavBar /></header>
                <StyledDiv>
                    <StyledH1>Sellers</StyledH1>
                    <StyledP>Get to know the sellers.</StyledP>
                    <SellerForm sellers={sellers} setSellers={setSellers} />
                    <ul>
                        {sellers.map(seller => <SellerCard key= {seller.id} name={seller.name} image={seller.image} biography={seller.biography}/>)}
                    </ul>
                </StyledDiv>
            </div>
        );
}

export default SellersPage;
