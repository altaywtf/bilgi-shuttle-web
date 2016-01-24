import React from 'react';
import ajax from 'superagent';

class List extends React.Component {

	constructor(props) {
		super(props);
		this.state = { nodes: [] }
	}

	componentWillMount() {
		ajax.get('http://localhost:8000/index.json')
			.end((error, response) => {
				if(!error && response) {
					this.setState(response.body);
				} else {
					console.log('Error fetching data', error);
				}
			});
	}

	render() {
		return (
			<div>
				<ul>
				{this.state.nodes.map((node, index) => {
					return (
						<li key={index}>
						<strong>{node.name}</strong>
						</li>
						)
				})}
				</ul>
			</div>
		);
	}
}

export default List;