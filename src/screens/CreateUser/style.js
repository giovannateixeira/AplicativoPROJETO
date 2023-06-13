import { StyleSheet } from "react-native";

const styles = StyleSheet.create(
    {
        login: {
            backgroundColor: "#FFFF",
            flex: 2,
            padding: 50,
            alignItems: "center",
            justifyContent: "center",
            
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
            backgroundColor: "#BBBBB",
            padding: 10,
            marginBottom: 30,
            width: "110%",
            height: 56,
            backgroundColor: '#FFFF',
            // prop //
            elevation: 10,
            shadowColor: "black",
            color: "#ffff",
            borderRadius: 50,
        },
        
        
        formButton: {

            backgroundColor: "#E7485C",
            padding: 10,
            borderRadius: 50,
            marginBottom: 20,
            width: "110%",
            height: 56,
            marginTop:20,
        },

        textButton: {
            fontSize: 24,
            textAlign: "center",
            color: "#edebe8",
            fontWeight: "bold",
        }
    }
);

export default styles