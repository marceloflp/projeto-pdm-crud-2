import React from "react";
import { StyleSheet, Text, View } from "react-native";

export type EquipesProps = {
    title: string;
}

export default function Equipes({title}: EquipesProps) {

    return(
        <View style={styles.box}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 20,
        margin: 20,
        borderRadius: 5,
    },

    title:{
        fontSize: 20,
        fontWeight: 'bold',

    },

    subTitle:{
        fontSize:15,
    }

})