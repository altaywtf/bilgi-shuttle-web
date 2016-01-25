import React from 'react';

var Timer = React.createClass({
  getInitialState: function() {
    return {timeRemaining: this.props.seconds, timeDisplay: "Loading..."};
  },
  
  tick: function() {

  	var duration = this.props.seconds;
  	var timer = this.state.timeRemaining;

    var hours = parseInt(timer / 3600, 10)
    var t2 = timer - (hours * 3600)
    var minutes = parseInt(t2 / 60, 10)
    var seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? "0" + hours : hours;
    hours = hours == 0 ? "" : hours + ":";
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    this.setState({timeRemaining: this.state.timeRemaining - 1})
	this.setState({timeDisplay: hours + minutes + ":" + seconds});

    if (--timer < 0) {
        timer = duration;
    }
  },
  
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  
  render: function() {
    return (
      <time>{this.state.timeDisplay}</time>
    );
  }
});

export default Timer;