// Core
import React, { PropTypes } from 'react';

// UI
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'styles/main.scss';

import { Grid, Row, Col } from 'react-bootstrap';
import { Header, Loader } from 'components';

// PropTypes
const { bool, array, shape, node, object } = PropTypes;
const propTypes = {
  isLoading: bool,
  isAuthenticated: bool,
  routes: shape({
    auth: array,
    unauth: array,
    user: array,
  }),
  user: object,
  headerActions: object,
  children: node,
};

const AppLayout = ({ isLoading, isAuthenticated, routes, children, user, headerActions }) =>
isLoading ?
  <Loader size="big" /> : (
    <section>
      <Header
        {...headerActions}
        isAuthenticated={isAuthenticated}
        routes={isAuthenticated ? routes.auth : routes.unauth}
        user={{
          data: user,
          menu: routes.user,
        }}
      />

      <Grid>
        <Row>
          <Col xs={12}>
            {children}
          </Col>
        </Row>
      </Grid>
    </section>
  );

AppLayout.propTypes = propTypes;

export default AppLayout;
