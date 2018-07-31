import { combineReducers } from 'redux';
import ColorReducer from './ColorReducer';
import NavReducer from './NavReducer';
import LoginReducer from './LoginReducer';

const AppReducer = combineReducers({
  color: ColorReducer,
  nav: NavReducer,
  usern: LoginReducer
});

export default AppReducer;