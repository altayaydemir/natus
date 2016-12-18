import React from 'react';
import { Route } from 'react-router';
import * as Views from 'containers';

const getRoutes = () => {
  return (
    <Route component={Views.App}>
      <Route>
        <Route
          path="/"
          component={Views.Home}
        />
      </Route>
    </Route>
  );
};

export default getRoutes;

