import * as I from './r.model';
const API_URL: string = 'http://api.bilgishuttle.com';

/** Initial State */
const INITIAL_STATE: I.Routes = {
  isFetching: true,
  data: [],
  error: ''
};

/** Reducer */
export function routesReducer(state = INITIAL_STATE, action: I.RouteAction) {
  switch (action.type) {
    case GET_ROUTES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });

    case GET_ROUTES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: [...state.data, action.data]
      });

    case GET_ROUTES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });

    default:
      return state;
  }
}

/** Async --> Thunk */
export function getRoutes(node: string): Redux.Dispatch {
  return dispatch => {
    dispatch(getRoutesRequest());
    return fetch(`${API_URL}/${node}.json`).then(res => {
      if (res.ok) {
        return res.json().then(res => dispatch(getRoutesSuccess(res)));
      } else {
        return res.json().then(res => dispatch(getRoutesFailure(res)));
      }
    }).catch(err => dispatch(getRoutesFailure(err)));
  };
}

/** Request */
export const GET_ROUTES_REQUEST: string = 'GET_ROUTES_REQUEST';

export function getRoutesRequest(): I.RouteAction {
  return {
    type: GET_ROUTES_REQUEST
  };
}

/** Success */
export const GET_ROUTES_SUCCESS: string = 'GET_ROUTES_SUCCESS';

export function getRoutesSuccess(data: any): I.RouteAction {
  return {
    type: GET_ROUTES_SUCCESS,
    data
  };
}

/** Failure */
export const GET_ROUTES_FAILURE: string = 'GET_ROUTES_FAILURE';

export function getRoutesFailure(error: any): I.RouteAction {
  return {
    type: GET_ROUTES_FAILURE,
    error
  };
}
