import React from 'react';
import ajax from 'superagent';
import { Link } from 'react-router';
import slugify from './utils/Slugify';

const baseURL = 'http://localhost:8000';

class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = { nodes: [] }
	}

	componentWillMount() {
		ajax.get(baseURL+'/index.json')
			.end((error, response) => {
				if(!error && response) {
					this.setState(response.body);
				} else {
					console.log('Error fetching data', error);
				}
			});
	}

	render() {
		let nodeListing = this.state.nodes.map((node, index) => {
			const nodeSlug = slugify(node.name);
			const nodeName = node.name;
			const nodeImg  = baseURL + node.image;
			return (
				<div className="node" key={index}>
					<Link to={`/location/${nodeSlug}`}>
						<div className="node-details">
							<img src={nodeImg}></img>
							<p>{nodeName}</p>
						</div>
					</Link>
				</div>
				)
			});

		return (
			<div className="container">
				<div className="nodes">
					{nodeListing}
				</div>
			</div>
		);
	}
}

export default List;