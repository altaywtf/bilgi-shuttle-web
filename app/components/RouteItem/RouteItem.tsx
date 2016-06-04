import * as React from 'react';
import { normalizeRawData } from '../../helpers/NormalizeRawData';
import { Timer } from '../';

class RouteItem extends React.Component<any, void> {
  render() {
    const { data } = this.props;

    const destination = data.destination;
    const rawData = normalizeRawData(data.raw_data);
    const nextOne = data.next.next_next_one;
    const timeRemaining = data.next.in_secs;

    const timeList = rawData.map((time, i) => {
      return (
        <li key={i}>{time}</li>
      );
    });

    return (
      <div className="route">
        <div className="route-details">
          <h3>{destination}</h3>
          <h4>{timeRemaining ?
            (data.next.ring === true ? 'Ring' :
              <Timer seconds={timeRemaining} nextOne={nextOne}/>)
            : 'Done For Today!'}
          </h4>
          <ul>{timeList}</ul>
          <p className="route-next">
            {nextOne === 'DONE' ? ' ' : 'Next One: ' + nextOne}
          </p>
        </div>
      </div>
    );
  }
}

export { RouteItem }
