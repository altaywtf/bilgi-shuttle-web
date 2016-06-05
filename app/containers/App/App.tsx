import * as React from 'react';
import { Header } from '../../components';
import { Footer } from '../../components';


class App extends React.Component<any, any> {
	render() {
		return (
			<section>
        <Header />
				{this.props.children}
        <Footer />
			</section>
		);
	}
}

export { App }
