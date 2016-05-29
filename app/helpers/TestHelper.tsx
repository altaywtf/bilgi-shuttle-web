const API_URL: string = 'http://api.bilgishuttle.com';

import * as React from 'react';
import * as fetchMock from 'fetch-mock';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import rootReducer from '../redux/reducers';

/** Redux Mock Store Configuration */
import thunk from 'redux-thunk';

const configureStore = require('redux-mock-store');
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const createStore = configureStore();
/***/

/** Render Component */
function renderComponent(ComponentClass, props?, state?) {
	return mount(
		<Provider store={createStore(rootReducer, state)}>
			<ComponentClass {...props} />
		</Provider>
	);
}
/***/

export { API_URL, mockStore, fetchMock, renderComponent };
