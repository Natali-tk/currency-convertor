import React from 'react';
import shortid from 'shortid';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { ICurrency } from '../../interfaces/ICurrency';

interface IProps {
  currencies: ICurrency[];
  baseCurrency: string;
}

export const Table: React.FC<IProps> = ({ currencies, baseCurrency }) => {
  let base: number;
  const findObj = currencies.find(currency => currency.cc === baseCurrency);
  if (baseCurrency === 'UAH') {
    base = 1;
  } else if (findObj) {
    base = findObj.rate;
  }

  return currencies ? (
    <table className="centered bordered highlight">
      <TableHeader />
      {currencies?.map((currency: ICurrency) => (
        <TableRow currency={currency} base={base} key={shortid.generate()} />
      ))}
    </table>
  ) : (
    <div>loading...</div>
  );
};
