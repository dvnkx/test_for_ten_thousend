import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {AppColors} from '../../utils/colors';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {HomeComponent} from './components/Task';
import {useQuery} from '@tanstack/react-query';
import {fetchPostsFrom} from '../../api/services/getPosts.service';
import HomeScrollView from './components/HomeScrollView';
import PostType from '../../types/post.type';
import {Loader, ScreenHeader, ScreenSubtitle} from '../../components';
import {beforeYouStartData, tasksData} from '../../db/home.data';
import {useTranslation} from 'react-i18next';
import Post from './components/Post';

const HeaderSection = () => {
  const {t} = useTranslation();
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) {
    return;
  }

  const {firstName, lastName} = user;

  return (
    <ScreenHeader style={styles.headerContainer}>
      <Text style={styles.headerSubtitle}>{t('home.header')}</Text>
      <Text style={styles.headerName}>{firstName + ' ' + lastName}</Text>
    </ScreenHeader>
  );
};

const TasksSection = () => (
  <HomeScrollView horizontal>
    {tasksData.map(task => (
      <HomeComponent disabled key={task.id}>
        <HomeComponent.Title>{task.title}</HomeComponent.Title>
        <HomeComponent.SubTitle>{task.subtitle}</HomeComponent.SubTitle>
        <HomeComponent.Button>{task.buttonText}</HomeComponent.Button>
      </HomeComponent>
    ))}
  </HomeScrollView>
);

const BeforeYouStart = () => {
  const {t} = useTranslation();
  return (
    <>
      <ScreenSubtitle subtitle={t('home.beforeYouStart')} />
      <HomeScrollView horizontal>
        {beforeYouStartData.map(task => (
          <HomeComponent disabled key={task.id}>
            <HomeComponent.Title>{t(task.title)}</HomeComponent.Title>
            <HomeComponent.SubTitle>{t(task.subtitle)}</HomeComponent.SubTitle>
            <HomeComponent.Button>{t(task.buttonText)}</HomeComponent.Button>
          </HomeComponent>
        ))}
      </HomeScrollView>
    </>
  );
};

const PostsSection = () => {
  const {t} = useTranslation();
  const [randomStart, setRandomStart] = useState<number>(0);

  useEffect(() => {
    setRandomStart(Math.floor(Math.random() * 97));
  }, []);

  const {data, isLoading, isError} = useQuery<PostType[]>({
    queryFn: () => fetchPostsFrom(randomStart, 3),
    queryKey: ['homePosts'],
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return;
  }

  return (
    <>
      <ScreenSubtitle subtitle={t('home.posts')} />
      <View style={styles.postContainer}>
        {data &&
          data.map((post, i) => (
            <Post
              key={`${post.userId}-${post.title}`}
              id={i}
              userId={post.userId}
              title={post.title}
              body={post.body}
            />
          ))}
      </View>
    </>
  );
};

const Home = () => {
  return (
    <ScrollView>
      <HeaderSection />
      <ScrollView style={styles.container}>
        <TasksSection />
        <BeforeYouStart />
        <PostsSection />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 15,
  },
  headerContainer: {
    height: '30%',
    backgroundColor: AppColors.primary,
  },
  headerSubtitle: {
    color: AppColors.lotion,
    fontSize: 16,
    marginBottom: 5,
  },
  headerName: {
    color: AppColors.lotion,
    fontSize: 24,
    fontWeight: 'bold',
  },
  postContainer: {
    marginHorizontal: 10,
  },
});

export default Home;
