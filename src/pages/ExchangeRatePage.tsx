import React, { useState, useEffect } from 'react';
import getCurrencyRates from '../components/api/currency-api';
import { Table } from '../components/Table/Table';
import { Selector } from '../components/Selector';
import { ICurrency } from '../interfaces/ICurrency';

export const ExchangeRatePage: React.FC = () => {
  const [currency, setCurrency] = useState<string[]>(['UAH']);
  const [reqStatus, setReqStatus] = useState('idle');
  const [baseCurrency, setBaseCurrency] = useState('UAH');
  const [currencies, setCurrencies] = useState<any[]>([]);

  useEffect(() => {
    async function onFetchCurrency() {
      try {
        setReqStatus('pending');
        getCurrencyRates().then(data => {
          const curArr = data.map((item: ICurrency) => item.cc);
          setCurrency(prevState => [...prevState, ...curArr]);
          setCurrencies(data);
        });
        setReqStatus('resolve');
      } catch (error) {
        setReqStatus('rejected');
      }
    }
    onFetchCurrency();
  }, []);

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setBaseCurrency(event.target.value);

  return (
    <>
      <h1>Курс обміну</h1>
      <Selector
        currency={currency}
        baseCurrency={baseCurrency}
        handleChangeSelect={handleChangeSelect}
      />
      {currencies.length > 0 && (
        <Table currencies={currencies} baseCurrency={baseCurrency} />
      )}
    </>
  );
};
