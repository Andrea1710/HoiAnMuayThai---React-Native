import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Tooltip, Text } from "react-native-elements";

class TimetableScreen extends Component {
  render() {
    return (
      <View style={{ margin: 20 }}>
        <Text h4 style={{ textAlign: "center" }}>
          MONDAY TO FRIDAY:
        </Text>
        <Tooltip
          backgroundColor="black"
          height={100}
          width={300}
          popover={<Text style={styles.popoverStyle}>From 09:00 to 10:30</Text>}
        >
          <Text h1 style={styles.textStyle}>
            Morning Classes
          </Text>
        </Tooltip>
        <Tooltip
          backgroundColor="black"
          height={100}
          width={300}
          popover={<Text style={styles.popoverStyle}>From 17:30 to 19:00</Text>}
        >
          <Text h1 style={styles.textStyle}>
            Afternoon Classes
          </Text>
        </Tooltip>
        <Tooltip
          backgroundColor="black"
          height={100}
          width={300}
          popover={<Text style={styles.popoverStyle}>From 10:30 to 16:00</Text>}
        >
          <Text h1 style={styles.textStyle}>
            Private Classes
          </Text>
        </Tooltip>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "center",
    margin: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10
  },
  popoverStyle: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  }
});

export default TimetableScreen;
