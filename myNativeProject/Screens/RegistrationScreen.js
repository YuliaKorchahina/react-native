import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  Button
} from "react-native";
import bg from "../assets/images/photo_bg.png";
// const image = ../assets/photo_BG
const bodyText = "Registration";
export const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.bgImage}>
        <View style={styles.wrapper}>
          <View style={styles.addPhoto}></View>
          {/* <Image ></Image>  */}
          <Text style={styles.title}>{bodyText}</Text>
          <TextInput
            style={styles.input}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder='Enter login'
          />
          <TextInput
            style={styles.input}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder='Enter email'
          />
          <TextInput
            style={styles.input}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder='Enter password'
          />
          <Button
            type='submit'
            style={styles.register}
            title='to register'
            onPress={() => alert(" button pressed")}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff"
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  wrapper: {
    position: "absolute",
    top: 263,
    backgroundColor: "#fff",
    width: "100%",
    height: 549,
    borderRadius: 16
  },
  addPhoto: {
    position: "absolute",
    width: 120,
    height: 120,
    marginBottom: 32,
    top: 0,
    left: "50%",
    transform: [{ translateY: -50 }, { translateX: -50 }],
    backgroundColor: "#F6F6F6",
    borderRadius: 16
  },
  title: {
    marginTop: 92,
    fontFamily: "Roboto",
    color: "#212121",
    fontSize: 30,
    lineHeight: 35,
    fontWeight: 500,
    textAlign: "center"
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 16,
    backgroundColor: "#F6F6F6",
    border: "1px solid #E8E8E8",
    borderColor: "#E8E8E8",
    borderRadius: 8
  },
  register: {
    display: "block",
    height: 51,
    width: 70,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    padding: 16,
    outline: "none"
  }
});
