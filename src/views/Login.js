import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";

import TextInputTemplate from "../components/inputField";

const Login = ({ navigation }) => {
  function Login() {
    navigation.push("Report");
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../images/logo1.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.floating}>
        <Image
          source={require("../images/logo.png")}
          style={styles.logo_content}
          resizeMode="contain"
        />
        <TextInputTemplate placeHolder="Username" secureEntry={false} />
        <TextInputTemplate placeHolder="Password" secureEntry={true} />
        <TouchableOpacity onPress={Login} style={styles.signIn}>
          <Text style={styles.appButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}></View>
    </View>
  );
};

const { height } = Dimensions.get("screen");
const height_logo = height * 0.12;
const height_dash = height * 0.2;
const floating_width = height * 0.5;
const floating_height = height * 0.6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0072B1",
  },
  floating: {
    position: "relative",
    backgroundColor: "#FFFFFF",
    width: floating_width,
    alignItems: "center",
    left: "5%",
    top: "10%",
    zIndex: 999,
    height: floating_height,
    shadowColor: "black",
    shadowOpacity: 0.25,
    elevation: 6,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 3,
    backgroundColor: "#FFFFFF",
    zIndex: 1,
  },
  logo: {
    top: "50%",
    height: height_logo,
    width: "100%",
  },
  logo_content: {
    top: "0 %",
    height: height_dash,
    width: "50%",
  },
  textStyle: {
    borderColor: "#CACACA",
  },
  btn_click: {
    backgroundColor: "#009821",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#CACACA",
    paddingBottom: 5,
    width: "80%",
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: "#05375a",
    height: 36,
    fontSize: 16,
  },
  signIn: {
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    top: "5%",
    backgroundColor: "#009821",
  },
  appButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Login;
