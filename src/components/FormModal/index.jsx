// Core
import React, { PropTypes } from 'react';

// UI
import { Loader } from 'components';
import { Modal, Panel } from 'react-bootstrap';
import Icon from 'react-fontawesome';
import style from './style.scss';

// Helpers
import cx from 'classnames';

// PropTypes
const { func, node, bool, object, string } = PropTypes;
const propTypes = {
  visible: bool,
  onHide: func,
  children: node,
  isLoaded: bool,
  icon: string,
  title: string,
  bsModalProps: object,
};

const defaultProps = {
  isLoaded: true,
};

const FormModal = props => (
  <Modal
    show={props.visible}
    onHide={props.onHide}
    className={style.Wrapper}
    {...props.bsModalProps}
  >
    <Modal.Header
      closeButton
      className={style.Header}
    >
      <h4 className={cx('modal-title', style.Title)}>
        <Icon
          name={props.icon}
        />
        <span>
          {props.title}
        </span>
      </h4>
    </Modal.Header>

    <Modal.Body>
      <Panel>
        {props.isLoaded ?
          props.children
          :
          <Loader />
        }
      </Panel>
    </Modal.Body>
  </Modal>
);

FormModal.propTypes = propTypes;
FormModal.defaultProps = defaultProps;

export default FormModal;
