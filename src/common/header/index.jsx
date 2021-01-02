import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.scss'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: true
    }
  }
  render() {
    return (
      <div className="header">
        <a href="/" className="logo"> </a>
        <div className="header-nav">
          <div className="header-nav-item left active">首页</div>
          <div className="header-nav-item left">下载App</div>
          <div className="searchWrapper">
          <CSSTransition in={this.state.focused} timeout={200}>
            <div>
                <input 
                  className={this.state.focused ? 'focused search' : 'search'} 
                  type="text" placeholder="search"
                  onFocus={this.handleInputFocus}
                  onBlur={this.handleInputBlur}
                />
                <i className={this.state.focused ? 'focused iconfont' : 'iconfont'}>
                  &#xe614;
                </i>
            </div>
          </CSSTransition> 
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

  handleInputFocus = () => {
    this.setState({focused: true})
  }
  handleInputBlur = () => {
    this.setState({focused: false})
  }
}

export default Header