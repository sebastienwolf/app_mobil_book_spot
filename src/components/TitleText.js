import React from 'react';
import { Text, StyleSheet } from 'react-native';

const TitleText = ({ value, style }) => {
  return <Text style={[styles.text, style]}>{value}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default TitleText;
