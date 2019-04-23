import React, { Component } from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import { Card, Button, Text, SocialIcon } from "react-native-elements";

import bgImage from "../assets/background.jpg";
import { white } from "material-ui/styles/colors";

class AboutusScreen extends Component {
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View
          style={{ backgroundColor: "rgba(255,255,255,0.5)", height: "100%" }}
        >
          <Text style={{ color: "red", textAlign: "center" }} h3>
            HOI AN MUAY THAI GYM
          </Text>
          <Text style={{ color: "black", fontSize: 20 }}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </Text>
          <SocialIcon
            title="Instagram"
            button
            type="instagram"
            onPress={() => alert("Instagram")}
          />
          <SocialIcon
            title="Facebook"
            button
            type="facebook"
            onPress={() => alert("Facebook")}
          />
          <SocialIcon
            title="Website"
            button
            type="wordpress"
            onPress={() => alert("Website")}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    height: null,
    width: null,
    backgroundColor: "#F5FCFF"
  }
});

export default AboutusScreen;
