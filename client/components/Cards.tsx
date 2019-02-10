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
    tripData: []
  };

  public componentDidMount() {
    const tripData = this.props.ALL_TRIPS_QUERY.trips;
    this.setState({ tripData });
  }

  public filterProps = (trips, props) => trips.filter(item => item[props]);

  public componentDidUpdate(prevProps) {
    const { tripData } = this.state;
    const { isDream, isPast } = this.props;
    if (isDream !== prevProps.isDream) {
      const filteredData = this.filterProps(tripData, 'dream');
      this.setState({ tripData: filteredData });
    } else if (isPast !== prevProps.isPast) {
      const filteredData = this.filterProps(tripData, 'pastEvent');
      this.setState({ tripData: filteredData });
    }
    // else if (this.props.isUpcoming !== prevProps.isUpcoming) {
    //   this.props.ALL_TRIPS_QUERY.refetch().then(query =>
    //     tripArray.push(this.filterProps(query.data.trips))
    //   );
    // }
  }

  public render() {
    const { tripData } = this.state;

    return (
      <Query query={ALL_TRIPS_QUERY}>
        {({ data, loading }) => {
          if (loading) return <p>Loading...</p>;
          return (
            <>
              <CardsList>
                {tripData.map(item => (
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
