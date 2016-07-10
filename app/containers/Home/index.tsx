import * as React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { slugify } from '../../helpers/Utils';

import { getNodes } from '../../redux/modules/nodes';
import { Nodes as INodes} from '../../models/nodes';

import { Grid } from 'react-bootstrap';
import { NodeList } from '../../components';

interface IProps {
  nodes: INodes;
  getNodes: Redux.ActionCreator;
  push: Redux.ActionCreator;
}

class Home extends React.Component<IProps, any> {
  componentWillMount() {
    const { nodes, getNodes } = this.props;
    if (nodes.data.length === 0) {
      getNodes();
    }
  }

  handleNavigate(node: string) {
    this.props.push(`/location/${slugify(node)}`);
  }

  render() {
    const { nodes: { data, isFetching } } = this.props;

    return (
      <Grid>
        <NodeList isFetching={isFetching}>
          { data.map((d, i) =>
            <NodeList.Item key={i}
              data={d}
              onClick={() => this.handleNavigate(d.name)}
            />)
          }
        </NodeList>
      </Grid>
    );
  }
}

export { Home };

export default connect(
  state => ({nodes: state.nodes}),
  { getNodes, push }
)(Home);
