/** Main Config File */
const API_URL: string = 'http://api.bilgishuttle.com';

/** React Specific */
import * as React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { rootReducer } from '../redux/reducers';

/** Redux Mock Store Configuration */
import thunk from 'redux-thunk';
import { createStore } from 'redux';
const configureStore = require('redux-mock-store');

function createMockStore(data) {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  return mockStore(data);
}

/** Render Component */
function renderComponent(ComponentClass, state?, props?) {

  const store: Redux.Store = createStore(rootReducer, state);

  const component = mount(
    <Provider store={store}>
      <ComponentClass {...props} />
    </Provider>
  );

  return component;
}

export { API_URL, createMockStore, renderComponent }
