import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity,
} from 'react-native';

import { useState } from 'react';

export default function FetchAPIDemo() {

  return (
    <View style={styles.container}>

      <TouchableOpacity 
        style={styles.button}
        onPress={async () => { }}>
        <Text style={{color: "white"}}>Fetch random cat fact!</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Random cat fact: {}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'top',
    marginTop: 75,
  },
  text: {
    fontSize: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#575DD9",
    alignSelf: "stretch",
    margin: 32,
    height: 64,
    borderRadius: 6,
    paddingHorizontal: 16,
    fontSize: 24,
    fontWeight: "300",
  },
  button: {
    backgroundColor: "#575DD9",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 32,
    marginHorizontal: 32,
    borderRadius: 6,
    marginBottom: 25,
  }
});
