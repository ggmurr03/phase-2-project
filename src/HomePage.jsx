import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';

const StyledH1 = styled.h1`
    font-family: Uncial Antiqua, cursive;
    font-size: 48px;
    padding-bottom: 10px;
`
const StyledDiv = styled.div`
    text-align: center;
`
const StyledP = styled.p`
    width: 50%;
    margin: auto;
    font-family: Uncial Antiqua, cursive;
    font-size: 16px;
    padding-top: 30px
`

const StyledHomePageImg = styled.img`
    max-width: 700px;
    border: ridge 5px gold;
`
const HomePage = () => {
    return (
        <div>
            <NavBar />
            <StyledDiv>
                <StyledH1>Welcome, Wanderer</StyledH1>
                <StyledHomePageImg src="https://cdn.pixabay.com/photo/2020/08/12/05/35/wizard-5481653_1280.jpg" alt="Wanderer"/>
                <StyledP className="welcome-text">You are the Wanderer, a mage and trade broker who travels the world. You have set up shop in Midgar to buy and sell on behalf of prolific characters known far and wide for their bravery and treasure.</StyledP>
            </StyledDiv>
        </div>
    );
}

export default HomePage;
