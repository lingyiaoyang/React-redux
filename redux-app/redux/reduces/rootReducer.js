import { combineReducers } from 'redux';
import { fetchingUser } from './main';
import { userRegister, userLogin } from './userForm';

const rootReducer = combineReducers({
  main: fetchingUser,
  // LoginForm: userLogin,
  // RegisterForm: userRegister,
});

export default rootReducer;
