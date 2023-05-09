import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end"
  },
  form: {
    mrgineHorizontal: 16,
  },
  wrapper: {
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingBottom: 90,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },
  addPhoto: {
    position: "absolute",
    width: 120,
    height: 120,
    // top: 0,
    left: "50%",
    transform: [{ translateY: -50 }, { translateX: -50 }],
    backgroundColor: "#F6F6F6",
    borderRadius: 16
  },
  title: {
    paddingBottom: 30,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#212121",
    fontSize: 30,
    lineHeight: 35,
    fontWeight: 500,
    textAlign: "center"
  },
  input: {
    width: 343,
    height: 50,
    marginBottom: 16,
    fontSize: 16,
    borderWidth: 1,
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8
  },
  registerBtn: {
    width: 343,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    paddingVertical: 16,
    marginTop: 35,
    outline: "none",
    alignItems: "center",
    justifyContent: "center"
  },
  textBtn: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#FFFFFF"
  },
  isUserTitle: {
    fontSize: 16,
    marginTop: 15,
    lineHeight: 19,
    color: "#1B4371",
    alignItems: "center",
    justifyContent: "center"
  }
});
