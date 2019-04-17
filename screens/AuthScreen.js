import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Button, Icon } from "react-native-elements";

export default class SignUp extends React.Component {
  state = {
    name: "",
    password: "",
    email: "",
    gender: "",
    isLogin: true,
    showEye: false
  };

  showPassword = () => {
    this.setState(prevState => {
      return {
        showEye: !prevState.showEye
      };
    });
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

  switchModeHandler = () => {
    this.setState(prevState => {
      return {
        isLogin: !prevState.isLogin
      };
    });
  };

  render() {
    let passwordColor = "blue";
    let passwordText = false;
    if (this.state.showEye) {
      passwordColor = "red";
      passwordText = true;
    }

    const signup = (
      <View>
        <Text style={styles.inputTitle}>Name</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onChangeText={val => this.onChangeText("name", val)}
        />
        <View style={{ flexDirection: "row", marginLeft: 20 }}>
          <Text style={{ marginRight: 20, fontWeight: "bold" }}>Password</Text>
          <Icon
            name="lock"
            size={18}
            color={passwordColor}
            onPress={this.showPassword}
          />
        </View>
        <TextInput
          style={styles.input}
          secureTextEntry={passwordText}
          autoCapitalize="none"
          onChangeText={val => this.onChangeText("password", val)}
        />
        <Text style={styles.inputTitle}>Email</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onChangeText={val => this.onChangeText("email", val)}
        />
        <Text style={styles.inputTitle}>Gender</Text>
        <TextInput
          style={[styles.input, { marginBottom: 20 }]}
          autoCapitalize="none"
          onChangeText={val => this.onChangeText("gender", val)}
        />
        <Button
          buttonStyle={{
            backgroundColor: "red",
            borderRadius: 10,
            borderWidth: 0.5,
            borderColor: "black"
          }}
          title="Submit"
          onPress={this.signUp}
          raised={true}
        />
      </View>
    );

    const login = (
      <View>
        <Text style={styles.inputTitle}>Name</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onChangeText={val => this.onChangeText("name", val)}
        />
        <View style={{ flexDirection: "row", marginLeft: 20 }}>
          <Text style={{ marginRight: 20, fontWeight: "bold" }}>Password</Text>
          <Icon
            name="lock"
            size={18}
            color={passwordColor}
            onPress={this.showPassword}
          />
        </View>
        <TextInput
          style={[styles.input, { marginBottom: 20 }]}
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={val => this.onChangeText("password", val)}
        />
        <Button
          buttonStyle={{
            backgroundColor: "red",
            borderRadius: 10,
            borderWidth: 0.5,
            borderColor: "black"
          }}
          title="Submit"
          onPress={this.signUp}
          raised={true}
        />
      </View>
    );
    return (
      <View style={styles.container}>
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
        {this.state.isLogin ? signup : login}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    borderWidth: 2.5,
    borderColor: "red",
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 13 },
    width: 380,
    height: 55,
    backgroundColor: "black",
    marginBottom: 5,
    padding: 8,
    color: "white",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputTitle: {
    fontWeight: "bold",
    marginLeft: 20
  }
});
