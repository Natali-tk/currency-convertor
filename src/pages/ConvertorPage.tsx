import React, { useState, useEffect } from 'react';
import { CurrencyRow } from '../components/CurrencyRow';
import getCurrencyRates from '../api/currency-api';
import { ICurrency } from '../interfaces/ICurrency';
import { findExchRate } from '../helpers/findExchangeRate';

export const ConvertorPage: React.FC = () => {
  const [currencyOptions, setCurrencyOptions] = useState(['UAH']);
  const [fromCurrency, setFromCurrency] = useState('UAH');
  const [toCurrency, setToCurrency] = useState('USD');
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [exchangeRate, setExchangeRate] = useState<any>();

  let fromAmount: number, toAmount: number;
  if (amountInFromCurrency && exchangeRate !== undefined) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    getCurrencyRates().then(data => {
      const currencyArr = data.map((item: ICurrency) => item.cc);
      setCurrencyOptions(prevState => [...prevState, ...currencyArr]);
      setExchangeRate(findExchRate(fromCurrency, toCurrency, data));
    });
  }, [fromCurrency, toCurrency]);

  function handleFromAmountChange(event: React.ChangeEvent<HTMLInputElement>) {
    setAmount(Number(event.target.value));
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(event: React.ChangeEvent<HTMLInputElement>) {
    setAmount(Number(event.target.value));
    setAmountInFromCurrency(false);
  }

  return (
    <>
      <h1>Конвертер</h1>
      <div className="convert">
        <CurrencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={
            (event: React.ChangeEvent<HTMLSelectElement>) =>
              setFromCurrency(event.target.value)
            // dispatch(setFromCurrency(event.target.value))
          }
          onChangeAmount={handleFromAmountChange}
          amount={fromAmount}
        />
        <span className="equal">=</span>
        <CurrencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={
            (event: React.ChangeEvent<HTMLSelectElement>) =>
              setToCurrency(event.target.value)
            // dispatch(setToCurrency(event.target.value))
          }
          onChangeAmount={handleToAmountChange}
          amount={toAmount}
        />
      </div>
    </>
  );
};
