import { API_URL, mockStore } from '../../../helpers/TestHelper';
import { expect } from 'chai';

import * as n from './n';
import * as I from './n.model';

const fetchMock = require('fetch-mock');

/** Fake Data */
const data: I.NodeDetail[] = [
  {
    image: "/media/nodes/kabatas_JtKuUYU.png",
    id: 8,
    name: "Kabataş"
  },
  {
    image: "/media/nodes/santral_AD5d4PA.png",
    id: 9,
    name: "Santral"
  }
];

const error: Object = {
  message: 'Error'
};


/** Nodes Module: Reducer Tests */
describe('Nodes Module: Reducer', () => {

  it('handles empty action', () => {
    const action: I.NodeAction = {};
    expect(n.nodesReducer(n.initialState, action)).to.eql(n.initialState);
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
      data: action.data
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
      expect(action.data).to.eql(data);
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
