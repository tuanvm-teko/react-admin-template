import { authConstants, localStorageConstants } from 'constants/index';
import { useEffect } from 'react';
import { useGlobal } from 'reactn';
import { userServices } from 'services';

export const useUserInfo = () => {
  const [currentUser, setCurrentUser] = useGlobal<any>(
    authConstants.KEY_CURRENT_USER,
  );
  const [currentPermissions, setCurrentPermissions] = useGlobal<any>(
    authConstants.KEY_CURRENT_PERMISSIONS,
  );

  useEffect(() => {
    if (userServices.getAccessToken() && !currentUser) {
      userServices.getCurrentUserInfo().then(userData => {
        setCurrentUser(userData);
        // setCurrentPermissions(getPermissionFromUser(userData));
      });
    }
  }, [currentUser, setCurrentUser]);

  if (currentUser && userServices.getCurrentUserId() !== currentUser.id) {
    localStorage.setItem(
      localStorageConstants.KEY_CURRENT_USER_ID,
      currentUser.id,
    );
  }

  return {
    currentPermissions,
    currentUser,
  };
};

export default {
  useUserInfo,
};
