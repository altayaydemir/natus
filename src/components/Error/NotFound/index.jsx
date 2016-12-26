// Core
import React, { PropTypes } from 'react';

// UI
import Icon from 'react-fontawesome';
import { Panel, Button } from 'react-bootstrap';
import style from '../style.scss';

// PropTypes
const propTypes = {
  goToHome: PropTypes.func,
};

const NotFound = ({ goToHome }) => (
  <div className={style.Wrapper}>
    <Panel>
      <h1>404</h1>

      <p>The page or resource you are looking for is not found.</p>

      <Button
        bsSize="lg"
        onClick={() => goToHome()}
        className="btn-black"
      >
        <Icon name="arrow-circle-o-left" /> Go to Home
      </Button>
    </Panel>
  </div>
);

NotFound.propTypes = propTypes;

export default NotFound;
