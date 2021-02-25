import { combineReducers } from 'redux';
import headerReducer from '@/common/header/store';
import { homeReducer as homeReducer } from '@/pages/home/store';

export default combineReducers({
  header: headerReducer,
  home: homeReducer,
});
