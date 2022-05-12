import React from 'react';
import shortid from 'shortid';
import { Currency } from '../../types/Currency';

type Props = {
  currency: Currency;
  base: number;
};

export const TableRow: React.FC<Props> = ({ currency, base }) => {
  return (
    <tbody key={shortid.generate()}>
      <tr>
        <td>{currency.cc}</td>
        <td>{currency.txt}</td>
        <td>{(currency.rate / base).toFixed(4)}</td>
      </tr>
    </tbody>
  );
};
