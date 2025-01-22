import React, {useState} from 'react';
import {View} from 'react-native';
import {AppStyles} from '../../utils/styles';
import ScreenHeader from '../../components/ScreenHeader';
import LanguageItem from './components/LanguageItem';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';
import languageList from '../../../locales/languageList.json';

const Languages = () => {
  const {t} = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

  const handleToggle = (languageCode: string) => {
    i18next.changeLanguage(languageCode);
    setSelectedLanguage(languageCode);
  };

  return (
    <View style={AppStyles.mainContainer}>
      <ScreenHeader title={t('settings')} />
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
