import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from "./types";
import { AsyncStorage } from "react-native";
import { Facebook } from "expo";

const id = "2001999493429329";

export const facebookLogin = () => {
  return async dispatch => {
    let token = await AsyncStorage.getItem("fb_token");
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,about,picture`
    );
    const json = await response.json();

    if (token) {
      dispatch({
        type: FACEBOOK_LOGIN_SUCCESS,
        payload: token,
        userInfo: json
      });
    } else {
      doFacebookLogin(dispatch);
    }
  };
};

const doFacebookLogin = async dispatch => {
  try {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(id, {
      permissions: ["public_profile", "email", "user_friends"]
    });

    if (type === "success") {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,about,picture`
      );

      await AsyncStorage.setItem("fb_token", token);

      const json = await response.json();

      console.log(json);

      dispatch({
        type: FACEBOOK_LOGIN_SUCCESS,
        payload: token,
        userInfo: json
      });
    } else {
      return dispatch({ type: FACEBOOK_LOGIN_FAIL });
    }
  } catch (err) {
    console.log(err);
  }
};
