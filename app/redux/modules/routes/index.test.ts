import { API_URL, createMockStore } from '../../../helpers/Test';
import { expect } from 'chai';

import * as r from './';
import * as I from '../../../models/routes';

const fetchMock = require('fetch-mock');

/** Mock Data */
const data: I.RouteData = [{
  'routes': [
    {
      'raw_data': '08:00 - Ring - 20:00',
      'destination': 'Santral',
      'next': {
        'in_secs': 23159,
        'ring': false,
        'next_next_one': '20:00'
      },
      'start': {
        'image': '/media/nodes/kabatas_JtKuUYU.png',
        'id': 8,
        'name': 'Kabataş'
      },
      'destination_image': '/media/nodes/santral_AD5d4PA.png'
    }
  ],
  'start_node': {
    'image': '/media/nodes/kabatas_JtKuUYU.png',
    'id': 8,
    'name':
    'Kabataş'
  }
}];

const error: Object = {
  message: 'Error'
};

/** Routes Module: Reducer Tests */
describe('Routes Module: Reducer', () => {
  it('returns current state by default', () => {
    expect(r.routesReducer(r.initialState)).to.eql(r.initialState);
  });

  it('handles GET_ROUTES_REQUEST', () => {
    const action: I.RouteAction = r.getRoutesRequest();
    expect(r.routesReducer(r.initialState, action)).to.eql({
      isFetching: true,
      data: [],
      error: ''
    });
  });

  it('handles GET_ROUTES_SUCCESS', () => {
    const action: I.RouteAction = r.getRoutesSuccess(data);
    expect(r.routesReducer(r.initialState, action).data[0]).to.eql(
      action.payload
    );
    expect(r.routesReducer(r.initialState, action).isFetching).to.be.false;
  });

  it('handles GET_ROUTES_FAILURE', () => {
    const action: I.RouteAction = r.getRoutesFailure(error);

    expect(r.routesReducer(r.initialState, action)).to.eql({
      isFetching: false,
      data: [],
      error: action.error
    });
  });
});


/** Routes Module: Action Creators */
describe('Routes Module: Action Creators', () => {
  describe('Get Routes (Async)', () => {
    afterEach(() => {
      fetchMock.restore();
    });

    it('dispatches getRoutesSuccess on OK reqs', (done) => {
      fetchMock.mock(`${API_URL}/kabatas.json`, {
        status: 200,
        body: data
      });

      const action: I.RouteAction = r.getRoutes('kabatas');
      const store = createMockStore(r.initialState);

      const expectedActions: I.RouteAction[] = [
        { type: r.GET_ROUTES_REQUEST },
        { type: r.GET_ROUTES_SUCCESS, payload: data }
      ];

      store.dispatch(action)
        .then(() => expect(store.getActions()).to.eql(expectedActions))
        .then(() => done())
        .catch(err => done(err));
    });

    it('dispatches getRoutesFailure on failed reqs', (done) => {
      fetchMock.mock(`${API_URL}/kabatas.json`, {
        status: 400,
        body: error
      });

      const action: I.RouteAction = r.getRoutes('kabatas');
      const store = createMockStore(r.initialState);

      const expectedActions: I.RouteAction[] = [
        { type: r.GET_ROUTES_REQUEST },
        { type: r.GET_ROUTES_FAILURE, error }
      ];

      store.dispatch(action)
        .then(() => expect(store.getActions()).to.eql(expectedActions))
        .then(() => done())
        .catch(err => done(err));
    });
  });

  describe('Get Routes Request', () => {
    it('has the correct type', () => {
      const action: I.RouteAction = r.getRoutesRequest();
      expect(action.type).to.eql(r.GET_ROUTES_REQUEST);
    });
  });

  describe('Get Routes Success', () => {
    it('has the correct type and payload', () => {
      const action: I.RouteAction = r.getRoutesSuccess(data);
      expect(action.type).to.eql(r.GET_ROUTES_SUCCESS);
      expect(action.payload).to.eql(data);
    });
  });

  describe('Get Routes Failure', () => {
    it('has the correct type and payload', () => {
      const action: I.RouteAction = r.getRoutesFailure(error);
      expect(action.type).to.eql(r.GET_ROUTES_FAILURE);
      expect(action.error).to.eql(error);
    });
  });

});
