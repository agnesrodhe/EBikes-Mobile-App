import { StyleSheet } from 'react-native';

export const start = StyleSheet.create({
    base: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center'
    },
    map: {
      ...StyleSheet.absoluteFillObject,
  },
});