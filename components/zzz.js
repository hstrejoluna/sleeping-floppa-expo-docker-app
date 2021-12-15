import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function Zzz(props) {
  return (
    <View style={styles.zzz}>
      <Image
        style={styles.image}
        source={{
          uri: props.imgzzz,
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
    marginLeft: 120,
    height: 220,
    width: 300,
  },
});
