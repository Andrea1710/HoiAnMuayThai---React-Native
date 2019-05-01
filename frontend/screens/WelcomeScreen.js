import _ from "lodash";
import React, { Component } from "react";
import { AppLoading } from "expo";
import { Text, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import Slides from "../components/Slides";

import logo from "../assets/logo.png";
import fight from "../assets/learn-to-fight.jpg";
import smile from "../assets/smile.jpg";

class WelcomeScreen extends Component {
  state = { token: null };

  async componentWillMount() {
    let token = await AsyncStorage.getItem("fb_token");

    if (token) {
      this.props.navigation.navigate("welcome");
      this.setState({ token: token });
    } else {
      this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate("HOME");
  };

  render() {
    const fullName = this.props.userInfo.name;
    const name = fullName.split(" ")[0];

    const SLIDE_DATA = [
      {
        text: (
          <Text>
            Hi <Text style={{ fontWeight: "bold" }}>{name}</Text>!{"\n"}
            {"\n"} Welcome to {"\n"}{" "}
            <Text style={{ fontWeight: "bold", color: "red" }}>
              HOI AN MUAY THAI GYM
            </Text>
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

    if (!this.state.token) {
      return <AppLoading />;
    }

    return (
      <Slides
        name="{this.props.userInfo.name}"
        data={SLIDE_DATA}
        onComplete={this.onSlidesComplete}
      />
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { token: auth.token, userInfo: auth.userInfo };
};

export default connect(mapStateToProps)(WelcomeScreen);
