import React from 'react';
import { IndexLink } from 'react-router';

export default class Header extends React.Component {
  render () {
    return (
      <header>
        <h1><IndexLink to="/">Bilgi Shuttle</IndexLink></h1>
      </header>
    );
  }
}
