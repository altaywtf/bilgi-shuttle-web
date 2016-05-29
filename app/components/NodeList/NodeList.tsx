import * as React from 'react';
import { NodeDetail as INodeDetail } from '../../redux/modules/nodes/n.model';
import { NodeItem } from '../'
import { Row } from 'react-bootstrap';

interface IProps {
	isFetching: boolean;
	data: INodeDetail[];
}

class NodeList extends React.Component<IProps, void> {
	render() {
		const { data, isFetching } = this.props;
		const nodeList = data.map((d, i) => <NodeItem data={d} key={i} />)

		return (
			<Row>
				{isFetching ? 'Loading' : nodeList}
			</Row>
		)
	}
}

export { NodeList }