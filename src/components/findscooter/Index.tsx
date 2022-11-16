import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { base } from '../../styles/Base';

export default function Index({ navigation, setIsLoggedIn }) {

  function Logout() {
    setIsLoggedIn(false);
  }

  return (
    <View style={base.container}>
      <TouchableOpacity
        style={base.button}
        accessibilityLabel={` genom att trycka`}
        onPress={() => navigation.navigate("Välj en elsparkcykel", { city: 'Visby' })}
        >
        <Text style={base.buttonText}>Visby</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={base.button}
        accessibilityLabel={` genom att trycka`}
        onPress={() => navigation.navigate("Välj en elsparkcykel", { city: 'Västerås' })}
        >
        <Text style={base.buttonText}>Västerås</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={base.button}
        accessibilityLabel={` genom att trycka`}
        onPress={() => navigation.navigate("Välj en elsparkcykel", { city: 'Lund' })}
        >
        <Text style={base.buttonText}>Lund</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{...base.button, marginTop: '40%'}}
        accessibilityLabel={` genom att trycka`}
        onPress={() => Logout()}
        >
        <Text style={base.buttonText}>Logga ut</Text>
      </TouchableOpacity>
    </View>
  );
}