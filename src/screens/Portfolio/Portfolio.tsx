import React from 'react';
import {View} from 'react-native';
import {AppStyles} from '../../utils/styles';
import {ScreenTitle} from '../../components';
import {useTranslation} from 'react-i18next';

const Portfolio = () => {
  const {t} = useTranslation();
  return (
    <View style={AppStyles.mainContainer}>
      <ScreenTitle title={t('portfolio.title')} />
    </View>
  );
};

export default Portfolio;
