import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFFF",
        flex: 2,
        padding: 50,
        alignItems: "center",
        justifyContent: "center",
        LinearGradient: "black"
    },

    alert: {
        fontWeight: "bold",
            width: "110%",
            fontSize: 18,
            textAlign: "center",
            color: "#FFFF",
            marginTop: 10,
            marginBottom: 30,
            backgroundColor: "red",
            padding: 5,
            borderRadius: 50,
            elevation: 10,
            shadowColor: "red",
    },

    formInput: {
        fontSize: 20,
        backgroundColor: "red",
        padding: 10,
        marginBottom: 30,
        width: "110%",
        height: 56,
        backgroundColor: '#FFFF',
        // prop //
        elevation: 10,
        shadowColor: "black",
        color: "black",
        borderRadius: 50,
    },

    formBtn: {
        backgroundColor: "#E7485C",
        padding: 10,
        borderRadius: 50,
        marginBottom: 20,
        width: "110%",
        height: 56,
        marginTop:20,
    },

    textBtn: {
        color: "#FFFF",
        fontSize: 24,
        textAlign: "center",
    },
});

export default styles