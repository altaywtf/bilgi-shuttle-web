import React from 'react';
import ajax from 'superagent';
import { Link } from 'react-router';
import slugify from './utils/Slugify';

const baseURL = 'http://api.bilgishuttle.com';

export default class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = { nodes: [], loaded: false }
	}

	componentDidMount() {
		ajax.get(baseURL+'/index.json')
			.end((error, response) => {
				if(!error && response) {
					this.setState({nodes: response.body.nodes, loaded: true});
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
			{this.state.loaded
				?
				<div className="nodes">
					{nodeListing}
				</div>
				:
				<div className="loading">
					<img src="https://linkmaker.itunes.apple.com/images/loading.gif" />
				</div>
			}

			</div>
		);
	}
}
