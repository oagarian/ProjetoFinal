import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,StyleSheet, Text, View, Dimensions , Button} from 'react-native';
import React from "react";
import { TextInput } from 'react-native-paper'
import MapView from 'react-native-maps'


const MyComponent = (style=styles.container) => {  
  const [latitude, setLatitude] = React.useState(0);
  const [longitude, setLongitude] = React.useState(0);
  function mostrar() {

  }
  return (
    
    <View style={{padding: 10}}>
    <TextInput
      label="Latitude"
      value={latitude}
      onSubmitEditing={newLatitude => setLatitude(newLatitude)}
      defaultValue={latitude}
      keyboardType="numeric"
    />
    <TextInput
      label="Longitude"
      value={longitude}
      onSubmitEditing={newLongitude => setLongitude(newLongitude)}
      defaultValue={longitude}
      keyboardType="numeric"
    />
    
    <MapView style={styles.map} region={{latitude: latitude, longitude: longitude}} showsUserLocation={true} /> 
   
  </View>
   // TODO: Remover bug e corrigir o envio de dados 
  );
}

export default MyComponent
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: (Dimensions.get('window').width)-20,
    height: (Dimensions.get('window').height)-15,
  },
});
