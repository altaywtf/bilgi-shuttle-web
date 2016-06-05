import * as React from 'react';

const s = require('./Header.css');

class Header extends React.Component<void, void> {
  render() {
    return (
      <header className={s.Header}>
        <h1>Bilgi Shuttle</h1>
      </header>
    );
  }
}

export { Header }
