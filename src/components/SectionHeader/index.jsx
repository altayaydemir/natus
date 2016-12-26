// Core
import React, { PropTypes } from 'react';

// UI
import style from './style.scss';

// PropTypes
const propTypes = {
  title: PropTypes.string,
};

const SectionHeader = ({ title }) => (
  <div className={style.Wrapper}>
    <h4>
      {title}
    </h4>
  </div>
);

SectionHeader.propTypes = propTypes;

export default SectionHeader;
