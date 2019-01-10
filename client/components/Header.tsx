import * as React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: #311b92;
`;

const ListItems = styled.ul`
  list-style-type: none;
  display: flex;
`;

const Link = styled.a`
  display: block;
  margin: 5px;
`;

const Header = () => (
  <NavbarContainer>
    <img src="../static/logo.svg" />
    <ListItems>
      <li>
        <Link>Journal</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
    </ListItems>
  </NavbarContainer>
);

export default Header;
