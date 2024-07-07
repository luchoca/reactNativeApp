import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../components/SingInScreen';
import ProductsScreen from '../components/ProductScreen';
import OrderScreen from '../components/OrderScreen';
import ProductDetails from '../components/ProductDetailScreen'

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};

export default MainNavigator;
