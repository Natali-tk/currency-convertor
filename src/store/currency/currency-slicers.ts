import { CurrencyState } from '../../types/CurrState';
import { Currency } from '../../types/Currency';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Actions = {
  type: string;
  payload: Currency[];
};
const initialState: CurrencyState = {
  pending: false,
  currencies: [],
  error: null,
};

const { reducer, actions } = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    currencyLoading: state => ({
      ...state,
      pending: true,
      error: null,
    }),
    currencySuccess: (
      state,
      action: PayloadAction<{ currencies: Currency[] }>,
    ) => ({
      ...state,
      pending: false,
      currencies: action.payload.currencies,
      error: null,
    }),
    currencyFailure: (state, action: PayloadAction<{ error: string }>) => ({
      ...state,
      pending: false,
      currencies: [],
      error: action.payload.error,
    }),
  },
});

export { reducer as currencyReducer };
export { actions as CurrencyActionCreators };
