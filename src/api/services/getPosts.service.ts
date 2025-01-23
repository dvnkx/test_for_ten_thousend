import axios from 'axios';
import {POSTS_API} from '@env';

export const fetchPostsFrom = async (start: number, limit: number) => {
  const {data} = await axios.get(`${POSTS_API}`, {
    params: {
      _start: start,
      _limit: limit,
    },
  });
  return data;
};

export const fetchSearchPosts = async (search: string = '') => {
  const {data} = await axios.get(`${POSTS_API}`, {
    params: {
      title_like: search,
      _limit: 10,
    },
  });
  return data;
};
