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

const truncateString = (string, n) => string.length > n ? `${string.substr(0, n)}...` : string;

const FileBreadcrumbs = ({ data, active }) => data.length > 0 && (
  <div className={style.Wrapper}>
    <Breadcrumb>
      {data.map((item, index) => (
        <LinkContainer
          key={index}
          to={`/files/${item[0]}`}
          title={item[1]}
        >
          <Breadcrumb.Item>
            {truncateString(item[1], 25)}
          </Breadcrumb.Item>
        </LinkContainer>
      ))}

      <Breadcrumb.Item active>
        <span title={active.name}>
          {truncateString(active.name, 25)}
        </span>
      </Breadcrumb.Item>
    </Breadcrumb>
  </div>
);

FileBreadcrumbs.propTypes = propTypes;

export default FileBreadcrumbs;
