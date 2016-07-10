import * as React from 'react';
import { connect } from 'react-redux';
import { slugify } from '../../helpers/Utils';

import { getRoutes } from '../../redux/modules/routes';
import { Routes as IRoutes } from '../../models/routes';

import { Grid } from 'react-bootstrap';
import { RouteList } from '../../components';

interface IProps {
  routes: IRoutes;
  getRoutes: Redux.ActionCreator;
  params: {
    node: string;
  };
}

export class Detail extends React.Component<IProps, any> {
  constructor(props) {
    super(props);
    this.getCurrentRoutes = this.getCurrentRoutes.bind(this);
  }

  componentWillMount() {
    const { getRoutes, routes: { data }, params: { node } } = this.props;
    const isFetchedBefore = data.some(d => slugify(d.start_node.name) === node);

    if (!isFetchedBefore) {
      getRoutes(node);
    }
  }

  getCurrentRoutes() {
    const { routes: { data }, params: { node } } = this.props;
    return data.filter(d => slugify(d.start_node.name) === node)[0];
  }

  render() {
    const { routes: { isFetching } } = this.props;
    const data = this.getCurrentRoutes();

    return (
      <Grid>
        <RouteList isFetching={isFetching}>
        {data && data.routes.map((d, i) => <RouteList.Item key={i} data={d} />)}
        </RouteList>

      </Grid>
    );
  }
}

export default connect(
  state => ({ routes: state.routes }),
  { getRoutes }
)(Detail);
