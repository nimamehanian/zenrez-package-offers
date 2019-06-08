import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { StripeProvider } from 'react-stripe-elements';
import { STRIPE_KEY } from 'root/keys';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { Route } from 'react-router-dom';
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

const Root = ({ store }) => (
  <StripeProvider apiKey={STRIPE_KEY}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route path="/" component={App} />
      </ConnectedRouter>
    </Provider>
  </StripeProvider>
);

render(
  <Root store={mainStore} />,
  document.getElementById('app')
);
