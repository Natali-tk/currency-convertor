import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { fetchCurrencyFailure, fetchCurrencySuccess } from './actions';
import { CurrencyActionType } from './actionTypes';
import { Currency } from '../../types/Currency';

export interface ResponseGenerator {
  data: Currency[];
}
const getCurrencies = () =>
  axios.get<Currency[]>(
    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json',
  );

/*
  Worker Saga: Fired on FETCH_CURRENCY_REQUEST action
*/
function* fetchCurrencySaga() {
  try {
    const response: ResponseGenerator = yield call(getCurrencies);
    yield put(
      fetchCurrencySuccess({
        currencies: response.data,
      }),
    );
  } catch (error: any) {
    yield put(
      fetchCurrencyFailure({
        error: error.message,
      }),
    );
  }
}

/*
  Starts worker saga on latest dispatched `FETCH_CURRENCY_REQUEST` action.
*/
export function* currencySaga() {
  yield all([
    takeLatest(CurrencyActionType.FETCH_CURRENCY_REQUEST, fetchCurrencySaga),
  ]);
}


