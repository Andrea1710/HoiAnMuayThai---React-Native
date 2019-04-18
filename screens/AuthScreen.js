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
import { Button } from "react-native-elements";

import bgImage from "../assets/background.jpg";
import logo from "../assets/logo.png";
import Icon from "react-native-vector-icons/Ionicons";

const { width: WIDTH } = Dimensions.get("window");

class SignUp extends Component {
  state = {
    name: "",
    password: "",
    email: "",
    gender: "",
    isLogin: true,
    showPass: true,
    press: false
  };

  onChangeText = (key, val) => {
    this.setState({ [key]: val });
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
    const login = (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
          <Icon
            name={"ios-person"}
            size={28}
            color={"rgba(255,255,255,0.7)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder={"Username"}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
            onChangeText={val => this.onChangeText("password", val)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon
            name={"ios-lock"}
            size={28}
            color={"rgba(255,255,255,0.7)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
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
            style={styles.input}
            placeholder={"Username"}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
            onChangeText={val => this.onChangeText("name", val)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon
            name={"ios-person"}
            size={28}
            color={"rgba(255,255,255,0.7)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder={"Email"}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
            onChangeText={val => this.onChangeText("email", val)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Icon
            name={"ios-lock"}
            size={28}
            color={"rgba(255,255,255,0.7)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
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
        </View>
        <View style={styles.inputContainer}>
          <Icon
            name={"ios-person"}
            size={28}
            color={"rgba(255,255,255,0.7)"}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.input}
            placeholder={"Gender"}
            placeholderTextColor={"rgba(255,255,255,0.7)"}
            underlineColorAndroid="transparent"
            onChangeText={val => this.onChangeText("gender", val)}
          />
        </View>
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.text}>Login</Text>
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
        <View>
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
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 20
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10
  },
  logoText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    opacity: 0.5
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
  }
});

export default SignUp;
