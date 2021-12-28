import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function AnimatedImage(props) {
  return (
    <View style={styles.animatedImage}>
      <Image
        style={styles.image}
        source={{
          uri: props.img,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  animatedImage: {
    flex: 1,
    height: 300,
    marginBottom: 500,
    width: 300,
    paddingBottom: 100,
    backgroundSize: "contain",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginLeft: 120,
    height: 220,
    width: 300,
  },
});
