import _ from "lodash";
import React, { Component } from "react";
import { Text, AsyncStorage } from "react-native";
import { AppLoading } from "expo";
import Slides from "../components/Slides";

const SLIDE_DATA = [
  {
    text: (
      <Text>
        Welcome to {"\n"}{" "}
        <Text style={{ fontWeight: "bold" }}>HOI AN MUAY THAI</Text>
      </Text>
    ),
    color: "red",
    swipe: "Swipe > > > > > >"
  },
  {
    text: "Learn how to fight, stay fit, lose weight and...",
    color: "black",
    swipe: "Swipe > > > > > > "
  },
  { text: "...enjoy your time with us!", color: "red" }
];

class WelcomeScreen extends Component {
  state = { token: null };

  async componentDidMount() {
    let token = await AsyncStorage.getItem("fb_token");

    if (token) {
      this.props.navigation.navigate("classes");
      this.setState({ token: token });
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate("auth");
  };

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }

    return <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />;
  }
}

export default WelcomeScreen;
