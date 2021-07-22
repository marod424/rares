import React from 'react';
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import data from '../api/rares.json';

export default function RaresList() {
  return (
    <FlatList
      data={data}
      keyExtractor={({ name }) => name}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Ionicons name="person-circle-outline" size={24} color="black" />
          <Text>{item.name}</Text>
          <Text>{item.type} &#183; {item.class}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    justifyContent: 'center',
    padding: '14px',
    width: '100vw',
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
  }
});