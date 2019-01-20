import * as React from 'react';
import Router, { withRouter } from 'next/router';
import TripDetail from '../components/TripDetail';

export default withRouter(({ router: { query } }) => (
  <div>
    <TripDetail id={query.id} />
  </div>
));
