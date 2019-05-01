import React, { Component } from "react";
import { View, ImageBackground, StyleSheet, ScrollView } from "react-native";
import { Card, Button, Text, Overlay } from "react-native-elements";

import bgImage from "../assets/background.jpg";
import miguel from "../assets/miguel.jpg";
import andrea from "../assets/andrea.jpg";

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
    image: andrea,
    description: "Muay Thai instructor - Professional Fighter",
    fights: "8 Figths - 6 W - 2 L - 0 D",
    buttontext: "PROFILE"
  }
];

class TrainersScreen extends Component {
  state = {
    show: false
  };

  onOpenOverlay = () => {
    this.setState(prevState => {
      return {
        show: !prevState.show
      };
    });
  };

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
                    onPress={this.onOpenOverlay}
                  />
                  {this.state.show ? (
                    <Overlay
                      overlayStyle={{ borderRadius: 30 }}
                      onBackdropPress={this.onOpenOverlay}
                      width={300}
                      height={300}
                      isVisible
                    >
                      <View>
                        <Text>TRAINER NAME</Text>
                        <Text>TRAINER DESCRIPTION</Text>
                        <Text>TRAINER EXPERIENCE</Text>
                        <Text
                          style={{
                            borderWidth: 1,
                            borderColor: "red",
                            backgroundColor: "black",
                            color: "white",
                            position: "relative",
                            marginTop: "60%",
                            textAlign: "center",
                            padding: 5
                          }}
                          onPress={this.onOpenOverlay}
                        >
                          Close
                        </Text>
                      </View>
                    </Overlay>
                  ) : null}
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
