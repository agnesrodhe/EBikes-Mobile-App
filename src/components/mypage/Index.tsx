import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { base } from '../../styles/Base';
import { typography } from '../../styles/Typography';

export default function Index({ navigation }) {
  return (
    <View style={base.container}>
        <View style={{marginBottom: 150}}>
            <Text style={typography.p}>Kontodetaljer:</Text>
            <Text style={typography.p}>...</Text>
        </View>

        <TouchableOpacity
            style={base.button}
            onPress={() => navigation.navigate("Resehistorik")}
            >
            <Text style={base.buttonText}>Resehistorik</Text>
        </TouchableOpacity>

        <View style={{alignItems: 'center', marginTop: 50}}>
            <Text style={typography.p}>Saldo: 200kr</Text>
            <TouchableOpacity
                style={base.button}
                onPress={() => navigation.navigate("För över pengar")}
                >
                <Text style={base.buttonText}>Fyll på pengar</Text>
            </TouchableOpacity>
        </View>

    </View>
  );
}