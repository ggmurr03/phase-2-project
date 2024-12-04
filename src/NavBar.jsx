import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  background: papayawhip;
  font-family: MedievalSharp;
  font-size:
`

const NavBar = () => {
    return (
        <StyledNav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/sellers">Sellers</NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/cart">Cart</NavLink>
        </StyledNav>
    );
}

export default NavBar;
