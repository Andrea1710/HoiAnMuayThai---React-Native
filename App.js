import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import Header from "./components/Header.js";
import HomeScreen from "./screens/HomeScreen";
import AuthScreen from "./screens/AuthScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import ClassesScreen from "./screens/ClassesScreen";
import HistoryScreen from "./screens/HistoryScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PricesScreen from "./screens/PricesScreen";
import EventsScreen from "./screens/EventsScreen";
import TimetableScreen from "./screens/TimetableScreen";
import AboutusScreen from "./screens/AboutusScreen";

const MainNavigator = createBottomTabNavigator({
  welcome: {
    screen: WelcomeScreen,
    navigationOptions: { tabBarVisible: false }
  },
  auth: { screen: AuthScreen, navigationOptions: { tabBarVisible: true } },
  main: {
    navigationOptions: { tabBarVisible: false },
    screen: createBottomTabNavigator({
      HOME: {
        screen: HomeScreen,
        navigationOptions: {
          tabBarLabel: "HOME",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("./assets/home-active.png")}
                style={styles.tabbarIcon}
              />
            ) : (
              <Image
                source={require("./assets/home-inactive.png")}
                style={styles.tabbarIcon}
              />
            )
        }
      },
      CLASSES: {
        screen: ClassesScreen,
        navigationOptions: {
          tabBarLabel: "CLASSES",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("./assets/classes-active.png")}
                style={styles.tabbarIcon}
              />
            ) : (
              <Image
                source={require("./assets/classes-inactive.png")}
                style={styles.tabbarIcon}
              />
            )
        }
      },
      HISTORY: {
        screen: HistoryScreen,
        navigationOptions: {
          tabBarLabel: "HISTORY",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("./assets/history-active.png")}
                style={styles.tabbarIcon}
              />
            ) : (
              <Image
                source={require("./assets/history-inactive.png")}
                style={styles.tabbarIcon}
              />
            )
        }
      },
      INFO: {
        navigationOptions: {
          tabBarLabel: "INFO",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("./assets/info-active.png")}
                style={styles.tabbarIcon}
              />
            ) : (
              <Image
                source={require("./assets/info-inactive.png")}
                style={styles.tabbarIcon}
              />
            )
        },
        screen: createBottomTabNavigator({
          TIMETABLE: {
            screen: TimetableScreen,
            navigationOptions: {
              tabBarLabel: "TIMETABLE",
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Image
                    source={require("./assets/timetable-active.png")}
                    style={styles.tabbarIcon}
                  />
                ) : (
                  <Image
                    source={require("./assets/timetable-inactive.png")}
                    style={styles.tabbarIcon}
                  />
                )
            }
          },
          PRICES: {
            screen: PricesScreen,
            navigationOptions: {
              tabBarLabel: "PRICES",
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Image
                    source={require("./assets/prices-active.png")}
                    style={styles.tabbarIcon}
                  />
                ) : (
                  <Image
                    source={require("./assets/prices-inactive.png")}
                    style={styles.tabbarIcon}
                  />
                )
            }
          },
          EVENTS: {
            screen: EventsScreen,
            navigationOptions: {
              tabBarLabel: "EVENTS",
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Image
                    source={require("./assets/events-active.png")}
                    style={styles.tabbarIcon}
                  />
                ) : (
                  <Image
                    source={require("./assets/events-inactive.png")}
                    style={styles.tabbarIcon}
                  />
                )
            }
          },
          ABOUTUS: {
            screen: AboutusScreen,
            navigationOptions: {
              tabBarLabel: "ABOUT US",
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Image
                    source={require("./assets/aboutus-active.png")}
                    style={styles.tabbarIcon}
                  />
                ) : (
                  <Image
                    source={require("./assets/aboutus-inactive.png")}
                    style={styles.tabbarIcon}
                  />
                )
            }
          }
        })
      },
      PROFILE: {
        screen: ProfileScreen,
        navigationOptions: {
          tabBarLabel: "PROFILE",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                source={require("./assets/profile-active.png")}
                style={styles.tabbarIcon}
              />
            ) : (
              <Image
                source={require("./assets/profile-inactive.png")}
                style={styles.tabbarIcon}
              />
            )
        }
      }
    })
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  tabbarIcon: {
    width: 20,
    height: 20
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
