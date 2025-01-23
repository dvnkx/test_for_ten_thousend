import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PostType from '../../types/post.type';
import {AppColors} from '../../utils/colors';
import {ScreenHeader, ScreenSubtitle} from '../../components';

const Post = () => {
  const route = useRoute<RouteProp<{Post: PostType}>>();
  const {title, body} = route.params;

  return (
    <View>
      <ScreenHeader>
        <Text style={styles.headerName}>{title}</Text>
      </ScreenHeader>
      <ScreenSubtitle style={styles.subtitle} subtitle="About" />
      <View style={styles.bodyContainer}>
        <Text>{body}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerSubtitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  headerName: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  bodyContainer: {
    backgroundColor: AppColors.chinese_silver,
    borderRadius: 20,
    margin: 20,
    padding: 20,
  },
  subtitle: {
    marginLeft: 20,
  },
});

export default Post;
