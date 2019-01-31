import * as React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';

import { ALL_TRIPS_QUERY } from '../lib/queries';
import Card from './Card';

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
