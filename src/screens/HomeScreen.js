import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View,Text, StyleSheet, TouchableOpacity, Button, ImageBackground } from "react-native";

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
        backgroundColor: 'gray'
    },
    title: {
        fontSize:25,
        marginBottom:20,
        color:'white',
    },
    button: {
        margin:10,
        padding: 10,
        backgroundColor: 'red',
        
    },
    stitle: {
        fontSize: 20,
        fontWeight:'bold',
        color:'white'
    }
})
