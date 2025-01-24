import React, {forwardRef} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import {AppColors} from '../utils/colors';
import {AppStyleValues} from '../utils/styles';

interface InputProps extends TextInputProps {
  errorMessage?: string;
  label?: string;
  style?: ViewStyle;
}

const Input = forwardRef<TextInput, InputProps>(
  ({errorMessage, label, style, ...rest}, ref) => {
    return (
      <View style={[styles.container, style]}>
        {!!label && <Text style={styles.label}>{label}</Text>}
        <TextInput ref={ref} style={styles.input} {...rest} />
        {!!errorMessage && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}
      </View>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    width: AppStyleValues.maxWidth,
  },
  label: {
    marginVertical: 10,
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
