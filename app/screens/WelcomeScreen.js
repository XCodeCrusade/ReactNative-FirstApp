import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

function WelcomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rock Paper Scissors!</Text>
      <Text style={styles.emoji}>✊ ✋ ✌️</Text>
      <View style={styles.btnContainer}>
        <Button onPress={() => props.onPress(true)} title="Play!" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 28,
    marginBottom: 10,
  },
  emoji: {
    fontSize: 60,
  },
  btnContainer: {
    marginTop: 60,
    width: 240,
  },
});
export default WelcomeScreen;
