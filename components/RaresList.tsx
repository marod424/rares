import React from 'react';
import { FlatList, StyleSheet, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import data from '../api/rares.json';
import ItemInfo from './ItemInfo';

export default function RaresList() {
  return (
    <FlatList
      data={data as TRare[]}
      keyExtractor={({ name }) => name}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Ionicons name="person-circle-outline" size={24} color="black" />
          <ItemInfo item={item} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 14,
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
  }
});