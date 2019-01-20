import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Header from '../components/Header';
import styled from 'styled-components';
import { ALL_TRIPS_QUERY } from '../components/Cards';

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
  state = {
    activeProject: 0,
    id: ''
  };

  public componentDidMount() {
    this.setState({
      id: this.props.id
    });
  }

  public handleNextTrip = trips => {
    const arr = trips.length;
    console.log('tripslength', arr);
    const index: any = this.state.activeProject + 1;
    const indexPosition = index % arr;

    this.setState(
      {
        activeProject: indexPosition,
        id: trips[indexPosition].id
      },
      () => console.log('state changed to', this.state)
    );
  };

  public handlePrevTrip = trips => {
    const arr = trips.length;
    const idx = this.state.activeProject;

    console.log('initial: ' + idx);

    if (idx === 0) {
      const idx = arr - 1;
    } else {
      const idx = idx - 1;
    }

    console.log('updated: ' + idx);

    this.setState({
      activeProject: idx,
      name: data[idx].name
    });
  };

  public render() {
    return (
      <>
        <Header />
        <Query query={ALL_TRIPS_QUERY}>
          {({ data: { trips }, loading: loadingAllTrips }) => (
            <Query
              query={TRIP_QUERY}
              variables={{
                id: this.props.id
              }}
            >
              {({ data: { trip }, loading: loadingTrip }) => {
                if (loadingTrip || loadingAllTrips) return <p>loading...</p>;

                return (
                  <div>
                    <p>{trip.id}</p>
                    <p>{trip.name}</p>
                    <p>{trip.city}</p>
                    <p>{trip.state}</p>
                    <button onClick={() => this.handlePrevTrip(trips)}>
                      previous
                    </button>
                    <button onClick={() => this.handleNextTrip(trips)}>
                      next
                    </button>
                  </div>
                );
              }}
            </Query>
          )}
        </Query>
      </>
    );
  }
}

export default TripDetail;
export { TRIP_QUERY };
