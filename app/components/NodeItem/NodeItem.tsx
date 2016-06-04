import * as React from 'react';
import { slugify } from '../../helpers/Slugify';
import { NodeDetail as INodeDetail } from '../../redux/modules/nodes/n.model';
import { Col, Panel } from 'react-bootstrap';

interface IProps {
	data: INodeDetail;
}

class NodeItem extends React.Component<IProps, any> {
	static contextTypes: React.ValidationMap<any> = {
		router: React.PropTypes.object.isRequired
	};

	handleClick(node: string) {
		(this.context as any).router.push(`/location/${slugify(node)}`);
	}

	render() {
		const { data } = this.props;

		return (
			<Col md={4} sm={3} xs={6}>
				<Panel onClick={() => this.handleClick(data.name)}>
					{data.name}
				</Panel>
			</Col>
		);

	}
}

export { NodeItem }
