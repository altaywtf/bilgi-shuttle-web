import React from 'react';

import Header from './partials/Header';
import Footer from './partials/Footer';

import '../styles/App.scss';

export default class App extends React.Component {
  render() {
    return (
      <main>
      	<Header />

      	<section id="content">
      		{this.props.children}
      	</section>

        <Footer />
      </main>
    );
  }
}
