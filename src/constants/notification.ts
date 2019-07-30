import { NotificationTypeT } from 'types';

const types = {
  danger: {
    text: 'Danger',
    value: 'danger' as NotificationTypeT,
  },
  warning: {
    text: 'Warning',
    value: 'warning' as NotificationTypeT,
  },
  success: {
    text: 'Success',
    value: 'success' as NotificationTypeT,
  },
  info: {
    text: 'Info',
    value: 'info' as NotificationTypeT,
  },
};

export default {
  types,
};
