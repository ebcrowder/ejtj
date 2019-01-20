import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Header from '../components/Header';
import styled from 'styled-components';

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

class TripDetail extends React.Component<{ id: any }, {}> {
  public render() {
    return (
      <>
        <Header />
        <Query
          query={TRIP_QUERY}
          variables={{
            id: this.props.id
          }}
        >
          {({ data, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (!data.trip) return <p>No Item Found for ID {this.props.id}</p>;
            return (
              <div>
                <p>{data.trip.name}</p>
                <p>{data.trip.city}</p>
                <p>{data.trip.state}</p>
                <p>{data.trip.country}</p>
              </div>
            );
          }}
        </Query>
      </>
    );
  }
}

export default TripDetail;
export { TRIP_QUERY };
