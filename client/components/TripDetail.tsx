import * as React from 'react';
import { Query } from 'react-apollo';
import Header from '../components/Header';
import { ALL_TRIPS_QUERY, TRIP_QUERY } from '../lib/queries';
import UpdateTrip from '../components/UpdateTrip';

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
        <Query query={ALL_TRIPS_QUERY} ssr={false}>
          {({
            data: { trips },
            error: tripsError,
            loading: loadingAllTrips
          }) => (
            <Query
              query={TRIP_QUERY}
              variables={{
                id: this.props.id
              }}
              ssr={false}
            >
              {({ data: { trip }, error: tripError, loading: loadingTrip }) => {
                if (loadingTrip || loadingAllTrips) return <p>loading...</p>;
                if (tripsError || tripError) return 'Error!';
                return (
                  <div>
                    <UpdateTrip id={this.state.id} />
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
