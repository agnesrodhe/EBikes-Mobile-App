import React, { Fragment, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, TouchableOpacity, ImageBackground, Image, ActivityIndicator } from "react-native";
import { base } from '../../styles/Base';
const logo = require("../../assets/logo.png");
const bottomImg = require("../../assets/start_img2.jpg");

export default function Index({ navigation }) {
    return (
        <View style={{...base.container, backgroundColor: '#008037'}}>
            <LinearGradient
                // Background Linear Gradient
                colors={['#8fbd52', '#008037']}
                style={base.background}
            />
            <Image source={logo} style={{marginBottom: 80}}/>
            <TouchableOpacity
                style={base.button}
                accessibilityLabel={`Logga in genom att trycka`}
                onPress={() => navigation.navigate("Logga in")}
                >
                <Text style={base.buttonText}>Logga in</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={base.button}
                accessibilityLabel={`Logga in genom att trycka`}
                onPress={() => navigation.navigate("Registrera")}
                >
                <Text style={base.buttonText}>Registrerar ny kund</Text>
            </TouchableOpacity>
            <Image source={bottomImg} resizeMode='contain' style={{width: 300, height: 300, marginTop: 100}}/>
        </View>
    );
};