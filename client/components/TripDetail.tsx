import * as React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Header from '../components/Header';
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
  public state = {
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
    const index = this.state.activeProject + 1;
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
    const index = this.state.activeProject - 1;
    const indexPosition = index % arr;

    if (this.state.activeProject === 0) {
      return;
    } else {
      this.setState(
        {
          activeProject: indexPosition,
          id: trips[indexPosition].id
        },
        () => console.log('state changed to', this.state)
      );
    }
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
