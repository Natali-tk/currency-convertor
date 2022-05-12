import { Currency } from '../types/Currency';

export const findExchRate = (from: string, to: string, data: Currency[]) => {
  if (from != null && to != null) {
    let exchangeRate;
    if (from === to) {
      return (exchangeRate = 1);
    } else if (from === 'UAH') {
      const exchangeRate2 = data.find((item: Currency) => item.cc === to)?.rate;
      return exchangeRate2 ? (exchangeRate = 1 / exchangeRate2) : null;
    } else if (to === 'UAH') {
      const exchangeRate1 = data?.find(
        (item: Currency) => item.cc === from,
      )?.rate;
      return exchangeRate1 ? (exchangeRate = exchangeRate1 / 1) : null;
    } else if (from && to) {
      const exchangeRate1 = data?.find(
        (item: Currency) => item.cc === from,
      )?.rate;
      const exchangeRate2 = data?.find(
        (item: Currency) => item.cc === to,
      )?.rate;
      return exchangeRate1 && exchangeRate2
        ? (exchangeRate = exchangeRate1 / exchangeRate2)
        : null;
    }
    return exchangeRate;
  }
};
