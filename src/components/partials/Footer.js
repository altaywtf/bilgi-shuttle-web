import React from 'react'
import { Link } from 'react-router'

export default class Footer extends React.Component {
  render () {
    return (
      <footer>
        <h4><Link to="/about">About</Link></h4>
      </footer>
    );
  }
}
