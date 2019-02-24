import * as React from 'react';
import Link from 'next/link';
import { Query } from 'react-apollo';
import { GET_AUTH_STATUS } from '../lib/queries';

const Auth = props => (
  <Query query={GET_AUTH_STATUS}>
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (!data.isLoggedIn.status) {
        return (
          <>
            <Link href="/login">
              <a>Please Sign In</a>
            </Link>
          </>
        );
      }
      return props.children;
    }}
  </Query>
);

export default Auth;
