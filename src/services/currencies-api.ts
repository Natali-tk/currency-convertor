import axios, { AxiosResponse } from 'axios';
import { ICurrency } from '../interfaces/ICurrency';

interface ServerResponse {
  data: ICurrency[];
}

axios.defaults.baseURL = 'https://bank.gov.ua';

export default async function getCurrencyRates() {
  try {
    const result = await axios.get<ServerResponse>(
      '/NBUStatService/v1/statdirectory/exchange?json',
    );
    return result.data;
  } catch (error) {
    console.error('Error: ', error);
  }
}
