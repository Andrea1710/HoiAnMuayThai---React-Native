import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { Button, SocialIcon } from "react-native-elements";

import { connect } from "react-redux";
import * as actions from "../actions";

import bgImage from "../assets/background.jpg";
import logo from "../assets/logo.png";
import Icon from "react-native-vector-icons/Ionicons";

const { width: WIDTH } = Dimensions.get("window");

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });
  return valid;
};

class SignUp extends Component {
  state = {
    name: "",
    password: "",
    email: "",
    gender: "",
    formErrors: {
      name: "",
      email: "",
      password: "",
      gender: ""
    },
    errors: "",
    isLogin: true,
    showPass: true,
    press: false
  };

  login = () => {
    this.props.facebookLogin();
    this.onAuthComplete(this.props);
  };

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate("welcome");
    }
  }

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
    let formErrors = this.state.formErrors;

    switch (key) {
      case "name":
        formErrors.name =
          value.length < 3 ? "Minimum 3 characters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Invalid Email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "Minimum 6 characters required" : "";
        break;
      case "gender":
        formErrors.gender = value.length === 0 ? "This field is required" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [key]: value });
  };

  signUp = async () => {
    const { name, password, email, gender } = this.state;
    try {
      alert("user successfully signed up!: ", success);
    } catch (err) {
      alert("error signing up: ", err);
    }
  };

  showPass = () => {
    this.setState(prevState => {
      return {
        showPass: !prevState.showPass,
        press: !prevState.press
      };
    });
  };

  switchModeHandler = () => {
    this.setState(prevState => {
      return {
        isLogin: !prevState.isLogin
      };
    });
  };

  render() {
    const { formErrors } = this.state;

    const login = (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
          <Icon
            name={"ios-mail"}
            size={28}
            color={"rgba(255,255,255,0.7)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={
              formErrors.email.length > 0
                ? [styles.input, { borderWidth: 1, borderColor: "red" }]
                : styles.input
            }
            placeholder={"Email"}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
            onChangeText={val => this.onChangeText("email", val)}
          />
          {formErrors.name.length > 0 && (
            <Text style={styles.errorMessage}>{formErrors.email}</Text>
          )}
        </View>
        <View style={styles.inputContainer}>
          <Icon
            name={"ios-lock"}
            size={28}
            color={"rgba(255,255,255,0.7)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={
              formErrors.password.length > 0
                ? [styles.input, { borderWidth: 1, borderColor: "red" }]
                : styles.input
            }
            placeholder={"Password"}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
            onChangeText={val => this.onChangeText("password", val)}
          />
          <TouchableOpacity style={styles.btnEye} onPress={this.showPass}>
            <Icon
              name={this.state.press === false ? "ios-eye" : "ios-eye-off"}
              size={26}
              color={"rgba(255,255,255,0.7)"}
            />
          </TouchableOpacity>
          {formErrors.password.length > 0 && (
            <Text style={styles.errorMessage}>{formErrors.password}</Text>
          )}
        </View>
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );

    const signup = (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
          <Icon
            name={"ios-person"}
            size={28}
            color={"rgba(255,255,255,0.7)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={
              formErrors.name.length > 0
                ? [styles.input, { borderWidth: 1, borderColor: "red" }]
                : styles.input
            }
            placeholder={"Username"}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
            onChangeText={val => this.onChangeText("name", val)}
          />
          {formErrors.name.length > 0 && (
            <Text style={styles.errorMessage}>{formErrors.name}</Text>
          )}
        </View>
        <View style={styles.inputContainer}>
          <Icon
            name={"ios-lock"}
            size={28}
            color={"rgba(255,255,255,0.7)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={
              formErrors.password.length > 0
                ? [styles.input, { borderWidth: 1, borderColor: "red" }]
                : styles.input
            }
            placeholder={"Password"}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
            onChangeText={val => this.onChangeText("password", val)}
          />
          <TouchableOpacity style={styles.btnEye} onPress={this.showPass}>
            <Icon
              name={this.state.press === false ? "ios-eye" : "ios-eye-off"}
              size={26}
              color={"rgba(255,255,255,0.7)"}
            />
          </TouchableOpacity>
          {formErrors.password.length > 0 && (
            <Text style={styles.errorMessage}>{formErrors.password}</Text>
          )}
        </View>
        <View style={styles.inputContainer}>
          <Icon
            name={"ios-mail"}
            size={28}
            color={"rgba(255,255,255,0.7)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={
              formErrors.email.length > 0
                ? [styles.input, { borderWidth: 1, borderColor: "red" }]
                : styles.input
            }
            placeholder={"Email"}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
            onChangeText={val => this.onChangeText("email", val)}
          />
          {formErrors.email.length > 0 && (
            <Text style={styles.errorMessage}>{formErrors.email}</Text>
          )}
        </View>
        <View style={styles.inputContainer}>
          <Icon
            name={"md-transgender"}
            size={28}
            color={"rgba(255,255,255,0.7)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={
              formErrors.gender.length > 0
                ? [styles.input, { borderWidth: 1, borderColor: "red" }]
                : styles.input
            }
            placeholder={"Gender"}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
            onChangeText={val => this.onChangeText("gender", val)}
          />
          {formErrors.gender.length > 0 && (
            <Text style={styles.errorMessage}>{formErrors.gender}</Text>
          )}
        </View>
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.text}>Register</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.logoText}>HOI AN MUAY THAI GYM</Text>
        </View>
        {this.state.isLogin ? signup : login}
        <SocialIcon
          title="Sign In With Facebook"
          button
          type="facebook"
          onPress={() => this.login()}
          style={{ width: 300 }}
        />
        <View style={{ marginBottom: 100 }}>
          <Button
            buttonStyle={{
              backgroundColor: "red",
              borderRadius: 10,
              borderWidth: 0.5,
              borderColor: "black",
              width: 300
            }}
            onPress={this.switchModeHandler}
            title={this.state.isLogin ? "Switch to Login" : "Switch to SignUp"}
            raised={true}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundContainer: {
    flex: 1,
    height: null,
    width: null,
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 20
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 10
  },
  logoText: {
    color: "white",
    fontSize: 30,
    fontWeight: "500",
    marginTop: 10,
    opacity: 0.9
  },
  inputContainer: {
    marginTop: 10
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0,0,0,0.35)",
    color: "rgba(255,255,255,0.7)",
    marginHorizontal: 25
  },
  inputIcon: {
    position: "absolute",
    top: 8,
    left: 37
  },
  btnEye: {
    position: "absolute",
    top: 8,
    right: 37
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: "rgba(242,38,29,0.7)",
    justifyContent: "center",
    marginTop: 20
  },
  text: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 16,
    textAlign: "center"
  },
  errorMessage: {
    color: "white",
    fontSize: 14,
    marginTop: 5,
    marginLeft: 15
  }
});

const mapStateToProps = ({ auth }) => {
  return { token: auth.token, userInfo: auth.userInfo };
};

export default connect(
  mapStateToProps,
  actions
)(SignUp);
