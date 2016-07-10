/** Main Config File */
const API_URL: string = 'http://api.bilgishuttle.com';

/** React Specific */
import * as React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { rootReducer } from '../../redux/reducers';

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
function renderComponent(Component, appState?, componentProps?) {

  const store: Redux.Store = createStore(rootReducer, appState);

  const component = mount(
    <Provider store={store}>
      <Component {...componentProps} />
    </Provider>
  );

  return component;
}

/** Mount Component */
function mountComponent(Component, props?) {
  return mount(<Component {...props} />);
}

export { API_URL, createMockStore, mountComponent, renderComponent }
