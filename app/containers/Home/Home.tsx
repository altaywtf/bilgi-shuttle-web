import * as React from 'react';
import { connect } from 'react-redux';
import { getNodes } from '../../redux/modules/nodes/n';
import { Nodes as INodes} from '../../redux/modules/nodes/n.model';

import { Grid } from 'react-bootstrap';
import { NodeList } from '../../components';

interface IProps {
  nodes: INodes;
  getNodes: Redux.ActionCreator;
}

function mapstateToProps(state) {
  return {
    nodes: state.nodes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getNodes: () => dispatch(getNodes())
  };
}

export class Home extends React.Component<IProps, any> {
  componentWillMount() {
    const { nodes, getNodes } = this.props;
    if (nodes.data.length === 0) {
      this.props.getNodes();
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

export default connect(mapstateToProps, mapDispatchToProps)(Home);
