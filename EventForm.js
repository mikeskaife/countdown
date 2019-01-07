import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  StyleSheet
} from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { formatDate } from "./api";

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
  },
  borderTop: {
    borderColor: "#edeeef",
    borderTopWidth: 0.5
  }
});

class EventForm extends Component {
  static navigationOptions = {
    title: "Add Event"
  };

  state = { title: "", date: "" };

  handleChangeTitle = value => {
    this.setState({ title: value });
  };

  handleAddPress = () => {
    this.props.navigation.navigate("list");
  };

  handleDatePress = () => {
    this.setState({ showDatePicker: true });
  };

  handleDatePickerHide = () => {
    this.setState({ showDatePicker: false });
  };

  handleDatePicked = date => {
    this.setState({ date });
    this.setState({ showDatePicker: false });
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
          <TextInput
            style={[styles.text, styles.borderTop]}
            placeholder="Event date"
            spellCheck={false}
            value={formatDate(this.state.date.toString())}
            editable={!this.state.showDatePicker}
            onFocus={this.handleDatePress}
          />
          <DateTimePicker
            isVisible={this.state.showDatePicker}
            mode="datetime"
            onConfirm={this.handleDatePicked}
            onCancel={this.handleDatePickerHide}
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
