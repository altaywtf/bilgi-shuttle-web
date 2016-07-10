import * as React from 'react';
import { NodeDetail as INodeDetail } from '../../../models/nodes';
import { Col, Panel } from 'react-bootstrap';

const API_URL: string = 'http://api.bilgishuttle.com';
const s = require('./style.css');

interface IProps {
  data: INodeDetail;
  onClick: Function;
}

class NodeItem extends React.Component<IProps, any> {
  render() {
    const { data: { name, image }, onClick } = this.props;

    return (
      <Col md={4} sm={4} xs={6} className={s.NodeItemParrent}>
        <Panel
          name="nodeItem"
          className={s.NodeItem} 
          onClick={() => onClick()}
        >
          <img src={API_URL + image}></img>
          <p>{name}</p>
        </Panel>
      </Col>
    );

  }
}

export { NodeItem }
