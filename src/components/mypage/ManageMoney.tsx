import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { base } from '../../styles/Base';
import { forms } from '../../styles/Forms';

export default function ManageMoney() {
const [input, setInput] = useState<Number>(0);
  return (
    <View style={base.container}>
        <TextInput
            style={forms.form}
            keyboardType="number-pad"
        />
        <TouchableOpacity
            style={base.button}
            accessibilityLabel={` genom att trycka`}
            >
            <Text style={base.buttonText}>För över</Text>
        </TouchableOpacity>
    </View>
  );
}