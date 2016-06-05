import * as React from 'react';
import { Header } from '../../components';
import { PageTitle } from '../../components';
import { Footer } from '../../components';

const s = require('./App.css');

class App extends React.Component<any, void> {
	render() {
		return (
      <section className={s.App}>
        <Header />
        <PageTitle title={this.props.params.node}
          path={this.props.location.pathname}/>
        <section className={s.Content}>
          {this.props.children}
        </section>
        <Footer />
			</section>
		);
	}
}

export { App }
