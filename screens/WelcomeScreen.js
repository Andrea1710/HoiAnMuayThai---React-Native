import _ from "lodash";
import React, { Component } from "react";
import { Text, AsyncStorage } from "react-native";
import { AppLoading } from "expo";
import Slides from "../components/Slides";

import logo from "../assets/logo.png";
import fight from "../assets/learn-to-fight.jpg";
import smile from "../assets/smile.jpg";

const SLIDE_DATA = [
  {
    text: (
      <Text>
        Welcome to {"\n"}{" "}
        <Text style={{ fontWeight: "bold" }}>HOI AN MUAY THAI</Text>
      </Text>
    ),
    color: "#141414",
    swipe: "< < < < < < < < < Swipe",
    image: logo
  },
  {
    text: "Learn how to fight, stay fit, lose weight and...",
    color: "#141414",
    swipe: "< < < < < < < < < Swipe",
    image: fight
  },
  { text: "...enjoy your time with us!", color: "#141414", image: smile }
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
