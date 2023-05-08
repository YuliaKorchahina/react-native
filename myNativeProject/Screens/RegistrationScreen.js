import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import bg from "../assets/images/photo_bg.png";
import { styles } from "../styles/styles";

const bodyText = "Registration";
export const RegistrationScreen = () => {
  const [isShowKeyBord, setIsShowKeyBord] = useState(false);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground source={bg} style={styles.bgImage}>
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.form,
                marginBottom: isShowKeyBord ? 20 : 100
              }}
            >
              <View style={styles.wrapper}>
                <View style={styles.addPhoto}></View>
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
                  secureTextEntry={true}
                  // onChangeText={onChangeNumber}
                  // value={number}
                  onFocus={() => {
                    setIsShowKeyBord(true);
                    //  setEmailBorderColor(accentBorderColor);
                  }}
                  placeholder='Enter password'
                />
                <TouchableOpacity
                  style={styles.registerBtn}
                  onPress={() => alert(" button pressed")}
                >
                  <Text style={styles.textBtn}>To register</Text>
                </TouchableOpacity>
                <Text style={styles.isUserTitle}>
                  Already have an account? Enter
                </Text>
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     position: "relative",
//     flex: 1,
//     backgroundColor: "#fff",
//     justifyContent: "center",
//   },
//   bgImage: {
//     flex: 1,
//     resizeMode: "cover",
//     justifyContent: "center"
//   },
//   wrapper: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: "center",
//     // alignItems: "center",
//     position: "absolute",
//     top: 263,
//     backgroundColor: "#fff",
//     width: "100%",
//     height: 549,
//     borderRadius: 16,
//     // paddingHorizontal: 16
//   },
//   addPhoto: {
//     position: "absolute",
//     width: 120,
//     height: 120,
//     marginBottom: 32,
//     top: 0,
//     left: "50%",
//     transform: [{ translateY: -50 }, { translateX: -50 }],
//     backgroundColor: "#F6F6F6",
//     borderRadius: 16
//   },
//   title: {
//     // marginTop: 92,
//     fontFamily: "Roboto",
//     color: "#212121",
//     fontSize: 30,
//     lineHeight: 35,
//     fontWeight: 500,
//     textAlign: "center"
//   },
//   input: {
//     height: 50,
//     margin: 12,
//     borderWidth: 1,
//     padding: 16,
//     backgroundColor: "#F6F6F6",
//     borderWidth: 1,
//     borderColor: "#E8E8E8",
//     borderRadius: 8
//   },
//   registerBtn: {
//     width: 343,
//     backgroundColor: "#FF6C00",
//     borderRadius: 100,
//     paddingVertical: 16,
//     marginTop:40,
//     outline: "none",
//     alignItems: "center",
//     justifyContent: "center",
//     // paddingLeft:16
//   },
//   textBtn: {
//     fontSize: 16,
//     lineHeight: 19,
//     fontWeight: "bold",
//     letterSpacing: 0.25,
//     color: "#FFFFFF"
//   },
//   isUserTitle:{
//     fontSize: 16,
//     lineHeight: 19,
//     color: "#1B4371",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
