import React, { Component } from "react";
import { View, Text, ScrollView, Dimensions, Image } from "react-native";
import { Button } from "react-native-elements";
const SCREEN_WIDTH = Dimensions.get("window").width;

class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          title="START!"
          raised
          buttonStyle={styles.buttonStyle}
          onPress={this.props.onComplete}
        />
      );
    }
  }

  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          <Image source={slide.image} style={styles.image} />
          <Text style={styles.textStyle}>{slide.text}</Text>
          <Text style={{ color: "white", position: "absolute", bottom: 30 }}>
            {slide.swipe}
          </Text>
          {this.renderLastSlide(index)}
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView
        horizontal={true}
        decelerationRate={0}
        snapToInterval={SCREEN_WIDTH}
        snapToAlignment={"center"}
        style={{ flex: 1 }}
        pagingEnabled
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH
  },
  textStyle: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    margin: 10
  },
  buttonStyle: {
    backgroundColor: "red"
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 20
  }
};

export default Slides;
