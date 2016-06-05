import * as React from 'react';
import { RouteData as IRouteData } from '../../redux/modules/routes/r.model';
import { RouteItem } from '../';
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
				{isFetching ? 'Loading' : routeList}
			</Row>
		);
	}
}

export { RouteList }
