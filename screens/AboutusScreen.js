import React, { Component } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Linking,
  ScrollView
} from "react-native";
import { Text, SocialIcon } from "react-native-elements";

import bgImage from "../assets/background.jpg";
import { white } from "material-ui/styles/colors";

class AboutusScreen extends Component {
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
              HOI AN MUAY THAI GYM
            </Text>
            <Text style={{ color: "red", textAlign: "center" }} h4>
              Our History
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 20,
                margin: 10
              }}
            >
              <Text>
                Hoi An Muay Thai Gym was born in the beginning of the second
                half of 2018, even though the passion for the 'Art of the Eight
                Limbs' began several years before.{"\n"}
              </Text>
              <Text>
                From the idea and the will of having a Muay thai Gym also in the
                middle of Vietnam, Miguel and Andrew, the actual owners of the
                Gym, created the project of what would have been call,
                eventually, Hoi An Muay Thai gym.{"\n"}
              </Text>
              <Text>
                So, after quick arrangements and decisions, like the purchase of
                the whole equipment, which goes from the mats for the floor, to
                the bags, to the actual gloves and shinguards, the gym began to
                take its real shape in the very first location, the busy Hai Ba
                Trung road. Here, finally, locals and expats could have a space
                in which they can train, learn how to fight, or simply stay fit,
                with the help of professional trainers.{"\n"}
              </Text>
              <Text>
                Indeed, the experience made by trainers at Hoi An Muay Thai Gym,
                who fought professionally around the World, made consistent the
                increasing improvements of the services offered.{"\n"}
              </Text>
              <Text>
                And this is pretty much the first goal and the reason why a Muay
                Thai gym has been built in Hoi An. From entry levels to
                experienced ones, the final goal is to make everyone aware of
                their own potential and, why not, to make people believe that
                everyone can overcome mental limits and enjoy a friendly
                environment.{"\n"}
              </Text>
            </Text>
            <SocialIcon
              title="Instagram"
              button
              type="instagram"
              onPress={() => this.handleClick("instagram")}
            />
            <SocialIcon
              title="Facebook"
              button
              type="facebook"
              onPress={() => this.handleClick("facebook")}
            />
            <SocialIcon
              style={{ backgroundColor: "red" }}
              title="Website"
              button
              type="wordpress"
              onPress={() => this.handleClick("website")}
            />
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

export default AboutusScreen;
