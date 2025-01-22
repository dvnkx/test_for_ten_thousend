import React, {ReactNode} from 'react';
import {
  Image,
  ImageProps,
  ImageStyle,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {AppColors} from '../../../utils/colors';
import {ASSETS} from '../../../utils/assets';

type SettingsItemProps = TouchableOpacityProps & {
  children: ReactNode;
};

const SettingsItemComponent = ({children, ...rest}: SettingsItemProps) => {
  return (
    <TouchableOpacity {...rest} style={[styles.container]}>
      {children}
    </TouchableOpacity>
  );
};

const SettingsItemComponents = {
  Image: ({style, ...rest}: ImageProps & {style?: ImageStyle}) => (
    <Image {...rest} style={[styles.icon, style]} />
  ),
  Text: ({children}: {children: ReactNode}) => (
    <Text style={styles.title}>{children}</Text>
  ),
  Chevron: () => {
    return <Image style={styles.chevron} source={ASSETS.chevronRight} />;
  },
  Checkbox: ({checked}: {checked: boolean}) => {
    return (
      <View
        style={[
          styles.containerCheckbox,
          checked && {backgroundColor: AppColors.primary},
        ]}
      />
    );
  },
};

export const SettingsItem = Object.assign(
  SettingsItemComponent,
  SettingsItemComponents,
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    position: 'relative',
    padding: 15,
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: AppColors.chinese_silver,
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    color: AppColors.dark_charcoal,
    fontSize: 16,
  },
  chevron: {
    position: 'absolute',
    width: 24,
    height: 24,
    top: '60%',
    right: '5%',
  },
  containerCheckbox: {
    position: 'absolute',
    top: '60%',
    right: '5%',
    backgroundColor: AppColors.chinese_silver,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: AppColors.granite_gray,
    width: 24,
    height: 24,
  },
});

export default SettingsItem;
