// Core
import React, { PropTypes } from 'react';

// UI
import { LinkContainer } from 'react-router-bootstrap';
import { Breadcrumb } from 'react-bootstrap';
import style from './style.scss';

// PropTypes
const { array, object } = PropTypes;
const propTypes = {
  data: array,
  active: object,
};

const FileBreadcrumbs = ({ data, active }) => data.length > 0 && (
  <div className={style.Wrapper}>
    <Breadcrumb>
      {data.map((item, index) => (
        <LinkContainer to={`/files/${item[0]}`} key={index}>
          <Breadcrumb.Item>
            {item[1]}
          </Breadcrumb.Item>
        </LinkContainer>
      ))}

      <Breadcrumb.Item active>
        {active.name}
      </Breadcrumb.Item>
    </Breadcrumb>
  </div>
);

FileBreadcrumbs.propTypes = propTypes;

export default FileBreadcrumbs;
