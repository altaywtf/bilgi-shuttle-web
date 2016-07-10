import { API_URL, createMockStore } from '../../../helpers/Test';
import { expect } from 'chai';
const fetchMock = require('fetch-mock');

import * as n from './';
import * as I from '../../../models/nodes';

/** Fake Data */
const data: I.NodeDetail[] = [
  {
    image: '/media/nodes/kabatas_JtKuUYU.png',
    id: 8,
    name: 'Kabataş'
  },
  {
    image: '/media/nodes/santral_AD5d4PA.png',
    id: 9,
    name: 'Santral'
  }
];

const error: Object = {
  message: 'Error'
};

/** Nodes Module: Reducer Tests */
describe('Nodes Module: Reducer', () => {

  it('returns current state by default', () => {
    expect(n.nodesReducer(n.initialState)).to.eql(n.initialState);
  });

  it('handles GET_NODES_REQUEST', () => {
    const action: I.NodeAction = n.getNodesRequest();
    expect(n.nodesReducer(n.initialState, action)).to.eql({
      isFetching: true,
      data: []
    });
  });

  it('handles GET_NODES_SUCCESS', () => {
    const action: I.NodeAction = n.getNodesSuccess(data);
    expect(n.nodesReducer(n.initialState, action)).to.eql({
      isFetching: false,
      data: action.payload
    });
  });

  it('handles GET_NODES_FAILURE', () => {
    const action: I.NodeAction = n.getNodesFailure(error);
    expect(n.nodesReducer(n.initialState, action)).to.eql({
      isFetching: false,
      data: [],
      error: action.error
    });
  });

});

/** Nodes Module: Action Creators */
describe('Nodes Module: Action Creators', () => {

  describe('Get Nodes (Async)', () => {

    afterEach(() => {
      fetchMock.restore();
    });

    it('dispatches getNodesSuccess on OK reqs', (done) => {
      fetchMock.mock(`${API_URL}/index.json`, {
        status: 200,
        body: {
          nodes: data
        }
      });

      const action: I.NodeAction = n.getNodes();
      const store = createMockStore(n.initialState);

      const expectedActions: I.NodeAction[] = [
        { type: n.GET_NODES_REQUEST },
        { type: n.GET_NODES_SUCCESS, payload: data }
      ];

      store.dispatch(action)
        .then(() => expect(store.getActions()).to.eql(expectedActions))
        .then(() => done())
        .catch(err => done(err));
    });

    it('dispatches getNodesFailure on failed reqs', (done) => {
      fetchMock.mock(`${API_URL}/index.json`, {
        status: 400,
        body: {
          error
        }
      });

      const action: I.NodeAction = n.getNodes();
      const store = createMockStore(n.initialState);

      const expectedActions: I.NodeAction[] = [
        { type: n.GET_NODES_REQUEST },
        { type: n.GET_NODES_FAILURE, error: {error} }
      ];

      store.dispatch(action)
        .then(() => expect(store.getActions()).to.eql(expectedActions))
        .then(() => done())
        .catch(err => done(err));
    });

  });

  describe('Get Nodes Request', () => {
    it('has the correct type', () => {
      const action: I.NodeAction = n.getNodesRequest();
      expect(action.type).to.eql(n.GET_NODES_REQUEST);
    });
  });

  describe('Get Nodes Success', () => {
    it('has the correct type and payload', () => {
      const action: I.NodeAction = n.getNodesSuccess(data);
      expect(action.type).to.eql(n.GET_NODES_SUCCESS);
      expect(action.payload).to.eql(data);
    });
  });

  describe('Get Nodes Failure', () => {
    it('has the correct type and payload', () => {
      const action: I.NodeAction = n.getNodesFailure(error);
      expect(action.type).to.eql(n.GET_NODES_FAILURE);
      expect(action.error).to.eql(error);
    });
  });

});
