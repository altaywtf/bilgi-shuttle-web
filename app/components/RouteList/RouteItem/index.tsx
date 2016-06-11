import * as React from 'react';
import { RouteDetail as IRouteDetail } from '../../../models/routes';
import { normalizeRawData } from '../../../helpers/NormalizeRawData';
import { Timer } from '../../Timer';
import { Col, Panel } from 'react-bootstrap';

const s = require('./style.css');

interface IProps {
  data: IRouteDetail;
}

class RouteItem extends React.Component<IProps, void> {
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
      <Col md={6} sm={6} xs={12}>
        <Panel className={s.RouteItem}>
          <h3>{destination}</h3>
          <h4>{timeRemaining ?
            (data.next.ring ? 'Ring' :
              <Timer seconds={timeRemaining} nextOne={nextOne}/>)
            : 'Done For Today!'}
          </h4>
          <ul>{timeList}</ul>
          <p>
            {nextOne === 'DONE' ? '' : `Next One: ${nextOne}`}
          </p>
        </Panel>
      </Col>
    );
  }
}

export { RouteItem }
