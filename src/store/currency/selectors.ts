import { createSelector } from 'reselect';

import { AppState } from '../rootReducer';

const getPending = (state: AppState) => state.currency.pending;

const getCurrencies = (state: AppState) => state.currency.currencies;

const getError = (state: AppState) => state.currency.error;

export const getCurrenciesSelector = createSelector(
  getCurrencies,
  currencies => currencies,
);
export const getCurrencyOptions = createSelector(
  getCurrenciesSelector,
  currencies => currencies.map(currency => currency.cc),
);

export const getPendingSelector = createSelector(
  getPending,
  pending => pending,
);

export const getErrorSelector = createSelector(getError, error => error);
