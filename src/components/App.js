require('normalize.css');
require('styles/App.scss');

import React from 'react';

// Static Calls
// let yeomanImage = require('../images/yeoman.png');
// <img src={yeomanImage} alt="Yeoman Generator" />

class App extends React.Component {
  render() {
    return (
      <div className="index">
      	<h1>Bilgi Shuttle v0.1</h1>
        {this.props.children}
      </div>
    );
  }
}

App.defaultProps = {
};

export default App;