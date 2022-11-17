import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { base } from '../../styles/Base';
import { typography } from '../../styles/Typography';

export default function Index({ navigation }) {
  return (
    <View style={base.container}>
        
        <Text style={typography.p}>Info om min resa:</Text>
        <Text style={{...typography.p, marginBottom: 100}}>...</Text>

        <TouchableOpacity
            style={base.button}
            accessibilityLabel={` genom att trycka`}
            onPress={() => navigation.navigate("Nuvarande resa", { city: 'Visby' })}
            >
            <Text style={base.buttonText}>Karta</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={base.button}
            accessibilityLabel={` genom att trycka`}
            >
            <Text style={base.buttonText}>Avsluta resa</Text>
        </TouchableOpacity>
        
    </View>
  );
}