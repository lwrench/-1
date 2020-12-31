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
          <div className="searchWrapper">
            <input className="search" type="text" placeholder="search"/>
            <i className="iconfont">&#xe614;</i>
          </div>
          <div className="header-nav-item right">登陆</div>
          <div className="header-nav-item right">
            <i className="iconfont">&#xe636;</i>
          </div>
        </div>
        <div className="header-addition">
          <button className="header-addition-btn reg">
            <i className="iconfont" style={{marginRight: '5px'}}>&#xe6e5;</i>
             写文章
          </button>
          <button className="header-addition-btn writing">注册</button>
        </div>
      </div>
    )
  }
}

export default Header