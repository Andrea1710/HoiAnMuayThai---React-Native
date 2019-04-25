import React, { Component } from "react";
import { View, ImageBackground, StyleSheet, ScrollView } from "react-native";
import { Card, Button, Text } from "react-native-elements";

import bgImage from "../assets/background.jpg";
import muay_thai_class from "../assets/muay-thai-class.png";
import miguel from "../assets/miguel.jpg";

const TRAINERS = [
  {
    id: 1,
    title: "MIGUEL ARAYA",
    image: miguel,
    description: "Muay Thai instructor - Professional Fighter",
    fights: "8 Figths - 6 W - 2 L - 0 D",
    buttontext: "PROFILE"
  },
  {
    id: 2,
    title: "ANDREA BELLUCCIA",
    image: miguel,
    description: "Muay Thai instructor - Professional Fighter",
    fights: "8 Figths - 6 W - 2 L - 0 D",
    buttontext: "PROFILE"
  }
];

class TrainersScreen extends Component {
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <Text style={{ color: "red", textAlign: "center" }} h1>
          Classes
        </Text>
        <ScrollView>
          <View style={styles.homeContainer}>
            {TRAINERS.map(trainer => {
              return (
                <Card
                  key={trainer.id}
                  title={trainer.title}
                  image={trainer.image}
                  featuredTitle={trainer.fights}
                  titleNumberOfLines={2}
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
                    {trainer.description}
                  </Text>
                  <Button
                    backgroundColor="rgba(255,255,255,0.7)"
                    buttonStyle={{
                      borderRadius: 10,
                      marginLeft: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      backgroundColor: "#141414"
                    }}
                    titleStyle={{ color: "red" }}
                    title={trainer.buttontext}
                    onPress={() => alert("You joined the class!")}
                  />
                </Card>
              );
            })}
          </View>
        </ScrollView>
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
  },
  homeContainer: {
    color: "white"
  }
});

export default TrainersScreen;
