import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Button} from '../../components';
import {AppColors} from '../../utils/colors';
import {ASSETS} from '../../utils/assets';
import {homeData} from '../../db/homeData';
import {NavigationProps, Routes} from '../../utils/routes';
import {InfoBlock, IntroBlock} from './components';

const Walkthrough = () => {
  const navigation = useNavigation<NavigationProps>();

  const openSignUpModal = useCallback(() => {
    navigation.navigate(Routes.SIGNUP);
  }, [navigation]);

  const openSignInModal = useCallback(() => {
    navigation.navigate(Routes.SIGNIN);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.gridContainer}>
        <View style={styles.gridRow}>
          <View style={styles.gridColumn}>
            <IntroBlock image={ASSETS.bitcoin} />
            {homeData.slice(0, 2).map(data => (
              <InfoBlock
                key={data.title}
                images={data.images}
                title={data.title}
              />
            ))}
          </View>

          <View style={[styles.gridColumn, {marginTop: 40}]}>
            {homeData.slice(2).map(data => (
              <InfoBlock
                key={data.title}
                images={data.images}
                title={data.title}
              />
            ))}
          </View>
        </View>
      </ScrollView>
      <Button title="Sign Up" onPress={openSignUpModal} />
      <Button
        title="Sign In"
        onPress={openSignInModal}
        backgroundColor={AppColors.primary}
      />
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
  gridContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 16,
  },
  gridRow: {
    flexDirection: 'row',
    width: '100%',
  },
  gridColumn: {
    flex: 1,
    marginHorizontal: 8,
  },
});

export default Walkthrough;
