import axios from 'axios';
import {POSTS_API} from '@env';
import PostType from '../../types/post.type';

const LIMIT = 10;
const TOTAL = 100;

export const fetchPostsFrom = async (start: number, limit: number) => {
  const {data} = await axios.get(`${POSTS_API}`, {
    params: {
      _start: start,
      _limit: limit,
    },
  });
  return data;
};

export const fetchPosts = async ({
  pageParam,
}: {
  pageParam: number;
}): Promise<{
  data: PostType[];
  nextPage: number | null;
}> => {
  const {data} = await axios.get(`${POSTS_API}`, {
    params: {
      _start: pageParam,
      _limit: LIMIT,
    },
  });
  return {data, nextPage: pageParam + LIMIT < TOTAL ? pageParam + LIMIT : null};
};
