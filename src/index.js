import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { createBrowserHistory } from 'history';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Provider as ReduxProvider } from 'react-redux';
import { StripeProvider } from 'react-stripe-elements';
import { STRIPE_KEY } from 'root/keys';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { Route } from 'react-router-dom';
import { offerDetails } from 'components/data';
import { userData } from 'components/userData';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from 'components/app/appContainer';
import createRootReducer from 'components/app/appReducer';

const history = createBrowserHistory();
const composeEnhancers = composeWithDevTools({});
const epicMiddleware = createEpicMiddleware();
const routeMiddleware = routerMiddleware(history);

const mainStore = createStore(
  createRootReducer(history),
  // initialState (ifExists),
  composeEnhancers(
    applyMiddleware(epicMiddleware, routeMiddleware)
  )
);

epicMiddleware.run(combineEpics(
  // Epics for each connected component here
));

const data = {
  offerDetails: { ...offerDetails },
  userData: { ...userData },
};
const cache = new InMemoryCache();
const client = new ApolloClient({
  // uri: 'https://api.zenrez.com/graphql',
  uri: 'https://graphql-pokemon.now.sh',
  cache,
});
cache.writeData({ data });

const Root = ({ store }) => (
  <ApolloProvider client={client}>
    <StripeProvider apiKey={STRIPE_KEY}>
      <ReduxProvider store={store}>
        <ConnectedRouter history={history}>
          <Route path="/" component={App} />
        </ConnectedRouter>
      </ReduxProvider>
    </StripeProvider>
  </ApolloProvider>
);

render(
  <Root store={mainStore} />,
  document.getElementById('⚛️')
);
