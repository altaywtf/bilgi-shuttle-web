import * as React from 'react';
import { connect } from 'react-redux';
import { getNodes } from '../../redux/modules/nodes/n';
import { Nodes as INodes} from '../../redux/modules/nodes/n.model';

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
    this.props.getNodes();
  }

  render() {
    return (<div>Home</div>);
  }
}

export default connect(mapstateToProps, mapDispatchToProps)(Home);
