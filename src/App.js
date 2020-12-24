import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';

import Menu from './Menu';
import Login from './Login';
import LandingPage from './LandingPage';

const App = () => (
  <Fragment>
    <Menu />
    <Container>
      <LandingPage/>
    </Container>
  </Fragment>
);

export default App;
