import {createSlice} from '@reduxjs/toolkit';

type verifySliceType = {
  verifyStatus: boolean;
};

const initialState: verifySliceType = {
  verifyStatus: false,
};

const verifySlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    verify: state => {
      state.verifyStatus = !state.verifyStatus;
    },
  },
});

export const {verify} = verifySlice.actions;
export default verifySlice.reducer;
