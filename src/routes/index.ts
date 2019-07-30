import React from 'react';
import i18n from 'i18n';

import DefaultLayout from '../components/DefaultLayout';

const Dashboard = React.lazy(() => import('../screens/Dashboard'));

const routes: any = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: DefaultLayout,
  },
  {
    path: '/dashboard',
    exact: true,
    name: i18n.__('Dashboard'),
    component: Dashboard,
  },
];

export default routes;
