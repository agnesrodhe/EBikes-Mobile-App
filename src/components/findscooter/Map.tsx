import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { base } from '../../styles/Base';
import { start } from '../../styles/Start';
import MapView from 'react-native-maps';
import { Marker } from "react-native-maps";

export default function Map({ route }) {
  const { city } = route.params || false;

  return (
    <SafeAreaView style={base.container}>
      {city === "Visby" && 
        <MapView
          style={start.map}
          initialRegion={{
            latitude: 57.638908,
            longitude: 18.294446,
            latitudeDelta: 0.15,
            longitudeDelta: 0.15,
          }}>
        </MapView>
      }

      {city === "Västerås" && 
        <MapView
          style={start.map}
          initialRegion={{
            latitude: 59.611060,
            longitude: 16.544369,
            latitudeDelta: 0.2,
            longitudeDelta: 0.2,
          }}>
        </MapView>
      }

      {city === "Lund" && 
        <MapView
          style={start.map}
          initialRegion={{
            latitude: 55.703571,
            longitude: 13.191943,
            latitudeDelta: 0.15,
            longitudeDelta: 0.15,
          }}>
        </MapView>
      }
    </SafeAreaView>
  )
}