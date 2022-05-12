import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CurrencyRow } from '../components/CurrencyRow';
import { findExchRate } from '../helpers/findExchangeRate';
import {
  getPendingSelector,
  getCurrenciesSelector,
  getErrorSelector,
  getCurrencyOptions,
} from '../store/currency/selectors';
import { fetchCurrencyRequest } from '../store/currency/actions';
import {
  getAmountInFromCurrencySelector,
  getAmountSelector,
  getFromCurrencySelector,
  getToCurrencySelector,
} from '../store/filters/filters-selectors';

import { FilterActionsCreator } from '../store/filters';
import { Equal, Title } from '../styles/styles';

export const ConvertorPage: React.FC = () => {
  const [exchangeRate, setExchangeRate] = useState<any>();

  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const currencies = useSelector(getCurrenciesSelector);
  const currArr = useSelector(getCurrencyOptions);
  const currencyOptions = ['UAH', ...currArr];
  const error = useSelector(getErrorSelector);
  const fromCurrency = useSelector(getFromCurrencySelector);
  const toCurrency = useSelector(getToCurrencySelector);
  const amount = useSelector(getAmountSelector);
  const amountInFromCurrency = useSelector(getAmountInFromCurrencySelector);

  let fromAmount: number, toAmount: number;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    dispatch(fetchCurrencyRequest());
  }, [dispatch]);

  useEffect(() => {
    setExchangeRate(findExchRate(fromCurrency, toCurrency, currencies));
  }, [fromCurrency, toCurrency, currencies]);

  function handleFromAmountChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(FilterActionsCreator.setAmount(Number(event.target.value)));
    dispatch(FilterActionsCreator.setAmountInFromCurrency(true));
  }

  function handleToAmountChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(FilterActionsCreator.setAmount(Number(event.target.value)));
    dispatch(FilterActionsCreator.setAmountInFromCurrency(false));
  }

  return (
    <>
      <Title>Конвертер</Title>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <div>
          <CurrencyRow
            currencyOptions={currencyOptions}
            selectedCurrency={fromCurrency}
            onChangeCurrency={(event: React.ChangeEvent<HTMLSelectElement>) =>
              dispatch(FilterActionsCreator.setFromCurrency(event.target.value))
            }
            onChangeAmount={handleFromAmountChange}
            amount={fromAmount}
          />
          <Equal className="equal">=</Equal>
          <CurrencyRow
            currencyOptions={currencyOptions}
            selectedCurrency={toCurrency}
            onChangeCurrency={(event: React.ChangeEvent<HTMLSelectElement>) =>
              dispatch(FilterActionsCreator.setToCurrency(event.target.value))
            }
            onChangeAmount={handleToAmountChange}
            amount={toAmount}
          />
        </div>
      )}
    </>
  );
};
