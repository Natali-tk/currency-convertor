import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Currency } from '../../types/Currency';
import { CurrencyActionType } from './currency-actionTypes';
import { CurrencyActionCreators } from './currency-slicers';

export interface ResponseGenerator {
  data: Currency[];
}

const getCurrencies = () =>
  axios.get<Currency[]>(
    'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json',
  );

function* fetchCurrencySaga() {
  try {
    const response: ResponseGenerator = yield call(getCurrencies);
    yield put(
      CurrencyActionCreators.currencySuccess({
        currencies: response.data,
      }),
    );
  } catch (error: any) {
    yield put(
      CurrencyActionCreators.currencyFailure({
        error: error.message,
      }),
    );
  }
}

export function* currencySaga() {
  yield all([
    takeLatest(CurrencyActionType.FETCH_CURRENCY_REQUEST, fetchCurrencySaga),
  ]);
}
