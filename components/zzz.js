import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function Zzz() {
  return (
    <View style={styles.zzz}>
      <Text>Hello World!</Text>
      <Image
        style={styles.image}
        source={{
          uri: "https://64.media.tumblr.com/7fac93bfcefaa5b8fbed9508c79df07f/tumblr_inline_parc9yKfB91vttzeg_500.gif",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  zzz: {
    height: 300,
    width: 300,
    paddingBottom: 100,
    backgroundSize: "contain",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 100,
    width: 100,
  },
});
