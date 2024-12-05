import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  background-color: #f4f4f9*;
  font-family: Uncial Antiqua, cursive;
  font-size: 20px;
  padding-top: 20px;
  padding-bottom: 30px;
`
const StyledNavButton = styled.span`
  border: ridge 4px #333;
  border-radius: 10px;
  padding: 5px 50px;
  &:hover{
    color: white;
    background: #8c8c8c;
    border: ridge 4px gold;
  }
  background: #bfbfbf
`

const NavBar = () => {
    return (
        <StyledNav>
      <NavLink to="/"><StyledNavButton>Home</StyledNavButton></NavLink>
      <NavLink to="/shop"><StyledNavButton>Shop</StyledNavButton></NavLink>
      <NavLink to="/sellers"><StyledNavButton>Sellers</StyledNavButton></NavLink>
      <NavLink to="/cart"><StyledNavButton>Cart</StyledNavButton></NavLink>
        </StyledNav>
    );
}

export default NavBar;
