import { Image, StyleSheet, TouchableOpacity, Text } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import Pilotos from "@/components/pilotos/Pilotos";
import MyScrollView from "@/components/MyScrollView";
import { useState } from "react";
import { IPilotos } from "@/interfaces/ipilotos";
import PilotoModal from "@/components/modals/PilotoModal";

export default function pilotoListScreen(){
    const [pilotos, setPilotos] = useState<IPilotos[]>([]);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    
    const onAdd = (nome: string, equipe: string) => {
        const newPiloto: IPilotos = {
            id: Math.random() * 1000,
            nome: nome,
            equipe: equipe
        };

        const pilotosPlus: IPilotos[] = [
            ...pilotos,
            newPiloto
        ];

        setPilotos(pilotosPlus);
        setModalVisible(false);
    };

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <MyScrollView
            headerBackgroundColor={{light:'A1CEDC', dark: '#1D3D47'}}
            headerImage={
                <Image
                source={require('@/assets/images/f1-logo-4.png')}
                style={styles.reactLogo}
                />
            }>
                <ThemedView style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => openModal()}>
                        <Text style={styles.headerButton}>Adicionar Piloto</Text>
                    </TouchableOpacity>
                </ThemedView>
                <ThemedView style={styles.container}>

                    {pilotos.map(piloto => <Pilotos key={piloto.id} title={piloto.nome} subTitle={piloto.equipe}/>)}

                </ThemedView>

                <PilotoModal
                    visible={modalVisible}
                    onCancel={closeModal}
                    onAdd={onAdd}
                />
        </MyScrollView>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems:'center',
        gap:8,
    },
    stepContainer: {
        gap:8,
        marginBottom:8,
    },
    reactLogo:{
        height:90,
        width: 350,
        bottom: 70,
        alignSelf: 'center',
        position: 'absolute',
    },
    container:{
        flex:1,
        backgroundColor:'gray',
    },
    headerContainer:{
        backgroundColor:'rgb(37, 121, 193)',
        alignItems:'center',
        justifyContent:'center',
    },
    headerButton:{
        color:'black',
        fontSize:30,
        paddingHorizontal:20,
    }
});
