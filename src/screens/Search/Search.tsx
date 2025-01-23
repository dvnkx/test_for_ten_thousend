import React, {useEffect, useRef} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Input, Loader, ScreenTitle} from '../../components';
import {useQuery} from '@tanstack/react-query';
import fetchPosts from '../../api/services/getPosts';
import PostType from '../../types/post.type';
import Post from './components/Post';
import {ScrollView} from 'react-native-gesture-handler';
import {useTranslation} from 'react-i18next';

const Posts = () => {
  const {data, isLoading, isError} = useQuery<PostType[]>({
    queryFn: () => fetchPosts(0, 10),
    queryKey: ['searchPosts'],
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return;
  }

  return (
    <>
      {data &&
        data.map(post => (
          <Post
            key={post.id}
            id={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />
        ))}
    </>
  );
};

const Search = () => {
  const {t} = useTranslation();
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <ScrollView
      contentContainerStyle={{justifyContent: 'center'}}
      style={styles.container}>
      <ScreenTitle title={t('search.title')} />
      <Input
        ref={inputRef}
        placeholder={t('search.placeholder')}
        style={styles.inputContainer}
      />
      <Posts />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    display: 'flex',
  },
  containerContent: {
    justifyContent: 'center',
  },
  inputContainer: {
    marginTop: 20,
  },
});

export default Search;
