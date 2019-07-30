import { localizationHelper, notificationHelper } from 'helpers';
import { userServices } from 'services';
import { AxiosError } from 'axios';

const STATUS_SUCCESS = 'success';

class LogicError extends Error {
  constructor(
    public code: string | undefined,
    message: string,
    public extra: any,
  ) {
    super(code);
  }
}

const normalizeParams = (params: any) =>
  Object.entries(params).reduce((accum, param) => {
    const [key, value] = param;
    if (value && value !== 'all') {
      const obj = { ...accum };
      obj[key] = value;
      return obj;
    }
    return accum;
  }, {});

const handleRequestError = (error: AxiosError) => {
  const status = error && error.response && error.response.status;
  switch (status) {
    case 401:
      userServices.logout();
      break;
    case 403:
      userServices.denyAccess();
      break;
    default: {
      if (error.response && error.response.data && error.response.data.code) {
        const { data } = error.response;
        const { message, code } = data;
        const title = localizationHelper.localize(code);

        notificationHelper.error(title, message);
      } else {
        notificationHelper.error(
          'Network request failed',
          `Network status ${status}`,
        );
      }
    }
  }
};

const handleRequestSuccess = (data: any) => {
  if (data.code && data.code !== STATUS_SUCCESS) {
    const title = localizationHelper.localize(data.code);
    const { message } = data;
    notificationHelper.error(title, message);
    throw new LogicError(data.code, message, data.extra);
  }
};
export default {
  normalizeParams,
  handleRequestError,
  handleRequestSuccess,
};
