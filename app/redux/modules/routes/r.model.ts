export interface Routes {
  isFetching: boolean;
  data: any;
  error?: any;
}

export interface RouteAction {
  type: string;
  data?: any;
  error?: any;
}
