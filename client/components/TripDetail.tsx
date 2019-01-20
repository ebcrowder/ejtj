import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
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

class TripDetail extends React.Component<{}, {}> {
  public render() {
    console.log('TripDetail props', this.props);
    return (
      //   <Query
      //     query={TRIP_QUERY}
      //     variables={{
      //       id: this.props.id
      //     }}
      //   >
      //     {({ data, loading }) => {
      //       if (loading) return <p>Loading...</p>;
      //       if (!data.item) return <p>No Item Found for ID {this.props.id}</p>;
      //       return (
      //         <div>
      //           {/* <p>{data.item.name}</p>
      //           <p>{data.item.city}</p>
      //           <p>{data.item.state}</p>
      //           <p>{data.item.country}</p> */}
      //           hi
      //         </div>
      //       );
      //     }}
      //   </Query>
      // );
      <div>
        <p>hello</p>
      </div>
    );
  }
}

export default TripDetail;
export { TRIP_QUERY };
