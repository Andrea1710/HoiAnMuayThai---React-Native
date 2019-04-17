import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import Header from "./components/Header.js";
import AuthScreen from "./screens/AuthScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import ClassesScreen from "./screens/ClassesScreen";
import JoiningsScreen from "./screens/JoiningsScreen";
import ProfileScreen from "./screens/ProfileScreen";

const MainNavigator = createBottomTabNavigator({
  welcome: {
    screen: WelcomeScreen,
    navigationOptions: { tabBarVisible: false }
  },
  auth: { screen: AuthScreen, navigationOptions: { tabBarVisible: true } },
  main: {
    navigationOptions: { tabBarVisible: false },
    screen: createBottomTabNavigator({
      CLASSES: { screen: ClassesScreen },
      HISTORY: {
        screen: JoiningsScreen
      },
      PROFILE: {
        screen: ProfileScreen
      }
    })
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="HOI AN MUAY THAI GYM" />
        <AppContainer />
      </View>
    );
  }
}
