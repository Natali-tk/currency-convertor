import { combineReducers } from 'redux';
import { currencyReducer } from './currency';
import { reducerFilter } from './filters';

const rootReducer = combineReducers({
  currency: currencyReducer,
  filters: reducerFilter,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
