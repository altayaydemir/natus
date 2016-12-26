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

const ServerError = ({ goToHome }) => (
  <div className={style.Wrapper}>
    <Panel>
      <h1>500</h1>

      <h4>Looks like something went wrong!</h4>

      <p>
        We track these errors automatically, but if the problem persists feel free to contact us.
        <br />
        In the meantime, try refreshing.
      </p>

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

ServerError.propTypes = propTypes;

export default ServerError;
