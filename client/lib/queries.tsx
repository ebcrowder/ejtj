import gql from 'graphql-tag';

export const ALL_TRIPS_QUERY = gql`
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

export const GET_AUTH_STATUS = gql`
  {
    isLoggedIn {
      status
      __typename
    }
  }
`;

export const GET_USER = gql`
  {
    user {
      id
      name
      email
      __typename
    }
  }
`;

export const TRIP_QUERY = gql`
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
