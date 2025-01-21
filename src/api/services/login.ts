import axios from 'axios';

const loginUser = async (username: string, password: string) => {
  try {
    const response = await axios.post('https://dummyjson.com/user/login', {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    throw new Error('Login failed, please  again.');
  }
};

export default loginUser;
