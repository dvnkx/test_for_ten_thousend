import React, {FC} from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';

import {AppStyles} from '../utils/styles';

type ScreenSubtitleProps = {
  subtitle: string;
  style?: TextStyle;
};

const ScreenSubtitle: FC<ScreenSubtitleProps> = ({subtitle, style}) => {
  return (
    <Text style={[AppStyles.subtitle, styles.subtitle, style]}>{subtitle}</Text>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    marginLeft: 10,
  },
});

export default ScreenSubtitle;
