import React, { useState, useEffect } from 'react';
import { CurrencyRow } from '../components/CurrencyRow';
import getCurrencyRates from '../components/api/currency-api';
import { ICurrency } from '../interfaces/ICurrency';

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
      const findExchRate = (from: string, to: string) => {
        if (fromCurrency != null && toCurrency != null) {
          let exchangeRate;
          if (from === to) {
            exchangeRate = 1;
          } else if (from === 'UAH') {
            const exchangeRate2 = data.find(
              (item: ICurrency) => item.cc === to,
            ).rate;
            exchangeRate = 1 / exchangeRate2;
          } else if (to === 'UAH') {
            const exchangeRate1 = data.find(
              (item: ICurrency) => item.cc === from,
            ).rate;
            exchangeRate = exchangeRate1 / 1;
          } else if (data !== undefined && from && to) {
            const exchangeRate1 = data.find(
              (item: ICurrency) => item.cc === from,
            ).rate;
            const exchangeRate2 = data.find(
              (item: ICurrency) => item.cc === to,
            ).rate;
            exchangeRate = exchangeRate1 / exchangeRate2;
          }
          return exchangeRate;
        }
      };
      setExchangeRate(findExchRate(fromCurrency, toCurrency));
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
      <h1>Convert</h1>
      <div className="convert">
        <CurrencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={(event: React.ChangeEvent<HTMLSelectElement>) =>
            setFromCurrency(event.target.value)
          }
          onChangeAmount={handleFromAmountChange}
          amount={fromAmount}
        />
        <span className="equal">=</span>
        <CurrencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={(event: React.ChangeEvent<HTMLSelectElement>) =>
            setToCurrency(event.target.value)
          }
          onChangeAmount={handleToAmountChange}
          amount={toAmount}
        />
      </div>
    </>
  );
};
