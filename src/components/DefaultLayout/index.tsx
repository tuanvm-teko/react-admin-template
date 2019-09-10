import React, { Suspense } from 'reactn';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import uuid from 'uuid';

import {
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
  // @ts-ignore
} from '@coreui/react';
// sidebar nav config
import navigation from '_nav';
// routes config
import routes from 'routes';
import { userServices } from 'services';
import localizationHelper from 'helpers/localization';

import DefaultFooter from './Footer';
import DefaultHeader from './Header';

const loading = () => (
  <div className="animated fadeIn pt-1 text-center">Loading...</div>
);

function DefaultLayout(props: any) {
  const signOut = (e: Event) => {
    e.preventDefault();
    userServices.logout();
  };

  // change language by user
  const handleChangeLanguage = (lang: string) => {
    localizationHelper.changeLanguage(lang);
  };
  const language = localizationHelper.getCurrentLanguage();

  return (
    <div className="app">
      <AppHeader fixed>
        <DefaultHeader
          onLogout={signOut}
          onChangeLanguage={handleChangeLanguage}
          language={language}
        />
      </AppHeader>
      <div className="app-body">
        <AppSidebar fixed display="lg">
          <AppSidebarHeader />
          <AppSidebarForm />
          <Suspense fallback={loading}>
            <AppSidebarNav navConfig={navigation} {...props} />
          </Suspense>
          <AppSidebarFooter />
          <AppSidebarMinimizer />
        </AppSidebar>
        <main className="main">
          <div className="header-divider" />
          <AppBreadcrumb appRoutes={routes} />
          <Container fluid>
            <Suspense fallback={loading}>
              <Switch>
                <Redirect exact from="/" to="/dashboard" />
                {routes.map(route =>
                  route.component ? (
                    <Route
                      key={uuid.v4()}
                      path={route.path}
                      exact={route.exact}
                      render={rprops => (
                        // @ts-ignore
                        <route.component {...rprops} title={route.name} />
                      )}
                    />
                  ) : null,
                )}
                <Route path="*" render={() => <Redirect exact to="/404" />} />
              </Switch>
            </Suspense>
          </Container>
        </main>
      </div>
      <AppFooter>
        <Suspense fallback={loading}>
          <DefaultFooter />
        </Suspense>
      </AppFooter>
    </div>
  );
}

export default DefaultLayout;
