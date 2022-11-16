import React, { useState, useEffect, Fragment } from 'react';
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { base } from '../../styles/Base';
import { typography } from '../../styles/Typography';
import { forms } from '../../styles/Forms';
import { color } from '../../styles/Color';

export default function Login({ navigation }) {
    const [email, setEmail] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    return (
        <View style={{...base.container, backgroundColor: '#008037'}}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#8fbd52', '#008037']}
                style={base.background}
            />

            <Text style={{...typography.h1, ...color.lightGreen}}>Registrera ny kund</Text>

            <View style={{alignItems: 'left', width: '100%', marginBottom: 15}}>
                <Text style={{...typography.p, ...color.lightGreen}}>E-post</Text>
                <TextInput
                    style={{...forms.form, marginBottom: 15}}
                    autoCorrect={false}
                    clearButtonMode='always'
                    onChangeText={(content: string) => {
                        setEmail(content);
                    }}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    testID="email-field"
                />

                <Text style={{...typography.p, ...color.lightGreen}}>Lösenord</Text>
                <TextInput
                    style={forms.form}
                    autoCorrect={false}
                    clearButtonMode='always'
                    onChangeText={(content: string) => {
                        setPassword(content);
                    }}
                    autoCapitalize="none"
                    secureTextEntry={true}
                    testID="email-field"
                />
            </View>

            <TouchableOpacity
                style={base.button}
                accessibilityLabel={`Logga in genom att trycka`}
                onPress={() => navigation.navigate('Startsida')}
                >
                <Text style={base.buttonText}>Skapa konto</Text>
            </TouchableOpacity>

        </View>
    );
};