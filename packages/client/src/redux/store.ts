import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const combinedReducer = combineReducers({});

const store = configureStore({
  reducer: combinedReducer,
  devTools: process.env.NODE_ENV === 'development',
});

export const makeStore = () => store;
export const useAppDispatch: () => AppDispatch = useDispatch;

type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store['getState']>;

export default store;
