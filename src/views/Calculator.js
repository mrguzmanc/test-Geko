import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { saveReportAction } from "../actions/reportActions";
import InputRow from "../components/btnRows";

const Calculator = ({ props }) => {
  const [screen, setScreen] = useState("0");
  const [firstValue, setfirstValue] = useState(0);
  const [mathOperator, setmathOperator] = useState("+");
  const [result, setResult] = useState("");
  const [operation, setOperationString] = useState("");

  const dispatch = useDispatch();
  const reports = useSelector((state) => state.reports);
  const saveLog = (log) => dispatch(saveReportAction(log));

  const buttons = [
    ["C", "clear", "%", "/"],
    ["7", "8", "9", "X"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["%", "0", ".", "="],
  ];

  const operators = ["+", "-", "X", "/"];
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const cleaners = ["C", "clear"];
  const decimal = ["."];
  const equals = "=";

  var secondValue = 0;

  useEffect(() => {
    if (result !== "") {
      saveLog({
        id: reports ? (reports.length + 1).toString() : "1",
        operation: operation + "   " + screen,
      });
    }
  }, [result]);

  const pressingButtons = (button) => {
    var lastChar = screen.substr(screen.length - 1);

    if (screen == "0" && numbers.includes(button)) {
      setScreen(button);
    } else if (operators.includes(button)) {
      setScreen(screen + " " + button);
      setOperation(screen, button);
    } else if (numbers.includes(button) && numbers.includes(lastChar)) {
      setScreen(screen + button);
    } else if (decimal.includes(button) && decimal.includes(lastChar)) {
      setScreen(screen);
    } else if (decimal.includes(button) || decimal.includes(lastChar)) {
      setScreen(screen + button);
    } else if (cleaners.includes(button)) {
      setScreen("0");
    } else if (equals == button) {
      validateOperation(screen);
    } else {
      setScreen(screen + " " + button);
    }
  };

  const setOperation = (screenValue, operator) => {
    setmathOperator(String(operator));
    var first = screenValue.split(operator);
    setfirstValue(parseInt(first[0]));
  };
  const validateOperation = (screenValue) => {
    if (mathOperator == "") {
    } else if (firstValue == "") {
    } else {
      var values = screenValue.split(mathOperator);
      secondValue = parseInt(values[1]);
    }

    switch (mathOperator) {
      case "+":
        var op = firstValue + secondValue;
        setScreen(screenValue + "=" + String(op));
        setOperationString("Addition");
        setResult(op);
        break;
      case "-":
        var op = firstValue - secondValue;
        setScreen(screenValue + "=" + String(op));
        setOperationString("Substraction");
        setResult(op);
        break;
      case "X":
        var op = firstValue * secondValue;
        setScreen(screenValue + "=" + String(op));
        setOperationString("Multiplication");
        setResult(op);
        break;
      case "/":
        var op = firstValue / secondValue;
        setScreen(screenValue + "=" + String(op));
        setOperationString("Division");
        setResult(op);
        break;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.dataInput}>{screen}</Text>
      </View>
      <View style={styles.footer}>
        {buttons.map((buttonItems, index) => {
          return (
            <InputRow
              key={index}
              inputNumbers={buttonItems}
              pressingButtons={pressingButtons}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0072B1",
  },
  footer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    zIndex: 2,
  },
  dataInput: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 40,
  },
});

export default Calculator;
