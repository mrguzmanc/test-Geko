import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const InputNumberBtn = ({ number, pressingOptions }) => {
  return (
    <TouchableOpacity
      style={styles.action}
      onPress={() => pressingOptions(number)}
    >
      {number == "=" || number == "+" || number == "-" || number == "X" || number == "/" || number == "C" || number == "clear" || number == "+" || number == "%" || number == "." ?
        <Text style={styles.symbol}>{number}</Text> :
        <Text style={styles.numbrBtn}>{number}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  action: {
    flexDirection: "row",
    marginTop: 0,
    width: "20%",
    height: 50,
  },
  symbol: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#009821",
    height: 36,
    fontSize: 30,
    width: 62,
    height: 62
  },
  numbrBtn: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
    height: 36,
    fontSize: 30,
    width: 62,
    height: 62
  },
});

export default InputNumberBtn;
