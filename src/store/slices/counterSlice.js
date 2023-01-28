import { createSlice } from '@reduxjs/toolkit';
//* createSlice - функція для створення:
//* - стану (з його початковим станом),
//* - редюсеру (функції для його зміни),
//* - екшнів (об'єктів для сповіщення стори про те, що треба змінити стан)

const counterSlice = createSlice({
  name: 'counter',
  initialState: { count: 0 },
  reducers: {
    decrement (state, action) {
      state.count = state.count - 1;
    },
    increment (state, action) {
      state.count = state.count + 1;
    },
  },
});

//* reducer - (state, action) => state
//* чиста функція
//* action - {type: 'increment' [, {payload}]}

const { reducer, actions } = counterSlice;
export const { decrement, increment } = actions;

export default reducer;
