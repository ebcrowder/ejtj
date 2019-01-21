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
      ssr={false}
    >
      {({ data: { trip }, error, loading }) => {
        if (loading) return <p>loading...</p>;
        if (error) return `Error!: ${error}`;
        return (
          <div>
            <p>{trip.name}</p>
            <p>{trip.city}</p>
            <p>{trip.country}</p>
            <p>{trip.state}</p>
          </div>
        );
      }}
    </Query>
  );
};

export default UpdateTrip;
