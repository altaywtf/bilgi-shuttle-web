import * as React from 'react';
import { RouteItem } from './RouteItem';
import { Loader } from '../Loader';
import { Row } from 'react-bootstrap';

interface IProps {
  children?: any;
  isFetching: boolean;
}

class RouteList extends React.Component<IProps, void> {
  static Item = RouteItem;

  render () {
    const { children, isFetching } = this.props;

    return (
      <Row style={{marginTop: '32px'}}>
        {isFetching ? <Loader /> : children}
      </Row>
    );
  }
}

export { RouteList }
