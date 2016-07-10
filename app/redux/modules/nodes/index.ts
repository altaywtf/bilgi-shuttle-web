import * as I from '../../../models/nodes';
import { assign } from '../../../helpers/Utils';

const API_URL: string = 'http://api.bilgishuttle.com';

/** Initial State */
export const initialState: I.Nodes = {
  isFetching: true,
  data: []
};

/** Reducer */
export function nodesReducer(state = initialState, action: I.NodeAction = {}) {
  switch (action.type) {
    case GET_NODES_REQUEST:
      return assign(state, {
        isFetching: true
      });

    case GET_NODES_SUCCESS:
      return assign(state, {
        isFetching: false,
        data: action.payload
      });

    case GET_NODES_FAILURE:
      return assign(state, {
        isFetching: false,
        error: action.error
      });

    default:
      return state;
  }
}

/** Async --> Thunk */
export function getNodes(): Redux.Dispatch {
  return dispatch => {
    dispatch(getNodesRequest());
    return fetch(`${API_URL}/index.json`).then(res => {
        if (res.ok) {
          return res.json().then(res => dispatch(getNodesSuccess(res.nodes)));
        } else {
          return res.json().then(res => dispatch(getNodesFailure(res)));
        }
      })
      .catch(err => dispatch(getNodesFailure(err)));
  };
}

/** Request */
export const GET_NODES_REQUEST: string = 'GET_NODES_REQUEST';

export function getNodesRequest(): I.NodeAction {
  return {
    type: GET_NODES_REQUEST
  };
}

/** Success */
export const GET_NODES_SUCCESS: string = 'GET_NODES_SUCCESS';

export function getNodesSuccess(data: I.NodeDetail[]): I.NodeAction {
  return {
    type: GET_NODES_SUCCESS,
    payload: data
  };
}

/** Failure */
export const GET_NODES_FAILURE: string = 'GET_NODES_FAILURE';

export function getNodesFailure(error: any): I.NodeAction {
  return {
    type: GET_NODES_FAILURE,
    error
  };
}
