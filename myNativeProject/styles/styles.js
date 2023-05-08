import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'flex-end',
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  wrapper: {
    display: 'flex',
    alignItems: "center",
    backgroundColor: "#fff",
    // // flexDirection: 'column',
    // justifyContent: "center",
    // position: "absolute",
    top: 230,
    // width: "100%",
    // height: 549,
    // borderTopLeftRadius: 25,
    // borderTopRightRadius: 25,
    // paddingTop: 32,
  },
  addPhoto: {
    position: "absolute",
    width: 120,
    height: 120,
    // marginBottom: 32,
    top: 0,
    left: "50%",
    transform: [{ translateY: -50 }, { translateX: -50 }],
    backgroundColor: "#F6F6F6",
    borderRadius: 16
  },
  title: {
    marginTop: 60,
    marginBottom: 32,
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
    margin: 12,
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
    marginTop:40,
    outline: "none",
    alignItems: "center",
    justifyContent: "center",
    // paddingLeft:16
  }, 
  textBtn: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#FFFFFF"
  }, 
  isUserTitle:{
    fontSize: 16,
    marginTop:15,
    lineHeight: 19,
    color: "#1B4371",
    alignItems: "center",
    justifyContent: "center"
  }
});