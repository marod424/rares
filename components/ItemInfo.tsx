import React from 'react';
import { StyleSheet, Text, View } from "react-native";

export default function ItemInfo({ item }: { item: TRare}) {
  return (
  <View style={styles.item}>
    <Text>{item.name}</Text>
    <Text>{item.type} &#183; {item.class}</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    marginLeft: 14,
  }
});