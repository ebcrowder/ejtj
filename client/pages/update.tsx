import * as React from 'react';
import TripDetail from '../components/TripDetail';

const Update: React.FunctionComponent<{}> = query => {
  //   console.log('props', id);
  return <TripDetail id={query.id} />;
};

export default Update;
