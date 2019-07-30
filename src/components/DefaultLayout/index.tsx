import React, { Suspense } from 'react';
import routes from 'routes';
import { Switch, Route, Redirect } from 'react-router';
import uuid from 'uuid';
import navigation from '_nav';
import { Link } from 'react-router-dom';
import Loadable from 'react-loadable';

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

const Page404 = Loadable({
  loader: () => import('screens/Page404'),
  loading,
});

export default (props: any) => (
  <div>
    <div>this is layout</div>
    <div>
      {navigation.items.map(item => (
        <Link key={uuid.v4()} to={item.url}>
          <p>{item.name}</p>
        </Link>
      ))}
    </div>
    <div>
      <Suspense fallback={loading}>
        <Switch>
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
          <Redirect exact from="/" to="/dashboard" />
        </Switch>
      </Suspense>
    </div>
  </div>
);
