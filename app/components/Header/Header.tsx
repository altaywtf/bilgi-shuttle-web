import * as React from 'react';
import { Link } from 'react-router';

const s = require('./Header.css');

class Header extends React.Component<void, void> {
  render() {
    return (
      <header className={s.Header}>
        <Link to="/">
          <h1>Bilgi Shuttle</h1>
        </Link>
      </header>
    );
  }
}

export { Header }
