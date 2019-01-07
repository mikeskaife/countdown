import React, { Component } from "react";
import { View, Text, TouchableHighlight } from "react-native";

class EventForm extends Component {
  static navigationOptions = {
    title: "Add Event"
  };

  render() {
    handleAddPress = () => {
      this.props.navigation.navigate(list);
    };

    return (
      <View>
        <TouchableHighlight onPress={this.handleAddPress}>
          <Text>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default EventForm;
