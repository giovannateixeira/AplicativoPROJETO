import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useId, useState } from 'react';
import styles from './style';
import firebase from '../../config/firebase';
import { getFirestore, collection, orderBy, query, onSnapshot, doc, deleteDoc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore'
const db = getFirestore(firebase)
import { MaterialIcons } from '@expo/vector-icons'

export default function Cadastro({ navigation }) {

    const [anotacao, setAnotacao] = useState([])
    
    const deleteAnotacao = (id) => {
        deleteDoc(doc(db, "anotacao", id))
    }

    useEffect(() => {
        const q = query(collection(db, "anotacao"), orderBy("data_registro","desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const anotacao = [];
            querySnapshot.forEach((doc) => {
                anotacao.push({...doc.data(), id: doc.id});
            });
            setAnotacao(anotacao)
        });
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={anotacao}
                renderItem={({item}) =>
                    <View style={styles.anotacao}>
                        <View>
                            <Text style={styles.descricao}>{item.descricao}</Text>
                            <Text style={styles.information}>{item.text}</Text>
                        </View>
                        
                        <View>
                            <TouchableOpacity 
                                onPress={()=> deleteAnotacao(item.id)}
                            >
                                <MaterialIcons style={styles.btnExcluir} name= "delete" size={30} color="#c40000"/>
                            </TouchableOpacity>
                            
                            <TouchableOpacity 
                                onPress={() => navigation.navigate("EditAnotacao", {
                                        id: item.id,
                                        descricao: item.descricao,
                                        text: item.text,
                                    } 
                                )}    
                            >
                                <MaterialIcons name= "edit" size={30} color="blue"/>
                            </TouchableOpacity>
                        </View>
                    </View>  
                }
            />

            <TouchableOpacity
                style={styles.btnCreate}
                onPress={() => navigation.navigate('CreateAnotacao')}
            >
                <Text style={styles.btnTextCreate}>+</Text>
            </TouchableOpacity>
        </View>
    );
}