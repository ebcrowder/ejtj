import * as React from 'react';
import Link from 'next/link';
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

const LinkItem = styled.a`
  margin: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const Logo = styled.img`
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const Header = () => (
  <NavbarContainer>
    <Link prefetch={true} href="/admin">
      <Logo src="../static/logo.svg" />
    </Link>
    <ListItems>
      <li>
        <LinkItem>Journal</LinkItem>
      </li>
      <li>
        <LinkItem>About</LinkItem>
      </li>
    </ListItems>
  </NavbarContainer>
);

export default Header;
