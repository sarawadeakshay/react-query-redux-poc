import { createSlice } from '@reduxjs/toolkit';

export const CharactersSlice = createSlice({
  name: 'characters',
  initialState: {
    charactersList: [],
  },
  reducers: {
    fetchChar: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.charactersList = action.payload;
    },
    // increment: state => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: state => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // }
  },
});

// Action creators are generated for each case reducer function
export const { fetchChar } = CharactersSlice.actions;

export default CharactersSlice.reducer;
