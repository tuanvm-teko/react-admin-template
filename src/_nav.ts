import i18next from 'i18next';

export default {
  items: [
    {
      name: i18next.t('Home'),
      url: '/dashboard',
      icon: 'user',
      badge: {
        variant: 'info',
        text: 'HOME',
      },
    },
    {
      name: i18next.t('Note'),
      url: '/notes',
      icon: 'star',
    },
  ],
};
