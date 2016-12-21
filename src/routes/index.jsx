import React from 'react';
import { Route } from 'react-router';
import * as Views from 'containers';
import { RequireAuth, RequireUnAuth } from 'components';

const getRoutes = () => (
  <Route component={Views.App}>

    {/* Protected Routes */}
    <Route
      path="/"
      component={RequireAuth(Views.Files)}
    />

    {/* Unprotected Routes */}
    <Route
      path="/auth"
      component={RequireUnAuth(Views.Auth)}
    />
  </Route>
);

export default getRoutes;

