import React, { useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from '@react-navigation/native';
import { getReportsAction } from "../actions/reportActions";

import CalcButton from '../components/calcButton';
import ReportCard from '../components/reportCard';

const Report = ({ navigation }) => {

  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const reports = useSelector((state) => state.reports);
  const getReports = () => dispatch(getReportsAction());

  useEffect(() => {
    getReports();
  }, [reports]);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report</Text>
      <CalcButton navigation={navigation} />
      {isFocused ? <ScrollView style={styles.scroll}>
        {reports.length === 0 ? null :
          reports.map((report) => (
            <ReportCard key={report.id} report={report} />))
        }
      </ScrollView> : null}
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },
  title: {
    marginTop: 35,
    marginLeft: 28,
    fontWeight: "bold",
    lineHeight: 41,
    fontSize: 35,
    color: "#0072B1",
    width: "50%",
  },
  scroll: {
    marginTop: 23,
  },
});

export default Report;
