import * as React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { base } from '../../styles/Base';
import { start } from '../../styles/Start';
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";

export default function Map({ route }) {
  const { city } = route.params || false;
  return (
    <SafeAreaView style={base.container}>
      <MapView
        style={start.map}
        initialRegion={{
          latitude: 63.116854,
          longitude: 16.488626,
          latitudeDelta: 16,
          longitudeDelta: 16,
        }}>
      </MapView>
    </SafeAreaView>
  )
}