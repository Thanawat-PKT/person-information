import { configureStore } from '@reduxjs/toolkit';
import { personSWD } from './personSWD';

export const store = configureStore({
  reducer: {
    person: personSWD.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // A global type to access reducers types
export type AppDispatch = typeof store.dispatch; // Type to access dispatch