import * as React from 'react';
import { Query } from 'react-apollo';
import { TRIP_QUERY } from '../lib/queries';

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
