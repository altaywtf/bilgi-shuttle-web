import React from 'react';
import ajax from 'superagent';
import { Link } from 'react-router';

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
			<div className="nodes">
				{this.state.nodes.map((node, index) => {
					let slugify = text => {
						let trMap = { 'çÇ':'c', 'ğĞ':'g', 'şŞ':'s', 'üÜ':'u', 'ıİ':'i', 'öÖ':'o' };
						for (let key in trMap){
							text = text.replace(new RegExp('['+key+']','g'), trMap[key]);
						}
						return  text.replace(/[^-a-zA-Z0-9\s]+/ig, '') // remove non-alphanumeric chars
					                .replace(/\s/gi, '-') // convert spaces to dashes
					                .replace(/[-]+/gi, '-') // trim repeated dashes
					                .toLowerCase();
					};

					const nodeSlug = slugify(node.name);
					const nodeName = node.name;

					return (
						<div className="node" key={index}>
							<Link to={`/location/${nodeSlug}`}>
								<div className="node-details">
									<p>{nodeName}</p>
								</div>
							</Link>
						</div>
						)
				})}
			</div>
		);
	}
}

export default List;