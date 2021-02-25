import {
  CHANGE_LIST,
  SEARCH_BLUR,
  SEARCH_FOCUSED,
  MOUSE_ENTER,
  MOUSE_LEAVE,
  CHANGE_PAGE,
} from './actionTypes';

const initState = {
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
};

const headerReducer = (state = initState, action) => {
  switch (action.type) {
    case SEARCH_FOCUSED:
      return { ...state, focused: true };
    case SEARCH_BLUR:
      return { ...state, focused: false };
    case CHANGE_LIST:
      return { ...state, list: action.data, totalPage: action.totalPage };
    case MOUSE_ENTER:
      return { ...state, mouseIn: true };
    case MOUSE_LEAVE:
      return { ...state, mouseIn: false };
    case CHANGE_PAGE:
      return { ...state, page: action.page };
    default:
      return { ...state };
  }
};

export default headerReducer;
