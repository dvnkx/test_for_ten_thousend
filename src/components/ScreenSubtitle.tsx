import React, {FC} from 'react';
import {StyleSheet, Text} from 'react-native';

import {AppStyles} from '../utils/styles';

type ScreenSubtitleProps = {
  subtitle: string;
};

const ScreenSubtitle: FC<ScreenSubtitleProps> = ({subtitle}) => {
  return <Text style={[AppStyles.subtitle, styles.subtitle]}>{subtitle}</Text>;
};

const styles = StyleSheet.create({
  subtitle: {
    marginLeft: 10,
  },
});

export default ScreenSubtitle;
