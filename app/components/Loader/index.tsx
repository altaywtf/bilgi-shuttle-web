import * as React from 'react';
import { Grid } from 'react-bootstrap';
const s = require('./style.css');

class Loader extends React.Component<void, void> {
  render() {
    return (
      <Grid>
        <div className={s.Spinner}></div>
      </Grid>
    );
  }
}

export { Loader }
