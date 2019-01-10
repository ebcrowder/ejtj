import * as React from 'react';
import styled from 'styled-components';

interface TripProps {
  trip: {
    name: string;
    city: string;
    state: string;
    country: string;
    dateStart: string;
    dateEnd: string;
    dream: string;
    pastEvent: string;
  };
}

const CardContainer = styled.div`
  width: 350px;
  margin: 2rem;
  background: #eeeeee;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: #311b92;
`;

const TextContainer = styled.div`
  margin: 30px;
`;

const CardImage = styled.img`
  position: relative;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const Card: React.FunctionComponent<TripProps> = props => {
  return (
    <CardContainer>
      <CardImage src="../static/mthood.jpg" />
      <TextContainer>
        <p>{props.trip.name}</p>
        <p>
          {props.trip.city}, {props.trip.state}
        </p>
        <p>{props.trip.dateStart}</p>
      </TextContainer>
    </CardContainer>
  );
};

export default Card;
