import * as React from 'react';
import styled from 'styled-components';
import Logo from '../static/logo.svg';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Header = () => (
  <FlexContainer>
    <ul>
      <li>
        <img src={Logo} />
      </li>
      <li>
        <a>Journal</a>
      </li>
      <li>
        <a>About</a>
      </li>
    </ul>
  </FlexContainer>
);

export default Header;
