import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TextComponent = ({ value, style }) => {
  return <Text style={[styles.text, style]}>{value}</Text>;
};

const styles = StyleSheet.create({
  text: {
    borderColor: 'black',
  },
});

export default TextComponent;
