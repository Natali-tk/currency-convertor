import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  fromCurrency: 'UAH',
  toCurrency: 'USD',
  amount: 1,
  amountInFromCurrency: true,
  baseCurrency: 'UAH',
};

const { reducer, actions } = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFromCurrency: (state, action: PayloadAction<string>) => ({
      ...state,
      fromCurrency: action.payload,
    }),
    setToCurrency: (state, action: PayloadAction<string>) => ({
      ...state,
      toCurrency: action.payload,
    }),
    setAmount: (state, action: PayloadAction<number>) => ({
      ...state,
      amount: action.payload,
    }),
    setAmountInFromCurrency: (state, action: PayloadAction<boolean>) => ({
      ...state,
      amountInFromCurrency: action.payload,
    }),
    setBaseCurrency: (state, action: PayloadAction<string>) => ({
      ...state,
      baseCurrency: action.payload,
    }),
  },
});

export { actions as FilterActionsCreator };
export { reducer as reducerFilter };
