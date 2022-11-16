import { StyleSheet } from 'react-native';

export const base = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      padding: '5%',
      paddingTop: '40%'
    },
    button: {
      minWidth: 250,
      height:48,
      marginTop:20,
      paddingTop:10,
      paddingBottom:12,
      backgroundColor:'#d7efe1',
      borderRadius:10,
      //borderWidth: 1,
      borderColor: '#000',
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.3,
      shadowRadius: 3
    },
    buttonText: {
      color:'#000',
      fontSize: 20,
      textAlign:'center',
      paddingLeft: 10,
      paddingRight: 10,
      fontWeight: "600"
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 300,
    }
});