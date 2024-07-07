import React from 'react';
import { View, Text, Image, StyleSheet, } from 'react-native';
import { productsStyles } from '../styles/ProductStyle';

const ProductDetailsScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={product.image} style={productsStyles.image} />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.paragraph}>Price: ${product.price}</Text>
      <Text style={styles.paragraph}>Breed: {product.breed}</Text>
      <Text style={styles.paragraph}>Year: {product.year}</Text>
      <Text style={styles.paragraph}>THC: {product.thc}</Text>
      <Text style={styles.paragraph}>CBD: {product.cbd}</Text>
      <Text style={styles.paragraph}>Description: {product.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ProductDetailsScreen;
