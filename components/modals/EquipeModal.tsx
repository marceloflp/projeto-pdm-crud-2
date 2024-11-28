import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput } from "react-native";
import { useState } from 'react';

export type PilotoModalProps = {
    visible: boolean;
    onAdd: (title: string) => void;
    onCancel: () => void;
}

export default function PilotoModal({visible, onAdd, onCancel}: PilotoModalProps){

    const [title, setTitle] = useState('');

    return(
        <Modal visible={visible} animationType='fade' transparent={true} onRequestClose={() => {}}>
            <View style={styles.container}>
                <View style={styles.boxContainer}>
                    <TextInput
                        style= {styles.boxInput}
                        placeholder="Nome"
                        value={title}
                        onChangeText={text => setTitle(text)}
                        autoFocus
                    />

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonAdd} onPress={() => onAdd(title)}>
                        <Text style={styles.buttonText}>
                                Adicionar
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonCancel} onPress={() => onCancel()}>
                        <Text style={styles.buttonText}>
                                Cancelar
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
    
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'rgba(0, 0, 0, 0, 7)',
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    boxContainer: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#FFF',
    },
    buttonAdd: {
        backgroundColor: 'green',
        borderRadius: 5,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        margin: 7,
        padding: 20,
    },
    buttonCancel: {
        backgroundColor: 'red',
        borderRadius: 5,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        margin: 7,
        padding: 20,
    },
    buttonContainer: {
        flexDirection:'row',
        marginTop: 10,
        height: 70,
    },
    boxInput:{
        alignSelf: 'stretch',
        height: 40,
        borderRadius: 5,
        backgroundColor: '#DDD',
        margin: 5,
    },
})