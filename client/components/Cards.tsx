import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';

import Card from './Card';

const ALL_TRIPS_QUERY = gql`
  query ALL_TRIPS_QUERY {
    trips {
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

const CardsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  justify-items: center;
`;

class Cards extends React.Component<{}, {}> {
  public render() {
    return (
      <Query query={ALL_TRIPS_QUERY}>
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>;
          return (
            <>
              <CardsList>
                {data.trips.map(item => (
                  <Card trip={item} key={item.id} />
                ))}
              </CardsList>
            </>
          );
        }}
      </Query>
    );
  }
}

export default Cards;
export { ALL_TRIPS_QUERY };
