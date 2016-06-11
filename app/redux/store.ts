import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';
const logger = require('redux-logger')();
const router = routerMiddleware(browserHistory);

/**
 * Creates a Redux Store from the given initialState
 */
export function configureStore(initialState?: Object): Redux.Store {
	const env: string = process.env.NODE_ENV;

  let middlewares: any[] = [router, thunk];

  if (env === 'development') {
		middlewares.push(logger);
  }

	const finalCreateStore = compose(
		applyMiddleware(...middlewares)
	)(createStore);

  /** Final Redux Store!!! */
	const store: Redux.Store = finalCreateStore(rootReducer, initialState);

  /** Adds Hot Reloading Capability to Reducers in Dev. Mode */
	if (env === 'development' && (module as any).hot) {
		(module as any).hot.accept('./reducers', () => {
			store.replaceReducer((require('./reducers')));
		});
	}

	return store;

};
