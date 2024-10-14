import React from "react";
import { View,Text, FlatList, TouchableOpacity, StyleSheet, Image, ImageBackground} from "react-native";

const cars = [
  { id: "1", model: "Honda Civic", price: "R$ 80.000" ,
    image: require('../components/img/civic.png')
  },
  { id: "2", model: "Toyota Corolla", price: "R$ 90.000", 
    image: require('../components/img/corolla 86.png')
  },
  { id: "3", model: "Ford Focus", price: "R$ 85.000" ,
    image: require('../components/img/ford focus rs.png')
   },
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
              <Image source={item.image} style={styles.carImage}/>
              <Text 
              style={styles.title}>{item.model} - {item.price}
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
    backgroundColor: 'gray',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 18,
  },
  movieImage: {
    width: 1,
    height: 1,
    resizeMode: 'cover'
  },
});