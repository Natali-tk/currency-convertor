import { CurrencyActionType } from './actionTypes';
import { Currency } from '../../types/Currency';

export type FetchCurrencySuccessPayload = {
  currencies: Currency[];
};

export type FetchCurrencyFailurePayload = {
  error: string;
};

export type FetchCurrencyRequest = {
  type: typeof CurrencyActionType.FETCH_CURRENCY_REQUEST;
};

export type FetchCurrencySuccess = {
  type: typeof CurrencyActionType.FETCH_CURRENCY_SUCCESS;
  payload: FetchCurrencySuccessPayload;
};

export type FetchCurrencyFailure = {
  type: typeof CurrencyActionType.FETCH_CURRENCY_FAILURE;
  payload: FetchCurrencyFailurePayload;
};

export type CurrencyActions =
  | FetchCurrencyRequest
  | FetchCurrencySuccess
  | FetchCurrencyFailure;
