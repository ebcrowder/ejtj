import * as React from 'react';
import { Query, graphql } from 'react-apollo';
import styled from 'styled-components';

import { ALL_TRIPS_QUERY } from '../lib/queries';
import Card from './Card';

const CardsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  justify-items: center;
`;

interface CardsProps {
  isDream: boolean;
  isUpcoming: boolean;
  isPast: boolean;
}

class Cards extends React.Component<CardsProps, {}> {
  filterProps = trips =>
    trips.filter(item => item.dream || item.pastEvent || item.upcomingEvent);

  componentDidUpdate(prevProps) {
    const tripArray = [];
    console.log(prevProps.ALL_TRIPS_QUERY);
    if (this.props.isDream !== prevProps.isDream) {
      this.props.ALL_TRIPS_QUERY.refetch().then(query =>
        tripArray.push(this.filterProps(query.data.trips))
      );
    } else if (this.props.isUpcoming !== prevProps.isUpcoming) {
      this.props.ALL_TRIPS_QUERY.refetch().then(query =>
        tripArray.push(this.filterProps(query.data.trips))
      );
    } else if (this.props.isPast !== prevProps.isPast) {
      this.props.ALL_TRIPS_QUERY.refetch().then(query =>
        tripArray.push(this.filterProps(query.data.trips))
      );
    }
    return tripArray;
  }

  public render() {
    const { isDream, isUpcoming, isPast } = this.props;

    return (
      <Query query={ALL_TRIPS_QUERY}>
        {({ data, loading }) => {
          const filterData = this.filterProps(data.trips);
          if (loading) return <p>Loading...</p>;
          return (
            <>
              <CardsList>
                {filterData.map(item => (
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

export default graphql(ALL_TRIPS_QUERY, {
  name: 'ALL_TRIPS_QUERY'
})(Cards);
