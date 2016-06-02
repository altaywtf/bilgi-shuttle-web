import * as React from 'react';

class App extends React.Component<any, any> {
	render() {
		return (
			<section style={{textAlign: 'center'}}>
				{this.props.children}
			</section>
		);
	}
}

export { App }
