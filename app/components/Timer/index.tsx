import * as React from 'react';

class Timer extends React.Component<any, any> {
  interval: any;

  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = {
      timeRemaining: this.props.seconds,
      timeDisplay: 'Loading'
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    const { timeRemaining } = this.state;

    this.setState({
      timeRemaining: timeRemaining - 1
    });

    const timer = timeRemaining;

    let hours: any = timer / 3600;
    hours = parseInt(hours, 10);

    let minutes: any = (timer - (hours * 3600)) / 60;
    minutes = parseInt(minutes, 10);

    let seconds: any = timer % 60;
    seconds = parseInt(seconds, 10);

    hours = hours < 10 ? '0' + hours : hours;
    hours = hours === 0 ? '' : hours + ':';
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    const timeDisplay = `${hours}${minutes}:${seconds}`;

    this.setState({ timeDisplay });

    if (timeRemaining <= 0) {
      let c: any = new Date();
      let d: any = new Date();

      let nt1: string = this.props.nextOne.split(':')[0];
      let nt2: string = this.props.nextOne.split(':')[1];

      d.setHours(nt1, nt2, 0);

      let newTimeDiff: any = (d - c) / 1000;

      this.setState({ timeRemaining: newTimeDiff });
    } else if (timeRemaining > 3600 && timeRemaining < 7200) {
      this.setState({ timeDisplay: 'Ring' });
    }
  }

  render() {
    return (
      <time>{this.state.timeDisplay}</time>
    );
  }

}

export { Timer }
