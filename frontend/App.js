import React, { Component } from "react";
import { Notifications, Alert } from "expo";
import { StyleSheet, View, Image } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import { Provider } from "react-redux";
import store from "./store";

import registerForNotifications from "./services/push_notifications";

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
import TrainersScreen from "./screens/TrainersScreen";
import MuaythaiScreen from "./screens/MuaythaiScreen";

const MainNavigator = createBottomTabNavigator({
  auth: { screen: AuthScreen, navigationOptions: { tabBarVisible: false } },
  welcome: {
    screen: WelcomeScreen,
    navigationOptions: { tabBarVisible: false }
  },
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
          MUAYTHAI: {
            screen: MuaythaiScreen,
            navigationOptions: {
              tabBarLabel: "MUAY THAI",
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Image
                    source={require("./assets/muaythai-active.png")}
                    style={styles.tabbarIcon}
                  />
                ) : (
                  <Image
                    source={require("./assets/muaythai-inactive.png")}
                    style={styles.tabbarIcon}
                  />
                )
            }
          }
        })
      },
      ABOUTUS: {
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
        },
        screen: createBottomTabNavigator({
          OURHISTORY: {
            screen: AboutusScreen,
            navigationOptions: {
              tabBarLabel: "OUR HISTORY",
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Image
                    source={require("./assets/ourhistory-active.png")}
                    style={styles.tabbarIcon}
                  />
                ) : (
                  <Image
                    source={require("./assets/ourhistory-inactive.png")}
                    style={styles.tabbarIcon}
                  />
                )
            }
          },
          TRAINERS: {
            screen: TrainersScreen,
            navigationOptions: {
              tabBarLabel: "OUR TRAINERS",
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Image
                    source={require("./assets/trainers-active.png")}
                    style={styles.tabbarIcon}
                  />
                ) : (
                  <Image
                    source={require("./assets/trainers-inactive.png")}
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

class App extends Component {
  componentDidMount() {
    registerForNotifications();
    this.listener = Notifications.addListener(this.listen);
  }

  listen = ({ origin, data }) => {
    console.log("origin:", origin, "data:", data);
  };

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Header headerText="HOI AN MUAY THAI GYM" />
          <AppContainer />
        </View>
      </Provider>
    );
  }
}

export default App;
