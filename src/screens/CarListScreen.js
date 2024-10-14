import React from "react";
import { View,Text, FlatList, TouchableOpacity, StyleSheet, Image, ImageBackground} from "react-native";

const cars = [
  { id: "1", model: "Honda Civic", price: "R$ 80.000" ,
    image: require('../components/img/civic.png')
  },
  { id: "2", model: "Toyota Corolla ae86", price: "R$ 190.000", 
    image: require('../components/img/toyotaae86.jpg')
  },
  { id: "3", model: "Ford Focus rs", price: "R$ 95.000" ,
    image: require('../components/img/ford focus rs.png')
   },
];

export default function CarListScreen({ navigation }) {
    return (
      <ImageBackground source={require('../components/img/fundo4.png')}
      styles={styles.background}>
      <View>
        <FlatList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CarDetailScreen", { car: item })
              }
            >
              <Image source={item.image} style={styles.carImage} />
              <Text style={styles.title}>
                {item.model} - {item.price}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 18,
    color:'white',
  },
  carImage: {
    width: 150,
    height: 150,
    resizeMode: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  background: {
    flex: 1,
    backgroundColor: 'no-repeat',
    width:'100%',
    height:'100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});