import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import * as actionCreators from './store/actionCreators';
import './style.scss';

const Header = props => {
  const getArea = () => {
    const { page, totalPage, list } = props;
    const currentList = [];
    for (let i = (page - 1) * 5; i < page * 5 && i < list.length - 1; i++) {
      currentList.push(
        <div className="search-info-item" key={i}>
          {list[i]}
        </div>,
      );
    }
    if (props.focused || props.mouseIn) {
      return (
        <div
          className="search-info"
          onMouseEnter={props.handleMouseEnter}
          onMouseLeave={props.handleMouseLeave}
        >
          <div className="search-info-title">
            热门搜索
            <div
              className="search-info-switch"
              onClick={() => {
                props.handlePage(page, totalPage);
              }}
            >
              换一批
            </div>
          </div>
          <div className="search-info-list">{currentList}</div>
        </div>
      );
    }
  };
  return (
    <div className="header">
      <a href="/" className="logo">
        {' '}
      </a>
      <div className="header-nav">
        <div className="header-nav-item left active">首页</div>
        <div className="header-nav-item left">下载App</div>
        <div className="searchWrapper">
          <CSSTransition in={props.focused} timeout={200}>
            <div>
              <input
                className={props.focused ? 'focused search' : 'search'}
                type="text"
                placeholder="search"
                onFocus={() => {
                  props.handleInputFocus(props.list);
                }}
                onBlur={props.handleInputBlur}
              />
              <i className={props.focused ? 'focused iconfont' : 'iconfont'}>
                &#xe614;
              </i>
              {getArea()}
            </div>
          </CSSTransition>
        </div>
        <div className="header-nav-item right">登录</div>
        <div className="header-nav-item right">
          <i className="iconfont">&#xe636;</i>
        </div>
      </div>
      <div className="header-addition">
        <button className="header-addition-btn writing">
          <i className="iconfont" style={{ marginRight: '5px' }}>
            &#xe6e5;
          </i>
          写文章
        </button>
        <button className="header-addition-btn reg">注册</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    focused: state.header.focused,
    mouseIn: state.header.mouseIn,
    list: state.header.list,
    page: state.header.page,
    totalPage: state.header.totalPage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus(list) {
      list.length === 0 && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handlePage(page, totalPage) {
      if (page === totalPage) {
        dispatch(actionCreators.changePage(1));
      } else {
        dispatch(actionCreators.changePage(page + 1));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
