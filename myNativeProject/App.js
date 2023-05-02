import { useCallback } from 'react'
import { useFonts } from 'expo-font';

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {RegistrationScreen} from './Screens/RegistrationScreen'

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   'Roboto': require('./assets/fonts/Roboto.js'),
  // });

  // if (!fontsLoaded) {
  //   return null;
  // }
  return (
    <RegistrationScreen />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
