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
                marginBottom: isShowKeyBord ?  0: 10
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
                  onFocus={() => {
                    setIsShowKeyBord(true);
                  }}
                />
                <TextInput
                  style={styles.input}
                  // onChangeText={onChangeNumber}
                  // value={number}
                  placeholder='Enter email'
                  onFocus={() => {
                    setIsShowKeyBord(true);
                  }}
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


