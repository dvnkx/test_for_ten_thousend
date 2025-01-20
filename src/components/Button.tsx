import React, {FC} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {AppColors} from '../utils/colors';

type ButtonProps = {
  title: string;
  backgroundColor?: string;
  onPress: () => void;
};

const Button: FC<ButtonProps> = ({title, backgroundColor, onPress}) => {
  const textColor = backgroundColor ? '#fff' : AppColors.primary;
  const buttonBackgroundColor = backgroundColor || '';

  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: buttonBackgroundColor}]}>
      <Text style={[styles.text, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: AppColors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;
