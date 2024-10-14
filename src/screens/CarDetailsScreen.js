import React from "react";
import { View, Text, Button,StyleSheet, Image } from "react-native";

export default function CarDetailsScreen ({ route }) {
    const { car } = route.params;

    return (
        <View>
            <Text style={styles.model}>Modelo: {car.model}</Text>
            <Text style={styles.price}>Preço: {car.price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent:'center',
    },
    model: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 16,
        marginTop: 8,
    }
})
