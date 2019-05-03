import React, { Component } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Dimensions
} from "react-native";
import { Card, Button, Text, Icon } from "react-native-elements";
import { connect } from "react-redux";

import bgImage from "../assets/background.jpg";

const { width: WIDTH } = Dimensions.get("window");

class ClassesScreen extends Component {
  state = {
    title: "",
    description: "",
    date: "",
    time: "",
    classes: [],
    selectedClass: null
  };

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  };

  modalConfirmHandler = () => {
    const title = this.state.title;
    const description = this.state.description;
    const date = this.state.date;
    const time = this.state.time;

    const mtclass = {
      title: title,
      description: description,
      date: date,
      time: time
    };
    console.log(mtclass);

    const requestBody = {
      query: `
          mutation {
            createClass(classInput: {title: "${title}", description: "${description}", date: "${date}", time: "${time}"}) {
              _id
              title
              description
              date
              time
          }
        }
        `
    };

    const token = this.props.token;

    fetch("http://localhost:8000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);

        this.setState(prevState => {
          const updatedClasses = [...prevState.classes];
          updatedClasses.push({
            _id: resData.data.createClass._id.toString(),
            title: resData.data.createClass.title,
            description: resData.data.createClass.description,
            date: resData.data.createClass.date,
            time: resData.data.createClass.time
          });
          return {
            classes: updatedClasses
          };
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  fetchClasses = () => {
    const requestBody = {
      query: `
          query {
            classes {
              _id
              title
              description
              date
              time
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
          throw new Error("Failed");
        }
        return res.json();
      })
      .then(resData => {
        const classes = resData.data.classes;
        this.setState({ classes: classes });
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteClassHandler = classId => {
    const requestBody = {
      query: `
          mutation CancelClass($id: ID!) {
            deleteClass(classId: $id) {
              _id
              title
            }
          }
        `,
      variables: {
        id: classId
      }
    };

    const token = this.props.token;

    fetch("http://localhost:8000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        this.setState(prevState => {
          const updatedClasses = prevState.classes.filter(mtclass => {
            return mtclass._id !== classId;
          });
          return { classes: updatedClasses };
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  joinClassHandler = classId => {
    const userId = this.props.userInfo.id;
    const userEmail = this.props.userInfo.email;
    const requestBody = {
      query: `
          mutation {
            joinClass(classId: "${classId}", userId: "${userId}", userEmail: "${userEmail}") {
              _id
            }
          }
        `
    };

    const token = "ujwrhdjfbckwmhdnfbcjmn";

    fetch("http://localhost:8000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
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

  componentDidMount() {
    this.fetchClasses();
  }

  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
        <Text style={{ color: "red", textAlign: "center" }} h1>
          Classes
        </Text>
        <ScrollView
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.inputContainer}>
              <Text
                style={{ textAlign: "center", color: "white", margin: 10 }}
                h3
              >
                Class Creator
              </Text>
              <TextInput
                style={styles.input}
                placeholder={"title"}
                placeholderTextColor={"rgba(255,255,255,0.7)"}
                underlineColorAndroid="transparent"
                onChangeText={val => this.onChangeText("title", val)}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder={"description"}
                placeholderTextColor={"rgba(255,255,255,0.7)"}
                underlineColorAndroid="transparent"
                onChangeText={val => this.onChangeText("description", val)}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder={"date"}
                placeholderTextColor={"rgba(255,255,255,0.7)"}
                underlineColorAndroid="transparent"
                onChangeText={val => this.onChangeText("date", val)}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder={"time"}
                placeholderTextColor={"rgba(255,255,255,0.7)"}
                underlineColorAndroid="transparent"
                onChangeText={val => this.onChangeText("time", val)}
              />
            </View>
            <TouchableOpacity style={{ margin: 10 }}>
              <Button title="Create Class" onPress={this.modalConfirmHandler} />
            </TouchableOpacity>
          </KeyboardAvoidingView>

          <View style={styles.homeContainer}>
            {this.state.classes.map(mtClass => {
              const muay = "../assets/muay-thai-class.png";
              return (
                <Card
                  key={mtClass._id}
                  title={mtClass.title}
                  image={require(muay)}
                  featuredTitle={`${mtClass.time} \n ${mtClass.date}`}
                  titleNumberOfLines={2}
                  containerStyle={{
                    backgroundColor: "rgba(255,255,255,0.8)",
                    borderColor: "black",
                    borderRadius: 10,
                    marginBottom: 20
                  }}
                  titleStyle={{
                    fontSize: 22,
                    fontWeight: "bold",
                    color: "red",
                    backgroundColor: "black",
                    padding: 10
                  }}
                >
                  <Text style={{ marginBottom: 5, fontSize: 16 }}>
                    {mtClass.description}
                  </Text>
                  <Button
                    backgroundColor="rgba(255,255,255,0.7)"
                    buttonStyle={{
                      borderRadius: 10,
                      marginLeft: 0,
                      marginRight: 0,
                      marginBottom: 0,
                      backgroundColor: "red",
                      borderColor: "black",
                      borderWidth: 1
                    }}
                    titleStyle={{ color: "#141414", fontWeight: "bold" }}
                    title="JOIN CLASS"
                    onPress={() => this.joinClassHandler(mtClass._id)}
                  />
                  <Icon
                    name="delete"
                    color="blue"
                    size={30}
                    raised
                    containerStyle={{ margin: 5, alignItems: "center" }}
                    onPress={() => this.deleteClassHandler(mtClass._id)}
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
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    width: "95%",
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.7)"
  },
  homeContainer: {
    color: "white"
  },
  inputContainer: {
    marginTop: 10
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: "rgba(0,0,0,0.35)",
    color: "white",
    marginHorizontal: 25
  },
  btn: {
    width: 200,
    height: 45,
    borderRadius: 25,
    justifyContent: "center",
    margin: 20
  },
  text: {
    color: "rgba(255,255,255,0.9)",
    fontSize: 16,
    textAlign: "center"
  }
});

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    userInfo: state.auth.userInfo
  };
};

export default connect(mapStateToProps)(ClassesScreen);
