import React, {FC} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';
import {AppColors} from '../utils/colors';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  backgroundColor?: string;
  onPress: () => void;
};

const Button: FC<ButtonProps> = ({
  title,
  backgroundColor,
  onPress,
  ...rest
}) => {
  const textColor = backgroundColor ? AppColors.lotion : AppColors.primary;
  const buttonBackgroundColor = backgroundColor || '';

  return (
    <TouchableOpacity
      {...rest}
      onPress={onPress}
      style={[styles.button, {backgroundColor: buttonBackgroundColor}]}>
      <Text style={[styles.text, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '90%',
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
