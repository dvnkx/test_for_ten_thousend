import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Button from '../components/Button';
import {AppColors} from '../utils/colors';
import InfoBlock from '../components/InfoBlock';
import {ASSETS} from '../utils/assets';
import {homeData} from '../db/homeData';
import IntroBlock from '../components/IntroBlock';
import {NavigationProps, Routes} from '../utils/routes';

const Home = () => {
  const navigation = useNavigation<NavigationProps>();

  const openSignUpModal = () => {
    navigation.navigate(Routes.SIGNUP);
  };

  const openSignInModal = () => {
    // navigation.navigate('SignInModal');
  };

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

export default Home;
