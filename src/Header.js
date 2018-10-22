import React, { Component } from 'react'
import logo from './code-pub-digital.png'

class Header extends Component {
  render() {
    return (
      <header style={{ backgroundColor: '#222', padding: 20, ...this.props.style }}>
        <img src={logo} style={{ height: 150 }} alt="logo" />
      </header>
    )
  }
}

export default Header
