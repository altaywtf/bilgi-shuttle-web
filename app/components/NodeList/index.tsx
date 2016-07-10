import * as React from 'react';
import { NodeItem } from './NodeItem';
import { Loader } from '../Loader';
import { Row } from 'react-bootstrap';

interface IProps {
  isFetching: boolean;
  children?: any;
}

class NodeList extends React.Component<IProps, void> {
  static Item = NodeItem;

  render() {
    const { isFetching, children } = this.props;

    return (
      <Row style={{ marginTop: '16px' }}>
        {isFetching ? <Loader /> : children}
      </Row>
    );
  }
}

export { NodeList }
