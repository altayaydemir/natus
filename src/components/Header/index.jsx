// Core
import React, { PropTypes } from 'react';

// UI
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';
// import Icon from 'react-fontawesome';
import style from './style.scss';

// PropTypes
const { array, object } = PropTypes;
const propTypes = {
  routes: array,
  user: object,
};

const Header = ({ routes, user }) => (
  <Navbar
    inverse
    collapseOnSelect
    fluid
    className={style.Wrapper}
  >
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          Natus
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>

    <Navbar.Collapse>
      <Nav pullRight>
        {routes.map((route, index) => (
          <LinkContainer to={route.to} key={index}>
            <NavItem>
              {route.name}
            </NavItem>
          </LinkContainer>
        ))}

        {user.data.mail && <NavItem className={style.NavDivider} />}

        {user.data.mail &&
          <NavDropdown
            title={user.data.name || user.data.mail}
            id="header-user-dropdown"
          >
            {user.menu.map((menuItem, index) => (
              <LinkContainer to={menuItem.to} key={index}>
                <MenuItem>
                  {menuItem.name}
                </MenuItem>
              </LinkContainer>
            ))}
          </NavDropdown>
        }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

Header.propTypes = propTypes;

export default Header;
