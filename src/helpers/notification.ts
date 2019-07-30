import _ from 'lodash';
import { localStorageConstants, notificationConstants } from 'constants/index';
import { notification } from 'antd';
import { notificationHelper } from 'helpers/index';
import { userServices } from 'services';
import { NotificationT, NotificationTypeT } from 'types';

const MAX_PERSISTED_NOTIFICATION = 100;
const notificationTypes = notificationConstants.types;

const saveNewNotification = (
  title: string,
  message: string,
  type: NotificationTypeT,
) => {
  notificationHelper.pushNotificationsForCurrentUser({
    id: `${Date.now()}`,
    title,
    message,
    createdAt: new Date().toISOString(),
    type,
    seen: false,
  });
};

const success = (message: string, description: string = '') => {
  notification.success({ message, description });
  saveNewNotification(message, description, notificationTypes.success.value);
};

const error = (message: string, description: string = '') => {
  notification.error({ message, description });
  saveNewNotification(message, description, notificationTypes.danger.value);
};

const warning = (message: string, description: string = '') => {
  notification.warning({ message, description });
  saveNewNotification(message, description, notificationTypes.warning.value);
};

const getNotificationsForCurrentUser = () => {
  const currentUserId = userServices.getCurrentUserId();
  if (!currentUserId) return [];
  const userToNotifications = JSON.parse(
    localStorage.getItem(localStorageConstants.NOTIFICATION_KEY) || '{}',
  );
  return userToNotifications[currentUserId] || [];
};

const getAllUserToNotifications = () => {
  return JSON.parse(
    localStorage.getItem(localStorageConstants.NOTIFICATION_KEY) || '{}',
  );
};

const putNotificationsForCurrentUser = (notifications: [NotificationT]) => {
  const currentUserId = userServices.getCurrentUserId();
  const limitedNotifications = _.orderBy(
    notifications,
    ['createdAt'],
    ['desc'],
  ).slice(0, MAX_PERSISTED_NOTIFICATION);
  if (currentUserId) {
    const userToNotifications = getAllUserToNotifications();
    localStorage.setItem(
      localStorageConstants.NOTIFICATION_KEY,
      JSON.stringify({
        ...userToNotifications,
        [currentUserId]: limitedNotifications,
      }),
    );
  }
};

const pushNotificationsForCurrentUser = (n: NotificationT) => {
  const currentUserId = userServices.getCurrentUserId();
  if (currentUserId) {
    const notifications = getNotificationsForCurrentUser();
    notifications.push(n);
    putNotificationsForCurrentUser(notifications);
  }
};

export default {
  success,
  error,
  warning,
  getNotificationsForCurrentUser,
  pushNotificationsForCurrentUser,
  putNotificationsForCurrentUser,
  getAllUserToNotifications,
};
