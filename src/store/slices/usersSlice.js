import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const USERS_SLICE_NAME = 'users';

//thunkAPI: dispath, rejectWithValue

export const getUsers = createAsyncThunk(
  `${USERS_SLICE_NAME}/getUsers`,
  async (currentPage, thunkAPI) => {
    const { dispatch } = thunkAPI;
    const data = await fetch(
      `https://randomuser.me/api?seed=pe&page=${currentPage}&results=3`
    ).then(response => response.json());
    dispatch(createUsers(data.results));
  }
);

const usersSlice = createSlice({
  name: USERS_SLICE_NAME,
  initialState: {
    users: [{ name: 'Test' }],
    isFetching: false,
    error: null,
  },
  reducers: {
    createUsers (state, action) {
      // payload : [...]
      state.users = action.payload;
    },
  },
});

const { reducer, actions } = usersSlice;

const { createUsers } = actions;

export default reducer;
