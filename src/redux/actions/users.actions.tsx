import { SIGNIN_SUCCESS, SIGNUP_SUCCESS, SIGNOUT } from "../types";
import { Dispatch } from "redux";

export const signUp = () => (dispatch: Dispatch) => {
  const payload = {
    name: "sant",
  };

  dispatch({
    type: SIGNUP_SUCCESS,
    payload: payload,
  });
};

export const _signIn = (email: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({
      type: SIGNIN_SUCCESS,
    });
  } catch (error) {
    console.log("error in signin", error);
  }
};

export const _signOut = () => (dispatch: Dispatch) => {
  dispatch({
    type: SIGNOUT,
  });
};
