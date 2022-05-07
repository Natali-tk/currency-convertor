import React from 'react';
import shortid from 'shortid';
import { ICurrency } from '../../interfaces/ICurrency';

interface IProps {
  currency: ICurrency;
  base: number;
}

export const TableRow: React.FC<IProps> = ({ currency, base }) => {
  return (
    <tbody className="table__row" key={shortid.generate()}>
      <tr>
        <td>{currency.cc}</td>
        <td>{currency.txt}</td>
        <td>{(currency.rate / base).toFixed(2)}</td>
      </tr>
    </tbody>
  );
};
