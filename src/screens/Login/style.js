import { StyleSheet } from "react-native";


const styles = StyleSheet.create(
    {

        boxLogo: {
            marginTop: 20,
            marginBottom: 10, 
            alignItems: 'center',
        },
    
        logo: {
            width: 150,
            height: 150,
            borderRadius: 100,
        },

        login: {
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

        label: {
            fontSize: 24,
            fontWeight: "bold",
            color: "black",
            marginTop: 50,
        },

        titulo:{
            marginTop: 110,
            fontSize: 30,
            color: "black",
            fontWeight: "bold",
            marginBottom: 10,
        },

        subtitulo:{
            fontSize: 17,
            color: "black",
            fontWeight: "bold",
            marginBottom: 30,    
            textAlign: 'center'    
        },

        subtituloCreat:{
            fontSize: 17,
            color: "black",
            fontWeight: "bold",
            marginTop: 30, 
            
        }
        ,

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
            color: "#FFFF",
            fontSize: 24,
            textAlign: "center",
        },

        btnCreate: {
            backgroundColor: "#F78D74",
            padding: 10,
            borderRadius: 30,
            marginBottom: 20,
            width: "110%",
            height: 56,
            marginTop:20, 
            elevation: 10,
            shadowColor: "black",
            color: "#black",
        },

        btnCreateText: {
           
            color: "#FFFF",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: 'center'
        }
    }
);

export default styles