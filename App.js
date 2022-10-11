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
import StorageDemo from './components/StorageDemo';
import FetchAPIDemo from './components/FetchAPIDemo';
import ImageAddDemo from './components/ImageAddDemo';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to React Native Workshop 3!</Text>
      {/* Uncomment one of the following lines at a time
      to see each of the individual components we built */}
      {/* <StorageDemo /> */}
      {/* <FetchAPIDemo /> */}
      {/* <ImageAddDemo /> */}
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
});
