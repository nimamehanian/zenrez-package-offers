import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import GlobalStyles from 'styles/global';
import Header from 'components/header/header';
import OfferDetailsPage from 'components/offerDetailsPage/offerDetailsPage';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <OfferDetailsPage />
      {/* <Switch> */}
      {/* <Route exact path="/pathA" component={CompA} /> */}
      {/* <Route exact path="/pathB" component={CompB} /> */}
      {/* </Switch> */}
      {/* <Footer /> */}
    </div>
  );
}

export default hot(module)(App);
