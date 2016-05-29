import * as React from 'react';
import { connect } from 'react-redux';
import { getRoutes } from '../../redux/modules/routes/r';
import { Routes as IRoutes } from '../../redux/modules/routes/r.model';
import { slugify } from '../../helpers/Slugify';

interface IProps {
  routes: IRoutes;
  getRoutes: Redux.ActionCreator;
  params: {
    node: string;
  };
}

function mapStateToProps(state) {
  return {
    routes: state.routes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getRoutes: (node: string) => dispatch(getRoutes(node))
  };
}

export class Detail extends React.Component<IProps, any> {
  constructor(props) {
    super(props);
    this.getCurrentRoutes = this.getCurrentRoutes.bind(this);
  }

  componentWillMount() {
    const { params, routes, getRoutes } = this.props;
    const isFetchedBefore: boolean = routes.data.some(d => slugify(d.start_node.name) == params.node);
    if (!isFetchedBefore) {
      getRoutes(params.node);
    }
  }

  getCurrentRoutes() {
    const { routes, params } = this.props;
    return routes.data.filter(d => slugify(d.start_node.name) == params.node)[0];
  }

  render() {
    const { routes } = this.props;

    if (routes.data.length > 0) {
      console.log(this.getCurrentRoutes());
    }

    return (<div>Detail</div>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
