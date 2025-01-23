import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button} from '../../components';
import {AppColors} from '../../utils/colors';
import {NavigationProps, Routes} from '../../utils/routes';
import {InfoBlock, IntroBlock} from './components';
import {ASSETS} from '../../utils/assets';
import {AppStyleValues} from '../../utils/styles';
import walkthroughData from '../../db/walkthrough.data';

const Column1 = () => (
  <View style={styles.columnContainer}>
    <IntroBlock image={ASSETS.bitcoin} />
    {walkthroughData.slice(0, 2).map(data => (
      <InfoBlock key={data.title} images={data.images} title={data.title} />
    ))}
  </View>
);

const Column2 = () => (
  <View style={[styles.columnContainer, styles.secondColumn]}>
    {walkthroughData.slice(2).map(data => (
      <InfoBlock key={data.title} images={data.images} title={data.title} />
    ))}
  </View>
);

const Buttons = () => {
  const navigation = useNavigation<NavigationProps>();

  const openSignUpModal = useCallback(() => {
    navigation.navigate(Routes.SIGNUP);
  }, [navigation]);

  const openSignInModal = useCallback(() => {
    navigation.navigate(Routes.SIGNIN);
  }, [navigation]);

  return (
    <>
      <Button title="Sign Up" onPress={openSignUpModal} />
      <Button
        title="Sign In"
        onPress={openSignInModal}
        backgroundColor={AppColors.primary}
      />
    </>
  );
};

const Walkthrough = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.rowContainer}>
        <View style={styles.row}>
          <Column1 />
          <Column2 />
        </View>
      </ScrollView>
      <Buttons />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginBottom: 50,
  },
  introduction: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 40,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: AppStyleValues.maxWidth,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    width: AppStyleValues.maxWidth,
  },
  columnContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  secondColumn: {
    marginTop: 40,
  },
});

export default Walkthrough;
