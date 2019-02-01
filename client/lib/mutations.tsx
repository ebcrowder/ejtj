import { gql } from 'apollo-boost';

export const CREATE_TRIP_MUTATION = gql`
  mutation CREATE_TRIP_MUTATION(
    $name: String!
    $city: String!
    $state: String!
    $country: String!
    $dateStart: String!
    $dateEnd: String!
    $pastEvent: Boolean!
    $dream: Boolean!
    $image: String!
  ) {
    createTrip(
      name: $name
      city: $city
      state: $state
      country: $country
      dateStart: $dateStart
      dateEnd: $dateEnd
      pastEvent: $pastEvent
      dream: $dream
      image: $image
    ) {
      id
    }
  }
`;

export const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      name
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $name: String!
    $email: String!
    $password: String!
  ) {
    signup(name: $name, email: $email, password: $password) {
      id
      email
      name
    }
  }
`;
