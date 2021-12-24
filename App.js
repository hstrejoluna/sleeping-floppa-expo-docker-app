import { StatusBar } from "expo-status-bar";

import React, { useEffect, useState } from "react";
import { StyleSheet, ImageBackground, Text, View, Button } from "react-native";
import { Audio } from "expo-av";

import Zzz from "./components/AnimatedImage";
const uri = "https://thumbs.gfycat.com/ZestyCluelessEyas-max-1mb.gif";
const background = require('./assets/mainback.png');


export default function App() {
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
          setIsPlaying(false);
          console.log("Set isPlaying to false" + isPlaying);
        }
      : undefined;
  }, [sound]);

  async function playSound() {
    setIsPlaying(true);
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/Sleep.mp3")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode="cover" style={styles.image}>
        <Zzz imgzzz={uri} />

        <Button title="Play" onPress={playSound} style={styles.button} />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
   
  },

  image: {
    flex: 1,
    justifyContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
  },

  button: {
    width: 200,
    height: 300,
  },
});
