import {createSlice} from '@reduxjs/toolkit';
import {UserType} from '../../types/user.type';

type authSliceType = {
  token: string | null;
  user: UserType | null;
  pinCode: string | '';
};

const initialState: authSliceType = {
  token: null,
  user: null,
  pinCode: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    addPin: (state, action) => {
      state.pinCode = action.payload.pin;
    },
  },
});

export const {login, addPin} = authSlice.actions;
export default authSlice.reducer;
