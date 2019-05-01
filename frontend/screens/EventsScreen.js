import React, { Component } from "react";
import { View, ImageBackground, ScrollView, StyleSheet } from "react-native";
import { Button, Card, Text } from "react-native-elements";

import bgImage from "../assets/background.jpg";

class EventsScreen extends Component {
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View>
          <Text style={{ color: "red", textAlign: "center" }} h1>
            Events
          </Text>
        </View>
        <ScrollView>
          <Card
            title="Fight Night in Danang"
            image={require("../assets/muay-thai-class.png")}
            containerStyle={{
              backgroundColor: "rgba(255,255,255,0.5)",
              borderColor: "black",
              borderRadius: 10,
              marginBottom: 20
            }}
            titleStyle={{
              fontSize: 20,
              fontWeight: "bold",
              color: "red"
            }}
          >
            <Text style={{ marginBottom: 10 }}>
              The Real Muay Thai comes to Vietnam in Danang!
            </Text>
            <Button
              backgroundColor="rgba(255,255,255,0.7)"
              buttonStyle={styles.buttonStyle}
              title="CHECK EVENT"
              titleStyle={{ color: "black" }}
              onPress={() => alert("Event checked")}
            />
          </Card>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    height: null,
    width: null
  },
  buttonStyle: {
    borderRadius: 10,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor: "red",
    borderColor: "black",
    borderWidth: 1
  }
});

export default EventsScreen;
