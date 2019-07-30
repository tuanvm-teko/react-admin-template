import React, { Suspense } from 'react';
import routes from 'routes';
import { Switch, Route, Redirect } from 'react-router';
import uuid from 'uuid';

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

export default (props: any) => (
  <div>
    <div>this is layout</div>
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
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </Suspense>
    </div>
  </div>
);
