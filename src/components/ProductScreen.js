import React, { useState } from 'react';
import { View, FlatList, Image, Button, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { productsStyles } from '../styles/ProductStyle';

const products = [
  { id: 1, name: 'Product 1', price: 100, breed: 'Breed 1', year: 2021, thc: '20%', cbd: '1%', description: 'Description 1', image: require('../assets/critical-mass.jpg') },
  { id: 2, name: 'Product 2', price: 200, breed: 'Breed 2', year: 2020, thc: '15%', cbd: '2%', description: 'Description 2', image: require('../assets/critical-xl-1.jpg') },
  { id: 3, name: 'Product 3', price: 100, breed: 'Breed 1', year: 2021, thc: '20%', cbd: '1%', description: 'Description 1', image: require('../assets/images (1).jpg') },
  { id: 4, name: 'Product 4', price: 100, breed: 'Breed 1', year: 2021, thc: '20%', cbd: '1%', description: 'Description 1', image: require('../assets/images (2).jpg') },
  { id: 5, name: 'Product 5', price: 100, breed: 'Breed 1', year: 2021, thc: '20%', cbd: '1%', description: 'Description 1', image: require('../assets/images.jpg') },
  { id: 7, name: 'Product 7', price: 100, breed: 'Breed 1', year: 2021, thc: '20%', cbd: '1%', description: 'Description 1', image: require('../assets/mis-cogollos-no-tienen-olor.jpg') }
  // Agrega más productos según sea necesario
];

const ProductsScreen = ({ navigation }) => {
  const [order, setOrder] = useState([]);

  const addToOrder = (product) => {
    // Actualizar el estado de order
    const updatedOrder = [...order, product];
    setOrder(updatedOrder);

    // Navegar a la pantalla Order con el estado actualizado
    navigation.navigate('Order', { order: updatedOrder });
  };

  const renderItem = ({ item }) => (
    <Card style={productsStyles.card}>
      <Image source={item.image} style={productsStyles.image} />
      <Card.Content>
        <Text style={productsStyles.title}>{item.name}</Text>
        <Text style={productsStyles.paragraph}>Price: ${item.price}</Text>
        <View style={productsStyles.buttonContainer}>
          <Button title="View Details" onPress={() => navigation.navigate('ProductDetails', { product: item })} />
          <Button title="Add to Order" onPress={() => addToOrder(item)} />
        </View>
      </Card.Content>
    </Card>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={productsStyles.container}
      numColumns={1}
    />
  );
};

export default ProductsScreen;
