import * as React from 'react';

import { Row } from 'react-bootstrap';

interface IProps {
}

class RouteList extends React.Component<any, void> {
	render () {
		const { data, isFetching } = this.props;

		const routeList = data && data.routes.map((d, i) => <p key={i}>{d.destination}</p>);

		return (
			<Row>
				{isFetching ? 'Loading' : routeList}
			</Row>
		);
	}
}

export { RouteList }