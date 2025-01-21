import React, {FC} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

type IconContainerProps = {
  icon: ImageSourcePropType;
  containerStyles?: StyleProp<ViewStyle>;
};

const IconContainer: FC<IconContainerProps> = ({icon, containerStyles}) => {
  return (
    <View style={containerStyles || styles.iconContainer}>
      <Image style={styles.icon} source={icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(136, 231, 136, 0.3)',
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default IconContainer;
