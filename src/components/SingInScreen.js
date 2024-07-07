import React, { useState, useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import { useAuthRequest } from 'expo-auth-session';
import { makeRedirectUri } from 'expo-auth-session';

const SignInScreen = ({ navigation }) => {
  const [user, setUser] = useState(null);

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '1093950249993-h2pvcclfnh1lmh9rpenvoeu19kk3d4hv.apps.googleusercontent.com',
      redirectUri: makeRedirectUri({ useProxy: true }),
      scopes: ['profile', 'email'], // Ejemplo de configuración de scope
    },
    {
      authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
      tokenEndpoint: 'https://oauth2.googleapis.com/token',
    }
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      setUser(authentication);
      navigation.navigate('Products'); // Navegar a la pantalla de productos después del inicio de sesión
    }
  }, [response]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {user ? (
        <Text>Welcome, {user.name}</Text>
      ) : (
        <>
          <Button
            disabled={!request}
            title="Sign in with Google"
            onPress={() => promptAsync()} // Iniciar la solicitud de inicio de sesión con Google
          />
          <Button
            title="Ir a Productos"
            onPress={() => navigation.navigate('Products')} // Navegar a la pantalla de productos sin autenticación
          />
        </>
      )}
    </View>
  );
};

export default SignInScreen;
