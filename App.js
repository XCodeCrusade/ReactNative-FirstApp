import React, { useState } from "react";
import { StyleSheet } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  const [playState, setPlayState] = useState(false);
  return playState ? (
    <ViewImageScreen onPress={(value) => setPlayState(value)} />
  ) : (
    <WelcomeScreen onPress={(value) => setPlayState(value)} />
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
