import React from 'react';
import ajax from 'superagent';
import Title from 'react-title-component'
import BackButton from './utils/BackButton';
import Timer from './utils/Timer';

const baseURL = 'http://api.bilgishuttle.com';

export default class Detail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			routes: [],
			start_node: {}
		}
	}

	componentDidMount() {
		ajax.get(`${baseURL}/${this.props.params.node}.json`)
			.end((error, response) => {
				if(!error && response) {
					this.setState((response.body));
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

			let rawArr = rawData.split(' - ');
			let newArr = [];
			let rawNew = [];

			while(rawArr.length > 0) {
				newArr.push(rawArr.splice(0, 8))
			}

			newArr.map((item) => {
				let temp = item.join(' - ');
				rawNew.push(temp);
			});

			let rawPrint = rawNew.map((item) => {
				return (
					<li>{item}</li>
				);
			});

			return (
				<div className="route" key={index}>
					<div className="route-details">
						<h3>{destination}</h3>
						<h4>{timeRemaining ? (route.next.ring == true ? 'Ring' : <Timer seconds={timeRemaining} nextOne={nextOne}/>) : 'Done For Today!'}</h4>
						<ul>{rawPrint}</ul>
						<p className="route-next">{nextOne == 'DONE' ? ' ' : 'Next One: '+nextOne}</p>
					</div>
				</div>
				)
		});

		return (
			<div>
				<Title render={'BilgiShuttle | ' +  this.state.start_node.name}/>
				<div className="page-title">
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
