import { StatusBar } from "expo-status-bar";

import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Audio } from "expo-av";

import Zzz from "./components/zzz";
const uri = "https://thumbs.gfycat.com/ZestyCluelessEyas-max-1mb.gif";

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
      <Zzz imgzzz={uri} />
      <Button title="Play" onPress={playSound} style={styles.button}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",

    backgroundImage: 'url("https://i.ibb.co/SchPqXr/sleepfloppa.png")',
    backgroundSize: "cover",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button:{
    width: 200,
    height: 300,
  }
});
