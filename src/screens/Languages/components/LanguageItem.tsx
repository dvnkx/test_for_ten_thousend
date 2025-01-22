import {ASSETS} from '../../../utils/assets';
import SettingsItem from '../../Settings/components/SettingsItem';

type LanguageItemProps = {
  language: string;
  isChecked: boolean;
  onToggle: () => void;
};

const LanguageItem = ({language, isChecked, onToggle}: LanguageItemProps) => (
  <SettingsItem onPress={onToggle}>
    <SettingsItem.Image source={ASSETS.language} />
    <SettingsItem.Text>{language}</SettingsItem.Text>
    <SettingsItem.Checkbox checked={isChecked} />
  </SettingsItem>
);

export default LanguageItem;
