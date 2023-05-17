import { TextInput, StyleSheet } from 'react-native';

const TextEntryComponent = ({ value, style, ...props }) => {
  return (
    <TextInput
      style={[styles.input, style]}
      value={value}
      editable={false}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    flex:1,
    borderColor: 'black',
    borderWidth: 1,
    textAlign :'center',
  },
});

export default TextEntryComponent;