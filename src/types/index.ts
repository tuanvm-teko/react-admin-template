export type NotificationTypeT = 'danger' | 'warning' | 'success' | 'info';
export type NotificationT = {
  id: string;
  title: string;
  message: string;
  type: NotificationTypeT;
  createdAt: string;
  seen: boolean;
};
