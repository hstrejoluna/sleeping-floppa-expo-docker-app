import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function live() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <Text style={styles.liveText}>LIVE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    height: 30,
    width: 30,
    marginRight: 10,
    borderRadius: 200,
    backgroundColor: "red",
  },
  liveText: {
    fontSize: 25,
    padding: 5,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "red",
  },
});
