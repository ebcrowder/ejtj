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

const LinkList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  a {
    padding: 1rem;
    align-items: center;
    font-size: 1em;
    text-decoration: none;
    border: 0;
    color: #311b92;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Logo = styled.img`
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const Header = () => (
  <NavbarContainer>
    <Link prefetch={true} href="/">
      <Logo src="../static/logo.svg" />
    </Link>
    <LinkList>
      <Link prefetch={true} href="/admin">
        <a>Admin</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </LinkList>
  </NavbarContainer>
);

export default Header;
