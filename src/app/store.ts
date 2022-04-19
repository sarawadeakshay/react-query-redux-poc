import { configureStore } from '@reduxjs/toolkit';
import CharactersSlice from '../components/characters/CharactersSlice';

export const store = configureStore({
  reducer: {
    characters: CharactersSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
