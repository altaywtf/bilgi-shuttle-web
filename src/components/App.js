require('styles/App.scss');

import React from 'react';

// Static Calls
// let yeomanImage = require('../images/yeoman.png');
// <img src={yeomanImage} alt="Yeoman Generator" />

class App extends React.Component {
  render() {
    return (
      <main>
      	<header>
      		Bilgi Shuttle v.0.1
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