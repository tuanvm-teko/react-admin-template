import i18next from 'i18next';

export default {
  items: [
    {
      name: i18next.t('Home'),
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'HOME',
      },
    },
    {
      name: i18next.t('Note'),
      url: '/notes',
      icon: 'fa fa-sticky-note',
    },
  ],
};
