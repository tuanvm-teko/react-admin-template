import axios from 'axios/index';
import cookieHelper from 'helpers/cookies';
import { localStorageConstants } from 'constants/index';
import { requestHelper } from 'helpers';

export const BASE_API_URL: string = `${process.env.REACT_APP_BASE_API_URL ||
  'localhost:3000'}/api`;

axios.interceptors.response.use(
  response => response,
  error => {
    requestHelper.handleRequestError(error);
    return Promise.reject(error);
  },
);

const getAuthorization = () =>
  `Bearer ${cookieHelper.getByName(localStorageConstants.ACCESS_TOKEN)}`;

const userClient = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    Authorization: getAuthorization(),
  },
  withCredentials: true,
});

userClient.interceptors.response.use(
  response => response,
  error => {
    requestHelper.handleRequestError(error);
    return Promise.reject(error);
  },
);

export default {
  userClient,
};
