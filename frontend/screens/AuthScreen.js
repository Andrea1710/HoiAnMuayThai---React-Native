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
  KeyboardAvoidingView,
  Platform
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
    birthday: "",
    formErrors: {
      name: "",
      email: "",
      password: "",
      birthday: ""
    },
    errors: "",
    isLogin: true,
    showPass: true,
    press: false
  };

  onChangeHandler = event => {
    const { name, value } = event.target;
    let formErrors = this.state.formErrors;

    switch (name) {
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
      case "birthday":
        formErrors.birthday =
          value.length === 0 ? "This field is required" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  submitHandler = event => {
    event.preventDefault();
    const name = this.state.name;
    const email = this.state.email;
    const password = this.state.password;
    const birthday = this.state.birthday;

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING
          Name: ${this.state.name}
          Email: ${this.state.email}
          Password: ${this.state.password}
          Birthday: ${this.state.birthday}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }

    let requestBody = {
      query: `
        query {
          login(email: "${email}", password: "${password}") {
            userId
            email
            name
            birthday
          }
        }
      `
    };

    if (!this.state.isLogin) {
      requestBody = {
        query: `
          mutation {
            createUser(userInput: {name: "${name}", email: "${email}", password: "${password}", birthday: "${birthday}"}) {
              _id
              name
              email
              birthday
            }
          }
        `
      };
    }

    fetch("http://localhost:8000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          this.setState({
            errors: "Email or password are incorrect. Check and try again."
          });
          throw new Error("Failed");
        }
        return res.json();
      })
      .then(resData => {
        console.log("ResData", resData);
        this.props.navigation.navigate("welcome");
      })
      .catch(err => {
        console.log(err);
      });
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
      case "birthday":
        formErrors.birthday =
          value.length === 0 ? "This field is required" : "";
        break;
      default:
        break;
    }
    this.setState({ formErrors, [key]: value });
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
    console.log(this.state);

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
        <TouchableOpacity>
          <Button
            title="Login"
            onPress={this.submitHandler}
            style={styles.text}
            buttonStyle={styles.btnLogin}
          />
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
            value={this.state.name}
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
            value={this.state.password}
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
            value={this.state.email}
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
              formErrors.birthday.length > 0
                ? [styles.input, { borderWidth: 1, borderColor: "red" }]
                : styles.input
            }
            value={this.state.birthday}
            placeholder={"Birthday"}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
            onChangeText={val => this.onChangeText("birthday", val)}
          />
          {formErrors.birthday.length > 0 && (
            <Text style={styles.errorMessage}>{formErrors.birthday}</Text>
          )}
        </View>
        <TouchableOpacity>
          <Button
            title="Register"
            onPress={this.submitHandler}
            style={styles.text}
            buttonStyle={styles.btnLogin}
          />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.logoText}>HOI AN MUAY THAI GYM</Text>
        </View>
        {this.state.isLogin ? login : signup}
        <SocialIcon
          title="Sign In With Facebook"
          button
          type="facebook"
          onPress={() => this.login()}
          style={{ width: 300 }}
        />
        <View
          style={
            Platform.OS === "android"
              ? { marginBottom: 20 }
              : { marginBottom: 100 }
          }
        >
          <Button
            buttonStyle={{
              backgroundColor: "red",
              borderRadius: 10,
              borderWidth: 0.5,
              borderColor: "black",
              width: 300
            }}
            onPress={this.switchModeHandler}
            title={this.state.isLogin ? "Switch to Signup" : "Switch to Login"}
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
    backgroundColor: "red",
    margin: 10,
    borderWidth: 1,
    borderColor: "black"
  },
  text: {
    color: "black",
    fontSize: 18,
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
