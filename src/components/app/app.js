import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import GlobalStyles from 'styles/global';
import Header from 'components/header/header';
import OfferDetailsPage from 'components/offerDetailsPage/offerDetailsPage';

import { StripeProvider } from 'react-stripe-elements';
import { STRIPE_KEY } from 'root/keys';

import { offerDetails } from 'components/data';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header logo={offerDetails.logoUrl} studioUrl={offerDetails.studioUrl} />
      <StripeProvider apiKey={STRIPE_KEY}>
        <OfferDetailsPage data={offerDetails} />
      </StripeProvider>
      {/* <Switch> */}
      {/* <Route exact path="/pathA" component={CompA} /> */}
      {/* <Route exact path="/pathB" component={CompB} /> */}
      {/* </Switch> */}
      {/* <Footer /> */}
    </div>
  );
}

export default hot(module)(App);
