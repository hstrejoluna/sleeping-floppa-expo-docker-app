import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Zzz from './components/zzz';

export default function App() {
  return (
    <View style={styles.container}>
      <Zzz />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    
    backgroundImage: 'url("https://i.ibb.co/SchPqXr/sleepfloppa.png")',
    backgroundSize: 'contain',
   
  },
});
