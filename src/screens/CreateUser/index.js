import React, { useState } from 'react'
import { TextInput, Text, TouchableOpacity, View } from 'react-native'
import styles from './style'
import firebase from '../../config/firebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function CreateUser({navigation}) {
    const [nome, setNome] = useState("")
    const [telefone, setTelefone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorCreateUser, setErrorCreateUser] = useState(null)

    const validate = () => {
        if (nome == "" || telefone == "" || email == "" || password == "") {
            setErrorCreateUser("Ops..Preencha todos os campos");
        } else {
            setErrorCreateUser(null)
            createUser();
        }
    }

    const createUser = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // Após criar o usuário, envia para tela interna
                navigation.navigate('Tabs');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // Exibe mensagem de erro em caso de erro
                setErrorCreateUser(errorMessage);
            });
    }

    return (
        <View style={styles.login}>

            {errorCreateUser != null &&
                <Text style={styles.alert}>{errorCreateUser}</Text>
            }
            
            <TextInput
                style={styles.formInput}
                placeholder='Nome'
                placeholderTextColor={"black"}
                value={nome}
                onChangeText={setNome}
            />
           
            <TextInput
                style={styles.formInput}
                placeholder='Telefone'
                placeholderTextColor={"black"}
                value={telefone}
                onChangeText={setTelefone}
            />
            
            <TextInput name="mail" size={20} color="black"
                style={styles.formInput}
                placeholder='E-mail'
                placeholderTextColor={"black"}
                value={email}
                onChangeText={setEmail}
            />
            
            <TextInput
                style={styles.formInput}
                secureTextEntry={true}
                placeholder='Senha'
                placeholderTextColor={"black"}
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity
                style={styles.formButton}
                onPress={validate}
            >
                <Text style={styles.textButton}>Criar Conta</Text>
            </TouchableOpacity>
        </View>
    );
}