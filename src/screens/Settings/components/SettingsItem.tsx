import React, {ReactNode} from 'react';
import {
  Image,
  ImageProps,
  ImageStyle,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
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
});

export default SettingsItem;
