import React, {forwardRef} from 'react';
import {StyleSheet, Text, TextInput, View, TextInputProps} from 'react-native';
import {AppColors} from '../utils/colors';

interface InputProps extends TextInputProps {
  errorMessage?: string;
  label?: string;
}

const Input = forwardRef<TextInput, InputProps>(
  ({errorMessage, label, style, ...rest}, ref) => {
    return (
      <View style={styles.container}>
        {!!label && <Text style={styles.label}>{label}</Text>}
        <TextInput ref={ref} style={[styles.input, style]} {...rest} />
        {!!errorMessage && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    margin: 10,
    width: '90%',
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    color: AppColors.dark_charcoal,
  },
  input: {
    borderWidth: 1,
    borderColor: AppColors.chinese_silver,
    borderRadius: 10,
    padding: 18,
    fontSize: 16,
  },
  errorMessage: {
    marginTop: 6,
    fontSize: 14,
    color: AppColors.error,
  },
});

export default Input;
