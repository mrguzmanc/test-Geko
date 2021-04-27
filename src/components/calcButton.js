import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
} from "react-native";

const CalcButton = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                style={{ width: 26.65, height: 32.81, marginLeft: 27 }}
                source={require("../images/calc.png")}
            />
            <Text
                style={styles.txt}
                onPress={() => navigation.push("Calculator")}
            >Calculator</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "50%",
        backgroundColor: "#0072B1",
        position: "absolute",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
        flexDirection: "row",
        alignItems: "center",
        textAlign: "center",
        width: 155,
        height: 53,
        left: 193,
        top: 27,
    },
    txt: {
        color: "#ffffff",
        fontWeight: "bold",
        lineHeight: 41,
        fontSize: 14,
        width: 87,
        textAlign: "center",
    }
});


export default CalcButton;