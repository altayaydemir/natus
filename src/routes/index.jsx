import React from 'react';
import { Route } from 'react-router';
import * as Views from 'containers';

const getRoutes = () => (
  <Route component={Views.App}>
    <Route>
      <Route
        path="/"
        component={Views.Home}
      />

      <Route
        path="/auth"
        component={Views.Auth}
      />
    </Route>
  </Route>
);

export default getRoutes;

