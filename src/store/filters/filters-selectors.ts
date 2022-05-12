import { createSelector } from 'reselect';

import { AppState } from '../rootReducer';

const getFromCurrency = (state: AppState) => state.filters.fromCurrency;
const getToCurrency = (state: AppState) => state.filters.toCurrency;
const getAmount = (state: AppState) => state.filters.amount;
const getAmountInFromCurrency = (state: AppState) =>
  state.filters.amountInFromCurrency;
const getBaseCurrency = (state: AppState) => state.filters.baseCurrency;

export const getFromCurrencySelector = createSelector(
  getFromCurrency,
  fromCurrency => fromCurrency,
);
export const getToCurrencySelector = createSelector(
  getToCurrency,
  toCurrency => toCurrency,
);
export const getAmountSelector = createSelector(getAmount, amount => amount);
export const getAmountInFromCurrencySelector = createSelector(
  getAmountInFromCurrency,
  amountInFromCurrency => amountInFromCurrency,
);
export const getBaseCurrencySelector = createSelector(
  getBaseCurrency,
  baseCurrency => baseCurrency,
);
