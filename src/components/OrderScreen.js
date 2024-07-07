import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const OrderScreen = ({ route }) => {
  const { order } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Order</Text>
      <FlatList
        //key={item.id}
        data={order}
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <Text>{item.name} - ${item.price}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default OrderScreen;
