/** Main Config File */
const API_URL: string = 'http://api.bilgishuttle.com';

/** React Specific */
import * as React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { rootReducer } from '../../redux/reducers';

/** Redux Mock Store Configuration */
import thunk from 'redux-thunk';
const configureStore = require('redux-mock-store');

function createMockStore(initialState) {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  return mockStore(initialState);
}

export { API_URL, createMockStore }
