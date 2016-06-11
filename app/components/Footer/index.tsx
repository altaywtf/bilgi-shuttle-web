import * as React from 'react';
import { Link } from 'react-router';

const s = require('./style.css');

class Footer extends React.Component<void, void> {
  render() {
    return (
      <footer className={s.Footer}>
        <Link to="/about">
          <h4>About</h4>
        </Link>
      </footer>
    );
  }
}

export { Footer }
