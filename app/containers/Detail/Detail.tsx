import * as React from 'react';
import { getRoutes } from '../../redux/modules/routes/r';
import { Routes as IRoutes } from '../../redux/modules/routes/r.model';
import { slugify } from '../../helpers/Slugify';
const { connect } = require('react-redux');

import { Grid } from 'react-bootstrap';
import { RouteList } from '../../components';

interface IProps {
  routes: IRoutes;
  getRoutes: Redux.ActionCreator;
  params: {
    node: string;
  };
}

@connect(
  state => ({ routes: state.routes }),
  dispatch => ({
    getRoutes: (node: string) => dispatch(getRoutes(node))
  })
)
class Detail extends React.Component<IProps, any> {
  constructor(props) {
    super(props);
    this.getCurrentRoutes = this.getCurrentRoutes.bind(this);
  }

  componentWillMount() {
    const { params, routes, getRoutes } = this.props;
    const isFetchedBefore: boolean = routes.data.some(d =>
      slugify(d.start_node.name) === params.node
    );
    if (!isFetchedBefore) {
      getRoutes(params.node);
    }
  }

  getCurrentRoutes() {
    const { routes, params } = this.props;
    return routes.data.filter(d =>
      slugify(d.start_node.name) === params.node
    )[0];
  }

  render() {
    const { routes } = this.props;

    return (
      <Grid>
        <RouteList
          data={this.getCurrentRoutes()}
          isFetching={routes.isFetching}
        />
      </Grid>
    );
  }
}

export { Detail }
