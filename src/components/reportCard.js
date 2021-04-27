import React from "react";
import {
  Text,
  View,
  StyleSheet,
} from "react-native";

const ReportCard = ({ report }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.num}>{report.id}</Text>
      </View>
      <View style={styles.box2}>
        <Text style={styles.rep}>{report.operation}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    textAlign: "center",
    alignContent: "flex-start",
    marginBottom: 23,
    borderWidth: 1,
    borderColor: "#D1D1D1",
    marginHorizontal: 26,
    height: 62,
  },
  box1: {
    backgroundColor: "#009821",
    width: 62,
    textAlign: "center",
    justifyContent: "center",
  },
  num: {
    backgroundColor: "#009821",
    color: "#ffffff",
    lineHeight: 41,
    fontSize: 35,
    textAlign: "center",
  },
  box2: {
    width: 259,
    textAlign: "center",
    justifyContent: "center",
  },
  rep: {
    color: "#A7A7A7",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ReportCard;
