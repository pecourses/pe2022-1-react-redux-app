import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isFetching: false,
    error: null,
  },
  reducers: {},
});

const { reducer, actions } = usersSlice;

export default reducer;
