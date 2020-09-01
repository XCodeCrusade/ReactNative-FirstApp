import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";

import bgColors from "../config/colors.js";

const scissorsPng = require("../assets/scissors.png");
const rockPng = require("../assets/rock.png");
const paperPng = require("../assets/paper.png");

// generate a random Sign
const randomSignGenerator = () => {
  const signPng = [scissorsPng, rockPng, paperPng];
  const randVal = Math.floor(Math.random() * 3);
  return signPng[randVal];
};

function ViewImageScreen(props) {
  const [counter, SetCounter] = useState(3);
  const handlePress = () => {
    SetCounter(3);
  };
  useEffect(() => {
    if (counter < 1) return;
    const timer = setTimeout(() => {
      SetCounter((previous) => previous - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [counter]);

  return (
    <View style={styles.container}>
      {counter < 1 ? (
        <>
          <Image style={styles.sign} source={randomSignGenerator()} />

          <View
            style={StyleSheet.compose(styles.playAgainBtn, styles.btnContainer)}
          >
            <Button onPress={handlePress} title="Play Again!" />
          </View>

          <View
            style={StyleSheet.compose(styles.homePageBtn, styles.btnContainer)}
          >
            <Button onPress={() => props.onPress(false)} title="Home Page" />
          </View>
        </>
      ) : (
        <View
          style={StyleSheet.compose(styles.counterContainer, {
            backgroundColor: bgColors[counter - 1],
          })}
        >
          <Text style={styles.counter}>{counter}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    position: "absolute",
    width: 240,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  counter: {
    fontSize: 150,
    color: "#fff",
  },
  counterContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  sign: {
    width: 200,
    height: 200,
  },
  homePageBtn: {
    bottom: 40,
    marginBottom: 20,
  },
  playAgainBtn: {
    bottom: 20,
  },
});
export default ViewImageScreen;
