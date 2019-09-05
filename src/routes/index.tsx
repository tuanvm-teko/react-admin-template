import React from 'react';
import i18next from 'i18next';
import Loadable from 'react-loadable';
import DefaultLayout from '../components/DefaultLayout';

const Dashboard = Loadable({
  loader: () => import('../screens/Dashboard'),
  loading: () => <p>loading...</p>,
});

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
    name: i18next.t('Dashboard'),
    component: Dashboard,
  },
];

export default routes;
