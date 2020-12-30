import React, { Component } from 'react'
import './style.scss'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="header">
        <a href="/" className="logo"> </a>
        <div className="header-nav">
          <div className="header-nav-item left active">首页</div>
          <div className="header-nav-item left">下载App</div>
          <input className="search" type="text" placeholder="search"/>
          <div className="header-nav-item right">登陆</div>
          <div className="header-nav-item right">Aa</div>
        </div>
      </div>
    )
  }
}

export default Header