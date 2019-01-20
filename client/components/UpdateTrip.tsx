import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Header from '../components/Header';

const TRIP_QUERY = gql`
  query TRIP_QUERY($id: ID!) {
    trip(where: { id: $id }) {
      id
      name
      city
      state
      country
      dateEnd
      dateStart
      dream
      pastEvent
      image
      notes
    }
  }
`;

const UpdateTrip = props => {
  return (
    <Query
      query={TRIP_QUERY}
      variables={{
        id: props.id
      }}
    >
      {({ data, loading }) => {
        if (loading) return <p>loading...</p>;
        return (
          <div>
            <p>{data.trip.name}</p>
            <p>{data.trip.city}</p>
            <p>{data.trip.country}</p>
            <p>{data.trip.state}</p>
          </div>
        );
      }}
    </Query>
  );
};
