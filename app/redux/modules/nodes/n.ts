import * as I from './n.model';
import 'whatwg-fetch';

const API_URL: string = 'http://api.bilgishuttle.com';

/** Initial State */
const INITIAL_STATE: I.Nodes = {
  isFetching: false,
  data: [],
  error: ''
}

/** Reducer */
export function nodesReducer(state = INITIAL_STATE, action: I.NodeAction) {
  switch (action.type) {
    case GET_NODES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });

    case GET_NODES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data
      });

    case GET_NODES_FAILURE:
      return Object.assign({}, state, {
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
    fetch(`${API_URL}/index.json`).then(res => {
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

export function getNodesRequest() : I.NodeAction {
  return {
    type: GET_NODES_REQUEST
  };
}

/** Success */
export const GET_NODES_SUCCESS: string = 'GET_NODES_SUCCESS';

export function getNodesSuccess(data: I.NodeDetail[]): I.NodeAction {
  return {
    type: GET_NODES_SUCCESS,
    data
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
