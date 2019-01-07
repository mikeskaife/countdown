import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  StyleSheet
} from "react-native";

const styles = StyleSheet.create({
  form: {
    flex: 1,
    backgroundColor: "#f3f3f3"
  },
  fieldContainer: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#fff"
  },
  text: {
    height: 40,
    margin: 0,
    marginRight: 7,
    paddingLeft: 10
  },
  button: {
    height: 50,
    backgroundColor: "#48bbec",
    borderColor: "#48bbec",
    alignSelf: "stretch",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  buttonText: {
    color: "#fff",
    fontSize: 18
  }
});

class EventForm extends Component {
  static navigationOptions = {
    title: "Add Event"
  };

  state = { title: "" };

  handleChangeTitle = value => {
    this.setState({ title: value });
  };

  handleAddPress = () => {
    this.props.navigation.navigate("list");
  };

  render() {
    return (
      <View style={styles.form}>
        <View style={styles.fieldContainer}>
          <TextInput
            style={styles.text}
            placeholder="Event title"
            spellCheck={false}
            onChangeText={this.handleChangeTitle}
            value={this.state.title}
          />
        </View>
        <TouchableHighlight onPress={this.handleAddPress} style={styles.button}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default EventForm;
