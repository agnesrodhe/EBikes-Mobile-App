import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { base } from '../../styles/Base';
import { typography } from '../../styles/Typography';

export default function TripHistory() {
  return (
    <View style={base.container}>
        <Text style={typography.p}>Resehistorik</Text>
    </View>
  );
}