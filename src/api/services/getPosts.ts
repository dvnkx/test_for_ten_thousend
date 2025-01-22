import axios from 'axios';

const fetchPosts = async (start: number, limit: number) => {
  const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts', {
    params: {
      _start: start,
      _limit: limit,
    },
  });
  return data;
};

export default fetchPosts;
