import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const InputText = ({style, ...props}) => (
  <TextInput style={[styles.input, style]} {...props} />
);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 4,
    padding: 10,
  },
});

export default InputText;
