import React from "react";
import { View,Text, FlatList, TouchableOpacity, StyleSheet} from "react-native";

const cars = [
  { id: "1", model: "Honda Civic", price: "R$ 80.000" },
  { id: "2", model: "Toyota Corolla", price: "R$ 90.000" },
  { id: "3", model: "Ford Focus", price: "R$ 85.000" },
];

export default function CarListScreen({ navigation }) {
    return (
      <View>
        <FlatList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("CarDetails", { car: item })}
            >
              <Text>
                {item.model} - {item.price}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 18,
  },
});