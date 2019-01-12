import * as React from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon';

const IconsWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 150px 150px;
`;

const Icons: React.FunctionComponent<{}> = () => {
  return (
    <IconsWrapper>
      <Icon label="Dreams" color="green" />
      <Icon label="Upcoming" color="red" />
      <Icon label="Past Trips" color="purple" />
    </IconsWrapper>
  );
};

export default Icons;
