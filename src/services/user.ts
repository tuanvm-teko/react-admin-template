import { cookieHelper } from 'helpers';
import { localStorageConstants, authConstants } from 'constants/index';
import { requestServices } from 'services';
import { browserHistory } from 'helpers';

const logout = () => {
  window.location.href = `${process.env.REACT_APP_BASE_URL ||
    ''}/web/logout?redirect_url=${window.location.href}`;
};

const denyAccess = () => {
  browserHistory.push('/403');
};

const getAccessToken = () =>
  cookieHelper.getByName(localStorageConstants.ACCESS_TOKEN);

const getCurrentUserInfo = () => {
  return requestServices.userClient
    .get(authConstants.api.USER_DETAIL)
    .then(response => response.data);
};

const getCurrentUserId = () => {
  const userId = localStorage.getItem(
    localStorageConstants.KEY_CURRENT_USER_ID,
  );

  return userId ? Number.parseInt(userId, 10) : undefined;
};

export default {
  logout,
  denyAccess,
  getAccessToken,
  getCurrentUserInfo,
  getCurrentUserId,
};
