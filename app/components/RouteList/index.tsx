import * as React from 'react';
import { RouteData as IRouteData } from '../../models/routes';
import { RouteItem } from './RouteItem';
import { Loader } from '../Loader';
import { Row } from 'react-bootstrap';

interface IProps {
  isFetching: boolean;
  data: IRouteData;
}

class RouteList extends React.Component<IProps, void> {
  render () {
    const { data, isFetching } = this.props;

    const routeList = data && data.routes.map((d, i) =>
      <RouteItem data={d} key={i} />
    );

    return (
      <Row style={{marginTop: '32px'}}>
        {isFetching ? <Loader /> : routeList}
      </Row>
    );
  }
}

export { RouteList }
