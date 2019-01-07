import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

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

class Cards extends React.Component<{}, {}> {
  render() {
    return (
      <Query query={ALL_TRIPS_QUERY}>
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error.message}</p>;
          return (
            <>
              {data.trips.map(item => (
                <Card trip={item} key={item.id} />
              ))}
            </>
          );
        }}
      </Query>
    );
  }
}

export default Cards;
export { ALL_TRIPS_QUERY };
