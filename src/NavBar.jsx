import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  font-family: Uncial Antiqua, cursive;
  font-size: 20px;
`
const StyledNavButton = styled.span`
  border: ridge 4px #333;
  border-radius: 10px;
  padding: 5px 50px;
  &:hover{
    color: white;
    background: #bfbfbf;
  }
`

const NavBar = () => {
    return (
        <StyledNav>
      <NavLink to="/"><StyledNavButton>Home</StyledNavButton></NavLink>
      <NavLink to="/sellers"><StyledNavButton>Sellers</StyledNavButton></NavLink>
      <NavLink to="/shop"><StyledNavButton>Shop</StyledNavButton></NavLink>
      <NavLink to="/cart"><StyledNavButton>Cart</StyledNavButton></NavLink>
        </StyledNav>
    );
}

export default NavBar;
