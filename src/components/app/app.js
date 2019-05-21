import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import GlobalStyles from 'styles/global';
import Header from 'components/header/header';
import Hero from 'components/hero/hero';
import OfferExpirationTimer from 'components/offerExpirationTimer/offerExpirationTimer';

// const data = {
//   imageUrl: '',
//   className: '',
//   classQuantity: '',
//   actualPrice: '',
//   retailPrice: '',
//   dateOfExpiration: '',
//   studioName: '',
//   studioDescription: '',
//   studioAddress: '',
// };

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Hero />
      <OfferExpirationTimer />
      {/* <Switch> */}
      {/* <Route exact path="/pathA" component={CompA} /> */}
      {/* <Route exact path="/pathB" component={CompB} /> */}
      {/* </Switch> */}
      {/* <Footer /> */}
    </div>
  );
}

export default hot(module)(App);
