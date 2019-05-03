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
  onSlidesComplete = () => {
    this.props.navigation.navigate("HOME");
  };

  componentDidMount() {
    this.submitHandler();
  }

  submitHandler = () => {
    const id = this.props.userInfo.id;
    const name = this.props.userInfo.name;
    const email = this.props.userInfo.email;

    const requestBody = {
      query: `
          mutation {
            createUser(userInput: {userId: "${id}", name: "${name}", email: "${email}"}) {
              _id
              userId
              name
              email
            }
          }
        `
    };

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
        console.log(resData);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.props);

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

    return (
      <Slides
        name={this.props.userInfo.name}
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
