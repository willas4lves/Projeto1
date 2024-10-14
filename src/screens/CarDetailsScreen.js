import React from "react";
import { View, Text, Button,StyleSheet, Image } from "react-native";

export default function CarDetailsScreen ({ route }) {
    const { car } = route.params;

    return (
      <View style={styles.container}>
        <Image source={car.image} style={styles.carImage} />
        <Text style={styles.model}>Modelo: {car.model}</Text>
        <Text style={styles.price}>Preço: {car.price}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    backgroundColor: "black",
  },
  model: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  price: {
    fontSize: 16,
    marginTop: 8,
    color: "white",
  },
  carImage: {
    width: 150,
    height: 150,
    resizeMode: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
