
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
