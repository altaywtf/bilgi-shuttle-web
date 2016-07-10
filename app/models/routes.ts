export interface Routes {
  isFetching: boolean;
  data: RouteData[];
  error?: any;
}

export interface RouteAction {
  type?: string;
  payload?: RouteData;
  error?: any;
}

export interface RouteData {
  start_node?: {
    id: number;
    image: string;
    name: string;
  };
  routes?: RouteDetail[];
}

export interface RouteDetail {
  destination: string;
  destination_image: string;
  next: {
    in_secs: number;
    next_next_one: string;
    ring: boolean;
  };
  raw_data: string;
  start: {
    id: number;
    image: string;
    name: string;
  };
}
