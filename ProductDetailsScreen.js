import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const ProductDetailsScreen = ({ route }) => {
  const navigation = useNavigation();
  const { title, image, description, price } = route.params;

  const handleAddToCart = () => {
    if (navigation) {
      navigation.navigate('Home');
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Image source={image} style={styles.image} />
      <Text style={styles.price}>Prix: {price}</Text>
      <Text style={styles.description}>{description}</Text>
      <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
        <Text style={styles.addToCartButtonText}>Ajouter au panier</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  titleContainer: {
    backgroundColor: 'transparent',
    padding: 10,
    marginBottom: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
    shadowColor: '#FFA500', // Ombre orange
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
  addToCartButton: {
    backgroundColor: '#FFA500',
    padding: 15,
    borderRadius: 5,
    marginVertical: 20,
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetailsScreen;
