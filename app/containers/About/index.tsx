import * as React from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';

const s = require('./style.css');

export class About extends React.Component<void, void> {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={2} xs={1}/>
          <Col md={8} xs={10}>
            <Panel className={s.About}>
              <p><b>BilgiShuttle</b> is an open-source project that aims to build simple and usable cross-platform app for listing the shuttle routes and times of İstanbul Bilgi University.</p>
              <p>There is a <a href="https://github.com/bilgishuttle/bilgi-shuttle-api">REST API</a> on the backend which is running on <a href="http://api.bilgishuttle.com">api.bilgishuttle.com</a></p>
              <p>You are currently viewing the <a href="https://github.com/bilgishuttle/bilgi-shuttle-web">web</a> application.</p>
              <p>We also have <a href="https://github.com/bilgishuttle/bilgi-shuttle-ios">iOS</a> and <a href="https://github.com/bilgishuttle/bilgi-shuttle-android">Android</a> versions, but they aren't published yet.</p>
              <p>However, you can check all the applications written for this project on <a href="https://github.com/bilgishuttle">Github</a>.</p>
              <p>If you'd like to support the project, you can contact us on <a href="mailto:bilgishuttle@gmail.com">bilgishuttle@gmail.com</a></p>
            </Panel>
          </Col>
          <Col md={2} xs={1}/>
        </Row>
      </Grid>
    );
  }
}

export default About;
