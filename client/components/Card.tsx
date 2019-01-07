import * as React from 'react';

interface TripProps {
  trip: {
    name: string;
    city: string;
    country: string;
    dateStart: string;
    dateEnd: string;
    dream: string;
    pastEvent: string;
  };
}

const Card: React.FunctionComponent<TripProps> = props => {
  return (
    <>
      <p>{props.trip.name}</p>
      <p>{props.trip.city}</p>
      <p>{props.trip.country}</p>
      <p>{props.trip.dateStart}</p>
      <p>{props.trip.dateEnd}</p>
      <p>{props.trip.dream}</p>
      <p>{props.trip.pastEvent}</p>
    </>
  );
};

export default Card;
