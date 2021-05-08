import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Footer from './components/footer';
import Header from './components/header';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/home';
import Container from '@material-ui/core/Container';

const App: React.FC = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth={false} disableGutters>
        <Header />
        <Switch>
          <Route path="/" exact render={() => <HomePage />} />
        </Switch>
        <Footer />
      </Container>
    </React.Fragment>
  );
}

export default App;
