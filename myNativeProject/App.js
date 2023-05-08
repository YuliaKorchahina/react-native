import { useCallback } from "react";
import { useFonts } from "expo-font";
import { StyleSheet, ImageBackground, Text, View } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { RegistrationScreen } from "./Screens/RegistrationScreen";
import {styles} from "./styles/styles";

export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationScreen />
    </View>
  );
}
