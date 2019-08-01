import React, { Suspense } from 'react';
import routes from 'routes';
import { Switch, Route, Redirect } from 'react-router';
import uuid from 'uuid';
import Loadable from 'react-loadable';
import { Layout } from 'antd';
import Sider from './Sider';
import Header from './Header';
import Footer from './Footer';

const { Content } = Layout;

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

const Page404 = Loadable({
  loader: () => import('screens/Page404'),
  loading,
});

export default (props: any) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sider />
    <Layout style={{ marginLeft: 200 }}>
      <Header />
      <Content style={{ marginTop: 64 }}>
        <Suspense fallback={loading}>
          <Switch>
            <Redirect exact from="/" to="/dashboard" />
            {routes.map((route: any) =>
              route.component ? (
                <Route
                  key={uuid.v4()}
                  path={route.path}
                  exact={route.exact}
                  render={rprops => (
                    <route.component {...rprops} title={route.name} />
                  )}
                />
              ) : null,
            )}

            <Route path="*" name="Page 404" component={Page404} />
          </Switch>
        </Suspense>
      </Content>
      <Footer />
    </Layout>
  </Layout>
);
