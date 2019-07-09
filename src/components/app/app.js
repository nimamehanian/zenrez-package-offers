import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GlobalStyles from 'styles/global';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import Header from 'components/header/header';
import OfferDetailsPage from 'components/offerDetailsPage/offerDetailsPage';
import Account from 'components/account/account';
import Membership from 'components/membership/membership';

function App() {
  const theme = createMuiTheme({
    props: {
      MuiButtonBase: {
        disableRipple: true,
      },
    },
  });

  return (
    <div>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route exact path="/" component={OfferDetailsPage} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/membership" component={Membership} />
        </Switch>
      </ThemeProvider>
    </div>
  );
}


export default hot(App);
