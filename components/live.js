import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function live() {
  const [showLive, setShowLive] = useState(true);

  useEffect(() => {
    // Change the state every second or the time given by User.
    const interval = setInterval(() => {
      setShowLive((showLive) => !showLive);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={[styles.container, { opacity: showLive ? 0 : 1 }]}>
      <View style={styles.circle}></View>
      <Text style={styles.liveText}>LIVE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 5,
    height: 30,
    marginBottom: -180,
    marginRight: 250,
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
