import {
  USER_FETCH_REQUEST,
  USER_FETCH_SUCESS,
  USER_FETCH_FAIL,
  USER_LOGIN,
  USER_REGISTER,
} from '../types';

export const fetchRequest = () => {
  return {
    type: USER_FETCH_REQUEST,
  };
};

export const fetchSuccess = (users) => {
  return {
    type: USER_FETCH_SUCESS,
    payload: users,
  };
};

export const fetchFail = (error) => {
  return {
    type: USER_FETCH_FAIL,
    payload: error,
  };
};

export const userLogin = (FormData) => {
  return {
    type: USER_LOGIN,
    payload: FormData,
  };
};
export const userRegister = (FormData) => {
  return {
    type: USER_REGISTER,
    payload: FormData,
  };
};
