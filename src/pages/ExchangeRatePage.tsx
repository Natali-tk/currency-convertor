import React, { useEffect } from 'react';
import { Table } from '../components/Table/Table';
import { Selector } from '../components/Selector';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPendingSelector,
  getCurrenciesSelector,
  getErrorSelector,
  getCurrencyOptions,
} from '../store/currency/selectors';
import { fetchCurrencyRequest } from '../store/currency/actions';
import { getBaseCurrencySelector } from '../store/filters/filters-selectors';
import { FilterActionsCreator } from '../store/filters';
import { Title } from '../styles/styles';

export const ExchangeRatePage: React.FC = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const currencies = useSelector(getCurrenciesSelector);
  const currArr = useSelector(getCurrencyOptions);
  const currencySelect = ['UAH', ...currArr];
  const error = useSelector(getErrorSelector);
  const baseCurrency = useSelector(getBaseCurrencySelector);

  useEffect(() => {
    dispatch(fetchCurrencyRequest());
  }, [dispatch]);

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) =>
    dispatch(FilterActionsCreator.setBaseCurrency(event.target.value));

  return (
    <>
      <Title>Курс обміну</Title>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <>
          <Selector
            currencySelect={currencySelect}
            baseCurrency={baseCurrency}
            handleChangeSelect={handleChangeSelect}
          />
          <Table currencies={currencies} baseCurrency={baseCurrency} />
        </>
      )}
    </>
  );
};
