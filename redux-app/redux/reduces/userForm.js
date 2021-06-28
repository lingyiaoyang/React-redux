import { USER_LOGIN, USER_REGISTER } from '../types';

const initialState = {
  form: [],
};

export const userLogin = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        form: payload,
      };
  }
};

export const userRegister = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_REGISTER:
      return {
        ...state,
        form: payload,
      };
    default:
      return { ...state };
  }
};
