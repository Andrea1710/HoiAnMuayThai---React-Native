import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_FAIL
} from "./types";
import { AsyncStorage } from "react-native";
import * as Expo from "expo";

// FACEBOOK LOGIN ---> start

const id = "2001999493429329";

export const facebookLogin = () => {
  return async dispatch => {
    let token = await AsyncStorage.getItem("fb_token");
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,birthday,about,picture`
    );
    const json = await response.json();

    console.log(json);

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
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      id,
      {
        permissions: [
          "public_profile",
          "email",
          "user_friends",
          "user_birthday"
        ]
      }
    );

    if (type === "success") {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}&fields=id,name,birthday,email,about,picture`
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

// FACEBOOK LOGIN ---> end

// GOOGLE LOGIN ---> start

export const googleLogin = () => {
  return async dispatch => {
    const result = await Expo.Google.logInAsync({
      // androidClientId: "",
      iosClientId:
        "286193454776-fcaemh6e1l82p9ohlt0kavm6k05u99fp.apps.googleusercontent.com",
      scopes: ["profile", "email"]
    });

    console.log(result);

    if (result.idToken) {
      dispatch({
        type: GOOGLE_LOGIN_SUCCESS,
        payload: result.idToken,
        userInfo: result.user
      });
    } else {
      doGoogleLogin(dispatch);
    }
  };
};

export const doGoogleLogin = async dispatch => {
  try {
    const result = await Expo.Google.logInAsync({
      // androidClientId: "",
      iosClientId:
        "286193454776-fcaemh6e1l82p9ohlt0kavm6k05u99fp.apps.googleusercontent.com",
      scopes: ["profile", "email"]
    });

    if (result.type === "success") {
      const result = await Expo.Google.logInAsync({
        // androidClientId: "",
        iosClientId:
          "286193454776-fcaemh6e1l82p9ohlt0kavm6k05u99fp.apps.googleusercontent.com",
        scopes: ["profile", "email"]
      });

      dispatch({
        type: GOOGLE_LOGIN_SUCCESS,
        payload: result.idToken,
        userInfo: result
      });
    } else {
      return dispatch({ type: GOOGLE_LOGIN_FAIL });
    }
  } catch (e) {
    console.log("error", e);
  }

  // GOOGLE LOGIN ---> end
};
