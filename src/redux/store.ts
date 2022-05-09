import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { currenciesReduser } from './currencies';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
  }),
];

const rootReducer = combineReducers({
  useCurrencies: currenciesReduser,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
