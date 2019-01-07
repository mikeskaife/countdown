import React, { Component } from "react";
import { Text, FlatList, StyleSheet } from "react-native";
import EventCard from "./EventCard";

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#f3f3f3"
  }
});

class EventList extends Component {
  state = {
    events: []
  };

  static navigationOptions = {
    title: "Your Events"
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        events: this.state.events.map(evt => ({
          ...evt,
          timer: Date.now()
        }))
      });
    }, 1000);

    const events = require("./db.json").events.map(e => ({
      ...e,
      date: new Date(e.date)
    }));
    this.setState({ events });
  }

  render() {
    return (
      <FlatList
        data={this.state.events}
        renderItem={({ item }) => <EventCard event={item} />}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    );
  }
}

export default EventList;
