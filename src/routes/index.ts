import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import i18n from 'i18n';

const Dashboard = React.lazy(() => import('../screens/Dashboard'));

const routes = [
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
