export interface Nodes {
  isFetching: boolean;
  data?: NodeDetail[];
  error?: any;
}

export interface NodeAction {
  type?: string;
  payload?: NodeDetail[];
  error?: any;
}

export interface NodeDetail {
  id: number;
  name: string;
  image: string;
}
