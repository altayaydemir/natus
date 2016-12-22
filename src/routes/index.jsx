import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import * as Views from 'containers';
import { RequireAuth, RequireUnAuth } from 'components';

const getRoutes = () => (
  <Route component={Views.App}>

    {/* Protected Routes */}
    <Route path="/">
      <IndexRedirect to="/files" />
    </Route>

    <Route
      path="/files"
    >
      <IndexRoute
        component={RequireAuth(Views.Files)}
      />

      <Route
        path=":id"
        component={RequireAuth(Views.File)}
      />
    </Route>

    <Route
      path="/transfers"
    >
      <IndexRoute
        component={RequireAuth(Views.Transfers)}
      />

      <Route
        path="add"
        component={RequireAuth(Views.TransferAdd)}
      />
    </Route>

    {/* Unprotected Routes */}
    <Route
      path="/auth"
      component={RequireUnAuth(Views.Auth)}
    />
  </Route>
);

export default getRoutes;

