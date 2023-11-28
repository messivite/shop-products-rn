type Environment = 'staging' | 'prod';
const ENV: Environment = 'prod';

const apiURL = {
  prodBaseApiURL: 'https://dummyjson.com',
  testBaseApiURL: 'https://dummyjson.com',
};

const Configs = {
  TOKEN: 'auth',
  ENV: ENV,
  BASE_URL: ENV === 'prod' ? apiURL.prodBaseApiURL : apiURL?.testBaseApiURL,
};

export default Configs;
