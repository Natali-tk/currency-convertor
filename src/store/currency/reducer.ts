import { CurrencyActionType } from './actionTypes';
import { CurrencyActions } from './types';
import { CurrencyState } from '../../types/CurrState';

const initialState: CurrencyState = {
  pending: false,
  currencies: [],
  error: null,
};

const currencyReducer = (state = initialState, action: CurrencyActions) => {
  switch (action.type) {
    case CurrencyActionType.FETCH_CURRENCY_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case CurrencyActionType.FETCH_CURRENCY_SUCCESS:
      return {
        ...state,
        pending: false,
        currencies: action.payload.currencies,
        error: null,
      };
    case CurrencyActionType.FETCH_CURRENCY_FAILURE:
      return {
        ...state,
        pending: false,
        currencies: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export { currencyReducer };
