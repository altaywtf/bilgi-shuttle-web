import React from 'react';

class Detail extends React.Component {
	render() {
		return (
			<div>Detail Page for {this.props.params.node}</div>
		);
	}
}

export default Detail;