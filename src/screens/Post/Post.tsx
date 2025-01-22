import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import PostType from '../../types/post.type';

const Post = () => {
  const route = useRoute<RouteProp<{Post: PostType}>>();
  const {userId, id, title, body} = route.params;

  return (
    <View>
      <Text>Post</Text>
    </View>
  );
};

export default Post;
