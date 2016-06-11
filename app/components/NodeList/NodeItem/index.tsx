import * as React from 'react';
import { slugify } from '../../../helpers/Slugify';
import { NodeDetail as INodeDetail } from '../../../models/nodes';
import { Col, Panel } from 'react-bootstrap';
const API_URL: string = 'http://api.bilgishuttle.com';

const s = require('./style.css');

interface IProps {
  data: INodeDetail;
}

class NodeItem extends React.Component<IProps, any> {
  static contextTypes: React.ValidationMap<any> = {
    router: React.PropTypes.object.isRequired
  };

  handleClick(node: string) {
    (this.context as any).router.push(`/location/${slugify(node)}`);
  }

  render() {
    const { data } = this.props;

    return (
      <Col md={4} sm={4} xs={6} className={s.NodeItemParrent}>
        <Panel className={s.NodeItem} 
          onClick={() => this.handleClick(data.name)}>
          <img src={API_URL + data.image}></img>
          <p>{data.name}</p>
        </Panel>
      </Col>
    );

  }
}

export { NodeItem }
