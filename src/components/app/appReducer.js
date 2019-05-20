import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  // Add reducers here
});

export default createRootReducer;
