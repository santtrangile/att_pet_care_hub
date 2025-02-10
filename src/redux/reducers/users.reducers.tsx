import { SIGNIN_SUCCESS, SIGNOUT } from "../types/index";

interface Action {
  type: string;
  payload?: any;
}

const initialState = {
  isAuthenticated: true,
};
const users = (state = initialState, action: Action) => {
  const { type } = action;
  switch (type) {
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isAuthenticated : true
      };
      case SIGNOUT:
        return {
          ...state,
          isAuthenticated : false
        };
    default:
      return state;
  }
}

export default users;
