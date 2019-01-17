import * as React from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon';

const IconsWrapper = styled.div`
  display: grid;
  grid-template-columns: 120px 120px 120px;
  margin: 1rem;
`;

const Icons: React.FunctionComponent<{}> = () => {
  return (
    <IconsWrapper>
      <Icon label="Dreams" iconColor="#00BFA5" />
      <Icon label="Upcoming" iconColor="#F50057" />
      <Icon label="Past Trips" iconColor="#6200EA" />
    </IconsWrapper>
  );
};

export default Icons;
