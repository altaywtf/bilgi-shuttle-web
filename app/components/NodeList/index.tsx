import * as React from 'react';
import { NodeDetail as INodeDetail } from '../../models/nodes';
import { NodeItem } from './NodeItem';
import { Loader } from '../Loader';
import { Row } from 'react-bootstrap';

interface IProps {
  isFetching: boolean;
  data: INodeDetail[];
}

class NodeList extends React.Component<IProps, void> {
  render() {
    const { data, isFetching } = this.props;
    const nodeList = data.map((d, i) => <NodeItem data={d} key={i} />);

    return (
      <Row style={{ marginTop: '16px' }}>
        {isFetching ? <Loader /> : nodeList}
      </Row>
    );
  }
}

export { NodeList }
