import React, { Component } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Tooltip, Text, Button } from "react-native-elements";

import bgImage from "../assets/background.jpg";

class TimetableScreen extends Component {
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <View>
          <Text style={{ color: "red", textAlign: "center" }} h1>
            Timetable
          </Text>
          <Text h4 style={{ textAlign: "center" }}>
            MONDAY TO FRIDAY:
          </Text>
          <Tooltip
            backgroundColor="black"
            height={100}
            width={300}
            popover={
              <Text style={styles.popoverStyle}>From 09:00 to 10:30</Text>
            }
          >
            <Text h3 style={styles.textStyle}>
              Morning Classes
            </Text>
          </Tooltip>
          <Tooltip
            backgroundColor="black"
            height={100}
            width={300}
            popover={
              <Text style={styles.popoverStyle}>From 17:30 to 19:00</Text>
            }
          >
            <Text h3 style={styles.textStyle}>
              Afternoon Classes
            </Text>
          </Tooltip>
          <Tooltip
            backgroundColor="black"
            height={100}
            width={300}
            popover={
              <Text style={styles.popoverStyle}>From 10:30 to 16:00</Text>
            }
          >
            <Text h3 style={styles.textStyle}>
              Private Classes
            </Text>
          </Tooltip>
          <Button
            backgroundColor="rgba(255,255,255,0.7)"
            buttonStyle={styles.buttonStyle}
            title="CHECK PRICES"
            titleStyle={{ color: "black" }}
            onPress={() => this.props.navigation.navigate("PRICES")}
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
    width: null
  },
  textStyle: {
    textAlign: "center",
    backgroundColor: "rgba(255,255,255,0.9)",
    margin: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "black"
  },
  popoverStyle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
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

export default TimetableScreen;
