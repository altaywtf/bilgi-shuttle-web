import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { nodesReducer } from './modules/nodes';
import { routesReducer } from './modules/routes';

const rootReducer: Redux.Reducer = combineReducers({
  routing: routerReducer,
  nodes: nodesReducer,
  routes: routesReducer
});

export { rootReducer }
