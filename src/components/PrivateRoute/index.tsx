import React from 'react';
import { Route, RouteProps, Redirect } from 'react-router-dom';
import { userServices } from 'services';
import { useUserInfo } from 'hooks/user';
import Page403 from 'screens/Page403';

interface PropsT extends RouteProps {
  component: any;
  name?: string;
}

export default (props: PropsT) => {
  if (!userServices.getAccessToken()) {
    return <Redirect to="/login" />;
  }

  const { currentUser, currentPermissions } = useUserInfo();
  const { component: Component, ...rest } = props;
  if (!currentUser) {
    return <Redirect to="/login" />;
  }
  if (currentPermissions && currentPermissions.length === 0) {
    return <Page403 />;
  }

  return (
    <Route
      {...rest}
      render={routeProps => (
        <Component {...routeProps} activeUser={currentUser} />
      )}
    />
  );
};
