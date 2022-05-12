import { CurrencyActionType } from './index';
import {
  FetchCurrencyRequest,
  FetchCurrencySuccess,
  FetchCurrencySuccessPayload,
  FetchCurrencyFailure,
  FetchCurrencyFailurePayload,
} from './types';

const fetchCurrencyRequest = (): FetchCurrencyRequest => ({
  type: CurrencyActionType.FETCH_CURRENCY_REQUEST,
});

const fetchCurrencySuccess = (
  payload: FetchCurrencySuccessPayload,
): FetchCurrencySuccess => ({
  type: CurrencyActionType.FETCH_CURRENCY_SUCCESS,
  payload,
});

const fetchCurrencyFailure = (
  payload: FetchCurrencyFailurePayload,
): FetchCurrencyFailure => ({
  type: CurrencyActionType.FETCH_CURRENCY_FAILURE,
  payload,
});

export { fetchCurrencyRequest, fetchCurrencySuccess, fetchCurrencyFailure };
