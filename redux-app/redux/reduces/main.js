import {
  USER_FETCH_FAIL,
  USER_FETCH_REQUEST,
  USER_FETCH_SUCESS,
} from '../types';

const initialState = {
  loading: false,
  user: [],
  error: '',
};

export const fetchingUser = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_FETCH_SUCESS:
      return {
        ...state,
        user: payload,
        loading: false,
        error: '',
      };
    case USER_FETCH_FAIL:
      return {
        ...state,
        user: [],
        error: payload,
      };
    default:
      return { ...state };
  }
};
