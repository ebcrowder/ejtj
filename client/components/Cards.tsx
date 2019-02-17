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
  public state = {
    tripData: [],
    filters: {
      dream: true,
      past: true
    }
  };

  public componentDidMount() {
    const tripData = this.props.ALL_TRIPS_QUERY.trips;
    this.setState({ tripData });
  }

  public setFilter(category) {
    this.setState(state => ({
      /* tslint:disable:prefer-object-spread */
      filters: Object.assign({}, state.filters, {
        [category]: !state.filters[category]
      })
    }));
  }

  public componentDidUpdate(prevProps) {
    const { isDream, isPast } = this.props;

    console.log(prevProps);

    if (isDream !== prevProps.isDream) {
      this.setFilter('dream');
    } else if (isPast !== prevProps.isPast) {
      this.setFilter('past');
    }
  }

  public render() {
    const { tripData, filters } = this.state;

    return (
      <Query query={ALL_TRIPS_QUERY}>
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>;
          return (
            <>
              <CardsList>
                {tripData
                  .filter(
                    item =>
                      item.dream === filters.dream ||
                      item.pastEvent === filters.past
                  )
                  .map(item => (
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
