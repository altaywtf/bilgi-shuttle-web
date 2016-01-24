require('styles/App.scss');

import React from 'react';
import { IndexLink } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <main>
      	<header>
      		<h1><IndexLink to="/">Bilgi Shuttle v.0.1.</IndexLink></h1>
      	</header>

      	<section id="content">
      		{this.props.children}
      	</section>
      </main>
    );
  }
}

App.defaultProps = {
};

export default App;