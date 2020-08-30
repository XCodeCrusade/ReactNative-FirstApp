import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  const handlePress = () => console.log("Text pressed");
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={this.handlePress}>
        Hello React Native!
      </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
