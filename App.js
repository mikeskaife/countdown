import React from "react";
import { StyleSheet, Text, View } from "react-native";
import EventList from "./EventList";
import EventForm from "./EventForm";
import { createStackNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createStackNavigator({
  list: {
    screen: EventList
  },
  form: {
    screen: EventForm
  }
});

const App = createAppContainer(MainNavigator);

export default App;
