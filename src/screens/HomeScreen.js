import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View,Text, StyleSheet, TouchableOpacity, Button } from "react-native";

export default function Homescreen() {
    const navigation = useNavigation()
    return (
        <View style ={styles.container}>
            <Text style={styles.title}>Vendas de Veiculos</Text>
            <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('CarListScreen')}>
            <Text style={styles.stitle}>Ver Lista de Veiculos</Text>
            </TouchableOpacity>            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
    },
    title: {
        fontSize:50,
        fontWeight: 'bold',
    },
    button: {
        margin:10,
        padding: 10,
        backgroundColor: 'red',
    },
    stitle: {
        fontSize: 20,
        fontWeight:'bold',
    }
})
