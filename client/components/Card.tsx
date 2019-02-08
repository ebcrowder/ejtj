import * as React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface TripProps {
  trip: {
    id: string;
    name: string;
    city: string;
    state: string;
    country: string;
    dateStart: string;
    dateEnd: string;
    dream: string;
    pastEvent: string;
    image: string;
  };
}

const CardContainer = styled.div`
  width: 350px;
  margin: 2rem;
  background: #eeeeee;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25), 0 6px 20px 0 rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: #311b92;
`;

const TextContainer = styled.div`
  margin: 30px;
`;

const CardImage = styled.img`
  position: relative;
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  border-radius: 5px;
`;

const Card: React.FunctionComponent<TripProps> = props => {
  return (
    <CardContainer>
      <Link
        href={{
          pathname: '/update',
          query: { id: props.trip.id }
        }}
      >
        <CardImage src={props.trip.image} />
      </Link>

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
