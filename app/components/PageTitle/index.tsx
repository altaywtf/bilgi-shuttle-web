import * as React from 'react';
import { Link } from 'react-router';
import { capitalizeFirstLetter } from '../../helpers/Utils';
import { Grid, Row, Col } from 'react-bootstrap';

const s = require('./style.css');

interface IProps {
  title?: string;
  path?: string;
}

class PageTitle extends React.Component<IProps, void> {
  render() {
    const { title, path } = this.props;

    return (
      <Grid fluid className={s.PageTitle}>
      <Row>
        <Col md={4} xs={2}>
          {path !== '/' &&
            <button
              name="backBtn"
              className={s.BackButton}
              onClick={() => window.history.back()}>
              Back
            </button>
          }
        </Col>
        <Col md={4} xs={8}>
          <h2 id="pageTitle">
            {title ?
            `Shuttles from ${capitalizeFirstLetter(title)}` : 
            path === '/about' ? 'About' :
            <a href="https://github.com/bilgishuttle/bilgi-shuttle-web">
              v1.0.0
            </a>}
          </h2>
        </Col>
      </Row>
      </Grid>
    );
  }
}

export { PageTitle }
