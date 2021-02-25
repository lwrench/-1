import {
  SEARCH_FOCUSED,
  SEARCH_BLUR,
  CHANGE_LIST,
  MOUSE_ENTER,
  MOUSE_LEAVE,
  CHANGE_PAGE,
} from './actionTypes';
import axios from 'axios';
export const searchFocus = () => ({
  type: SEARCH_FOCUSED,
});

export const searchBlur = () => ({
  type: SEARCH_BLUR,
});

const changeList = data => ({
  type: CHANGE_LIST,
  data,
  totalPage: Math.ceil(data.length / 5),
});

export const getList = () => {
  return dispatch => {
    axios
      .get('api/headerList.json')
      .then(res => {
        const data = res.data;
        dispatch(changeList(data.data));
      })
      .catch(err => {});
  };
};

export const mouseEnter = () => ({
  type: MOUSE_ENTER,
});

export const mouseLeave = () => ({
  type: MOUSE_LEAVE,
});

export const changePage = page => ({
  type: CHANGE_PAGE,
  page,
});
