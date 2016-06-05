import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

const s = require('./PageTitle.css');

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
        <Col md={2} xs={1}>
          {path !== '/' &&
            <button className={s.BackButton}
              onClick={() => window.history.back()}>
              Back
            </button>
          }
        </Col>
        <Col md={8} xs={10}>
          <h2>{title
            ? `Shuttles from ${title.charAt(0).toUpperCase()+title.slice(1)}` : 
            path === '/about' ? 'About' :
            'v1.0.0'}
          </h2>
        </Col>
      </Row>
      </Grid>
    );
  }
}

export { PageTitle }
