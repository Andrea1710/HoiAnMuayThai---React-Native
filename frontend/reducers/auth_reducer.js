import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from "../actions/types";

const initialState = {
  token: null,
  userInfo: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FACEBOOK_LOGIN_SUCCESS:
      return { token: action.payload, userInfo: action.userInfo };
    case FACEBOOK_LOGIN_FAIL:
      return { token: null };
    default:
      return state;
  }
};
