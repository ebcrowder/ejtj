import * as React from 'react';
import Header from '../components/Header';
import CreateTrip from '../components/CreateTrip';
import Auth from '../components/Auth';

const Admin: React.FunctionComponent<{}> = () => (
  <>
    <Auth>
      <Header />
      <CreateTrip />
    </Auth>
  </>
);

export default Admin;
