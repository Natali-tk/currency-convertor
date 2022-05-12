import { all, fork } from 'redux-saga/effects';
import { currencySaga } from './currency';

export function* rootSaga() {
  yield all([fork(currencySaga)]);
}
