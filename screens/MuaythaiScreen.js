import React, { Component } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Linking,
  ScrollView
} from "react-native";
import { Text } from "react-native-elements";

import bgImage from "../assets/background.jpg";

class MuaythaiScreen extends Component {
  state = {
    instagramUri: "https://www.instagram.com/hoianmuaythai/",
    facebookUri: "https://www.facebook.com/hoianmuaythai/",
    websiteUri: "https://www.hoianmuaythai.com/"
  };

  handleClick = social => {
    let openSocial;
    if (social === "instagram") {
      openSocial = this.state.instagramUri;
    } else if (social === "facebook") {
      openSocial = this.state.facebookUri;
    } else {
      openSocial = this.state.websiteUri;
    }

    Linking.canOpenURL(openSocial).then(supported => {
      if (supported) {
        Linking.openURL(openSocial);
      } else {
        console.log("Don't know how to open Uri: " + this.state.instagramUri);
      }
    });
  };

  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View
          style={{ backgroundColor: "rgba(255,255,255,0.5)", height: "100%" }}
        >
          <ScrollView>
            <Text style={{ color: "red", textAlign: "center" }} h3>
              MUAY THAI
            </Text>
            <Text style={{ color: "red", textAlign: "center" }} h4>
              The Art of the Eight Limbs
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 20,
                margin: 10
              }}
            >
              Muay Thai or literally Thai boxing is a combat sport of Thailand
              that uses stand-up striking along with various clinching
              techniques. This discipline is known as the "art of eight limbs"
              as it is characterized by the combined use of fists, elbows,
              knees, and shins. Muay Thai became widespread internationally in
              the late 20th to 21st century, when westernized practitioners from
              Thailand began competing in kickboxing, mixed rules matches, as
              well as matches under Muay Thai rules around the world. The
              professional league is governed by The Professional Boxing
              Association of Thailand (P.A.T) sanctioned by The Sports Authority
              of Thailand (SAT), and World Professional Muaythai Federation
              (WMF) overseas. It is similar to related styles in other parts of
              the Indian cultural sphere, namely Lethwei in Myanmar, Pradal
              Serey in Cambodia, Muay Lao in Laos, and Tomoi in Malaysia.
            </Text>
          </ScrollView>
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

export default MuaythaiScreen;
