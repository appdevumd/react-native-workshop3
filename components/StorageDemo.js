import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export default function StorageDemo() {
  const [text, setText] = useState("");
  const [retreivedData, setRetreivedData] = useState("");

  const storeData = async(value) => {
    try {
      await AsyncStorage.setItem("dataKey", value);
    } catch (e) {
      alert(e);
    }
  }

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('dataKey');
      if(value !== null) {
        setRetreivedData(value);
      }
    } catch(e) {
      alert(e);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.input}
      onChangeText={(t) => setText(t)} />

      <TouchableOpacity 
        style={styles.button}
        onPress={async () => {await storeData(text)} }>
        <Text style={{color: "white"}}>Save this data!</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button}
        onPress={async () => { await getData()}}>
        <Text style={{color: "white"}}>Fetch old data!</Text>
      </TouchableOpacity>

      <Text>Old data: {retreivedData}</Text>
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
