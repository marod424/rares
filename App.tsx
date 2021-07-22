import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import RaresList from './components/RaresList';

export default function App() {
  return (
    <View style={styles.container}>
      <RaresList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
