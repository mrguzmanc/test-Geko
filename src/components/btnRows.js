import React from "react";
import { StyleSheet, View } from "react-native";
import InputNumberBtn from "./numberBtns";

const InputRow = ({ inputNumbers, pressingButtons }) => {
  return (
    <View style={styles.action}>
      {inputNumbers.map((option, index) => {
        return (
          <InputNumberBtn key={index} number={option} pressingOptions={pressingButtons} />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  action: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    paddingBottom: 5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
    height: 36,
    fontSize: 16,
  },
});

export default InputRow;
