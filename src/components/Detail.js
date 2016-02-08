import React from 'react';
import ajax from 'superagent';
import BackButton from './utils/BackButton';
import Timer from './utils/Timer';

// const baseURL = 'http://localhost:8000';
const baseURL = 'http://bilgishuttle.herokuapp.com';

class Detail extends React.Component {

	constructor(props) {
		super(props);
		this.state = { routes: [], start_node: {} }
	}

	componentDidMount() {
		ajax.get(`${baseURL}/${this.props.params.node}.json`)
			.end((error, response) => {
				if(!error && response) {
					this.setState((response.body));
					console.log(this.state);
				} else {
					console.log('Error fetching data', error);
				}
			});
	}

	render() {

		const routeListing = this.state.routes.map((route, index) => {
			const destination = route.destination;
			const rawData = route.raw_data;
			const nextOne = route.next.next_next_one;
			const timeRemaining = route.next.in_secs;

			return (
				<div className="route" key={index}>
					<div className="route-details">
						<h3>{destination}</h3>
						<h4>{timeRemaining ? (route.next.ring == true ? 'Ring' : <Timer seconds={timeRemaining} nextOne={nextOne}/>) : 'Done For Today!'}</h4>
						<p>{rawData}</p>
						<p className="route-next">{nextOne == 'DONE' ? ' ' : 'Next One: '+nextOne}</p>
					</div>
				</div>
				)
		});

		return (
			<div>
				<div className="location-name">
					<div className="row">
						<div className="col-xs-2">
							<BackButton />
						</div>
						<div className="col-xs-8">
							<h2>Shuttles from {this.state.start_node.name}</h2>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="routes">
						{routeListing}
					</div>
				</div>
			</div>
		);
	}
}

export default Detail;