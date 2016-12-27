// Core
import React, { PropTypes } from 'react';

// UI
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Label } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';
import Icon from 'react-fontawesome';
import style from './style.scss';

// PropTypes
const { array, object, bool, func } = PropTypes;
const propTypes = {
  routes: array,
  user: object,
  isAuthenticated: bool,
  onAddTransfer: func,
  onLogout: func,
};

const Header = ({ routes, user, isAuthenticated, onAddTransfer, onLogout }) => (
  <Navbar
    inverse
    collapseOnSelect
    fluid
    className={style.Wrapper}
  >
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">
          🤔 natus 🤔
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>

    {isAuthenticated &&
      <Navbar.Collapse>
        <Nav pullRight>
          {routes.map((route, index) => (
            <LinkContainer to={route.to} key={index}>
              <NavItem>
                {route.name}
              </NavItem>
            </LinkContainer>
          ))}

          <NavItem className={style.NavDivider} />

          <NavItem
            onClick={() => onAddTransfer()}
          >
            <Label bsStyle="primary">
              <Icon name="plus" style={{ marginRight: 10 }} />
              New Transfer
            </Label>
          </NavItem>

          <NavDropdown
            title={
              <span>
                <Icon name="user" style={{ marginRight: 10 }} />
                {user.data.username || user.data.mail}
              </span>
            }
            id="header-user-dropdown"
          >
            {user.menu.map((menuItem, index) => (
              <LinkContainer to={menuItem.to} key={index}>
                <MenuItem>
                  {menuItem.name}
                </MenuItem>
              </LinkContainer>
            ))}

            <MenuItem divider />

            <MenuItem onClick={() => onLogout()}>
              Logout
            </MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    }
  </Navbar>
);

Header.propTypes = propTypes;

export default Header;
