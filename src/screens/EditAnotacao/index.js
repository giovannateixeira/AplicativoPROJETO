import { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, props } from 'react-native'
import React from 'react';
import styles from './style'
import firebase from '../../config/firebase'
import { getFirestore } from 'firebase/firestore'
import { collection, addDoc, serverTimestamp, doc, updateDoc } from 'firebase/firestore'
const db = getFirestore(firebase) 

export default function EditAnotacao({navigation, route}){

    const [descricao, setDescricao] = useState(route.params.descricao)
    const [text, setText] = useState(route.params.text)
    const [errorCreateAnotacao, setErrorCreateAnotacao] = useState(null)
    
    const validade = () => {
        if(text == "" || descricao == ""){
            setErrorCreateAnotacao("Ops... Preencha todos os campos!")
        }else{
            setErrorCreateAnotacao(null)
            editAnotacao()
        }
    }

    const editAnotacao = () => {
        
        const anotacao = doc(db, "anotacao", route.params.id);

        updateDoc(anotacao, {
            descricao: descricao,
            text: text,
            data_registro: serverTimestamp()
        });

        navigation.navigate('Tabs')
    }

    return(
        <View style={styles.container}>
            {errorCreateAnotacao != null &&
                <Text style={styles.alert}>{errorCreateAnotacao}</Text>
            }

            <TextInput
                style={styles.formInput}
                placeholder='Descrição'
                placeholderTextColor={"black"}
                value={descricao}
                onChangeText={setDescricao}
            />

            <TextInput
                style={styles.formInput}
                placeholder='Texto'
                placeholderTextColor={"black"}
                value={text}
                onChangeText={setText}
            />

            <TouchableOpacity
                style={styles.formBtn}
                onPress={validade} 
            >
                <Text style={styles.textBtn}>Atualizar</Text>
            </TouchableOpacity>

        </View>
    );
}