import React from 'react';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import R from 'ramda';
import compose from 'recompose/compose';
import mapProps from 'recompose/mapProps';
import withProps from 'recompose/withProps';
import lifecycle from 'recompose/lifecycle';
import withState from 'recompose/withState';
import shallowEqual from 'recompose/shallowEqual';

import Modal from 'modules/ui/components/Modal';

// import NavigationBar from '../NavigationBar';
import styles from './index.scss';

const Layout = ({
  children, previousChildren,
  modalProps: { modal, ...modalProps },
  onHide,
}) => (
  <div>
    <header className={styles.headerWrap}>
      <div className={styles.logoWrap} />
      <div className={styles.pplWrap}>
        <div className={styles.ppl} />
        <div className={styles.text}>Miss Chang</div>
      </div>
      <div className={styles.inputWrap}>
        <span className={styles.leftCircle} />
        <input type="text" placeholder="Search the city you want to go" />
        <span className={styles.rightCircle} />
        <span className={styles.searchIcon}>
          <i className="fa fa-search" aria-hidden="true" />
        </span>
      </div>
    </header>
    {modal &&
      <div>
        <Modal show onHide={onHide} {...modalProps}>
          {children}
        </Modal>
        {previousChildren}
      </div>
    }
    {!modal &&
      children
    }
  </div>
);

Layout.defaultProps = {
  modalProps: {
    modal: false,
    backTo: '/',
  },
};

Layout.propTypes = {
  previousChildren: React.PropTypes.element,
  modalProps: React.PropTypes.shape({
    modal: React.PropTypes.bool,
    title: React.PropTypes.string,
    backTo: React.PropTypes.string.isRequired,
  }),
  onHide: React.PropTypes.func,
};

export default compose(
  mapProps(props => ({
    modalProps: R.path(['location', 'state', 'modalProps'])(props),
    ...R.pick(['children', 'main', 'location'])(props),
  })),
  connect(),
  withProps(({ dispatch, location }) => ({
    onHide: R.compose(
      dispatch,
      replace,
      R.path(['state', 'modalProps', 'backTo']),
      R.always(location),
    ),
  })),
  withState('previousChildren', 'setPreviousChildren', null),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      // TODO:
      // - add !this.props.modal && nextProps.modal === true check
      // to determin whether to setPreviousChildren or not
      if (!shallowEqual(
        R.pick(['location'])(this.props),
        R.pick(['location'])(nextProps),
      )) {
        nextProps.setPreviousChildren(this.props.children);
      }
    },
    componentDidMount() {
      this.props.setPreviousChildren(this.props.children);
    },
  }),
)(Layout);
