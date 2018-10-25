import React, { Component } from 'react'
import logo from './code-pub-klarna.png'

class Header extends Component {
  render() {
    return (
      <header style={{ backgroundColor: '#222', ...this.props.style }}>
        <img src={logo} style={{ width: '100%' }} alt="logo" />
      </header>
    )
  }
}

export default Header
