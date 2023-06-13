import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1,
        backgroundColor: "#FFFF",
    },


    anotacao: {
        backgroundColor: '#FA8C75',
        padding: 15,
        marginBottom: 10,
        borderRadius: 5,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 15,
        borderRadius: 5,
        
        //uso da prop
        elevation: 10,
        shadowColor: "black",
        color: "blue",
       
    },

    information: {
        fontSize: 20,
        color: "#FFFF",
        marginBottom: 10,
    },

    descricao: {
        borderColor: "#FFFF",
        fontSize: 29,
        fontWeight: 'bold',
        color: "black",
        marginBottom: 10,
        padding: 2,
    },

    btnExcluir: {
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 10,
       left: "750%",
       
        color: "#FFFF"
    },

    btnEdit:{
        alignItems: 'center',
        marginLeft: 10,
        marginBottom: 0,
        right: 15,

        top: -40,
        color: "#FFFF"
    },
    

    btnCreate: {
        backgroundColor: '#389EE9',
        padding: 10,
        width: "100%",
        borderRadius: 50,
        position: 'absolute',
        bottom: 20,
        right: 20,
        justifyContent: 'center',
        alignContent: 'center'
    },

    btnTextCreate: {
        fontSize: 24,
        textAlign: 'center',
        color: '#edebe8',
        fontWeight: 'bold',
    }
});

export default styles