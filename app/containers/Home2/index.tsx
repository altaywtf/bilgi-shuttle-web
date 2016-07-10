import * as React from 'react';
import { getNodes } from '../../redux/modules/nodes';
import { Nodes as INodes} from '../../models/nodes';
const { connect } = require('react-redux');

import { Grid } from 'react-bootstrap';
import { NodeList } from '../../components';

interface IProps {
  nodes: INodes;
  getNodes: Redux.ActionCreator;
}

@connect(
  state => ({nodes: state.nodes}),
  { getNodes }
)
class Home2 extends React.Component<IProps, any> {
  componentWillMount() {
    const { nodes, getNodes } = this.props;
    if (nodes.data.length === 0) {
      getNodes();
    }
  }

  render() {
    const { nodes } = this.props;

    return (
      <Grid>
        <NodeList data={nodes.data} isFetching={nodes.isFetching} />
      </Grid>
    );
  }
}

export { Home2 };
