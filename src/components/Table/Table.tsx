import React from 'react';
import shortid from 'shortid';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';
import { Currency } from '../../types/Currency';

type Props = {
  currencies: Currency[];
  baseCurrency: string;
};

export const Table: React.FC<Props> = ({ currencies, baseCurrency }) => {
  let base: number;
  const findObj = currencies.find(currency => currency.cc === baseCurrency);
  if (baseCurrency === 'UAH') {
    base = 1;
  } else if (findObj !== undefined) {
    base = findObj.rate;
  }

  return (
    <table>
      <TableHeader />
      {currencies?.map((currency: Currency) => (
        <TableRow currency={currency} base={base} key={shortid.generate()} />
      ))}
    </table>
  );
};
