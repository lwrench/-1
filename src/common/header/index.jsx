import { connect } from "react-redux";
import { CSSTransition } from 'react-transition-group'
import * as actionCreators from './store/actionCreators'
import './style.scss'

const Header = (props) => {
  return (
    <div className="header">
      <a href="/" className="logo"> </a>
      <div className="header-nav">
        <div className="header-nav-item left active">首页</div>
        <div className="header-nav-item left">下载App</div>
        <div className="searchWrapper">
        <CSSTransition in={props.focused} timeout={200}>
          <div>
              <input 
                className={props.focused ? 'focused search' : 'search'} 
                type="text" placeholder="search"
                onFocus={props.handleInputFocus}
                onBlur={props.handleInputBlur}
              />
              <i className={props.focused ? 'focused iconfont' : 'iconfont'}>
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

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(){
      dispatch(actionCreators.searchFocus())
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)