import React, {useState} from 'react';
import {View} from 'react-native';
import {AppStyles} from '../../utils/styles';
import ScreenTitle from '../../components/ScreenTitle';
import LanguageItem from './components/LanguageItem';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';
import languageList from '../../../locales/languageList.json';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {changeLocalization} from '../../redux/slices/auth.slice';

const Languages = () => {
  const userLocalization = useSelector(
    (state: RootState) => state.auth.user?.localization,
  );

  const localization = userLocalization ? userLocalization : 'en';

  const dispatch = useDispatch();
  const {t} = useTranslation();
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>(localization);

  const handleToggle = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    i18next.changeLanguage(languageCode);
    dispatch(changeLocalization(languageCode));
  };

  return (
    <View style={AppStyles.mainContainer}>
      <ScreenTitle title={t('languages')} />
      {Object.entries(languageList).map(([code, language]) => (
        <LanguageItem
          key={code}
          language={language.nativeName}
          isChecked={selectedLanguage === code}
          onToggle={() => handleToggle(code)}
        />
      ))}
    </View>
  );
};

export default Languages;
