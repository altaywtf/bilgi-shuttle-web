var React = require('react');
var Router = require('react-router');

var History = Router.History;

var BackButton = React.createClass({
  mixins: [ History ],
  render: function() {
    return (
      <button className="backButton" onClick={this.history.goBack}>Back</button>
    );
  }
});

module.exports = BackButton;
