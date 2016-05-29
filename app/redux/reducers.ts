/**
 * Configuration file of Redux Reducers
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { nodesReducer } from './modules/nodes/n';
import { routesReducer } from './modules/routes/r';

const rootReducer: Redux.Reducer = combineReducers({
	routing: routerReducer,
  nodes: nodesReducer,
  routes: routesReducer
});

export default rootReducer;
