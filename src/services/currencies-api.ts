import axios from 'axios';

axios.defaults.baseURL = 'https://bank.gov.ua';

export default async function getCurrencyRates() {
  try {
    const result = await axios.get(
      '/NBUStatService/v1/statdirectory/exchange?json',
    );
    return result.data;
  } catch (error) {
    console.error('Error: ', error);
  }
}
