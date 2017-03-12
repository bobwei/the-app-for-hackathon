import React from 'react';
import { Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import updateOnMountAndKeysChange from 'modules/utils/decorators/updateOnMountAndKeysChange';

import mapDispatchToProps from './mapDispatchToProps';
import mapStateToProps from './mapStateToProps';
import styles from './index.scss';

const Home = () => (
  <Grid className={styles.container} />
);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  updateOnMountAndKeysChange(),
)(Home);
