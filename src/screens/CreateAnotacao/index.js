import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styles from './style'
import firebase from '../../config/firebase'
import { getFirestore } from 'firebase/firestore'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
const db = getFirestore(firebase) 

export default function CreateAnotacao({navigation}){
    const [descricao, setDescricao] = useState("")
    const [text, setText] = useState("")
    const [errorCreateAnotacao, setErrorCreateAnotacao] = useState(null)

    const validade = () => {
        if(text == "" || descricao == ""){
            setErrorCreateAnotacao("Ops... Preencha todos os campos!")
        }else{
            setErrorCreateAnotacao(null)
            createAnotacao()
        }
    }

    const createAnotacao = () => {
        const newAnotacao = addDoc(collection(db, 'anotacao'), {
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
                <Text style={styles.textBtn}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );
}