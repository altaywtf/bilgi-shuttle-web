import React from 'react';

var Timer = React.createClass({
  getInitialState: function() {
    return {
      timeRemaining: this.props.seconds,
      timeDisplay: 'Loading'
    };
  },
  
  tick: function() {
    this.setState({timeRemaining: this.state.timeRemaining - 1})
  	var timer = this.state.timeRemaining;

    var hours = parseInt(timer / 3600, 10)
    var t2 = timer - (hours * 3600)
    var minutes = parseInt(t2 / 60, 10)
    var seconds = parseInt(timer % 60, 10);

    hours = hours < 10 ? '0' + hours : hours;
    hours = hours == 0 ? '' : hours + ':';
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    this.setState({timeDisplay: hours + minutes + ':' + seconds});

    if (this.state.timeRemaining <= 0) {
      let c = new Date();
      let d = new Date();

      let nt1 = this.props.nextOne.split(':')[0];
      let nt2 = this.props.nextOne.split(':')[1];

      d.setHours(nt1, nt2, 0);

      let newTimeDiff = (d-c) / 1000;

      this.setState({timeRemaining: newTimeDiff});
    } else if (this.state.timeRemaining > 3600 && this.state.timeRemaining < 7200) { // THIS IS NOT A GOOD WAY!
      this.setState({timeDisplay: 'Ring'});
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