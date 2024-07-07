import { StyleSheet } from 'react-native';

export const productsStyles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%', // Ocupa el 90% del ancho disponible para centrarlo
    alignSelf: 'center',
    marginBottom: 20, // Espacio inferior entre tarjetas
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  paragraph: {
    fontSize: 12,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10, // Espacio superior entre los botones y el contenido debajo
  },
});
