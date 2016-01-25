import React from 'react';
import ajax from 'superagent';
import BackButton from './utils/BackButton';
import Timer from './utils/Timer';

const baseURL = 'http://localhost:8000';

class Detail extends React.Component {

	constructor(props) {
		super(props);
		this.state = { routes: [], start_node: {} }
	}

	componentWillMount() {
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

		let routeListing = this.state.routes.map((route, index) => {
			const destination = route.destination;
			// const destinationImg = baseURL + route.destination_image;
			const rawData = route.raw_data;
			let timeRemaining = route.next.in_secs;

			// startTimer(timeRemaining);

			return (
				<div className="route" key={index}>
					<div className="route-details">
						<h3>{destination}</h3>
						<h4>{route.next_next_one == 'DONE' ? 'Done for Today!' : (route.next.ring == true ? 'Ring' : <Timer seconds={timeRemaining}/>)}</h4>
						<p>{rawData}</p>
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