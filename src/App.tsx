import React from 'react';
import { createBrowserHistory } from 'history';
import { Route, Router, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import 'configs';

const browserHistory = createBrowserHistory();
// import PrivateRoute from './components/PrivateRoute';

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

// Containers
// const DefaultLayout = Loadable({
//   loader: () => import('./components/DefaultLayout'),
//   loading,
// });

// pages
const Login = Loadable({
  loader: () => import('./screens/Login'),
  loading,
});

// const Page404 = Loadable({
//   loader: () => import('./screens/Page404'),
//   loading,
// });

// const Page403 = Loadable({
//   loader: () => import('./screens/Page403'),
//   loading,
// });

// const Page500 = Loadable({
//   loader: () => import('./screens/Page500'),
//   loading,
// });

function App() {
  return (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/login" name="Login Page" component={Login} />
        {/* <Route exact path="/404" name="Page 404" component={Page404} />
        <Route exact path="/403" name="Page 403" component={Page403} />
        <Route exact path="/500" name="Page 500" component={Page500} />
        <PrivateRoute path="/" name="Home" component={DefaultLayout} />*/}
      </Switch>
    </Router>
  );
}

export default App;
