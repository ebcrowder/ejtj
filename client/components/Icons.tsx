import * as React from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon';

const IconsWrapper = styled.div`
  display: grid;
  grid-template-columns: 120px 120px 120px;
  margin: 1rem;
`;

const Icons: React.FunctionComponent<{}> = () => {
  const [isDream, setDream] = React.useState(true);
  const [isUpcoming, setUpcoming] = React.useState(true);
  const [isPast, setPast] = React.useState(true);

  return (
    <IconsWrapper>
      <Icon
        label="Dreams"
        iconColor="#00BFA5"
        onClick={() => setDream(!isDream)}
      />
      <Icon
        label="Upcoming"
        iconColor="#F50057"
        onClick={() => setUpcoming(!isUpcoming)}
      />
      <Icon
        label="Past Trips"
        iconColor="#6200EA"
        onClick={() => setPast(!isPast)}
      />
    </IconsWrapper>
  );
};

export default Icons;
