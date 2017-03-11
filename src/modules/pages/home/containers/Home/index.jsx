import React from 'react';
import { Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import updateOnMountAndKeysChange from 'modules/utils/decorators/updateOnMountAndKeysChange';

import mapDispatchToProps from './mapDispatchToProps';
import mapStateToProps from './mapStateToProps';
import styles from './index.scss';

const Home = props => (
  <Grid className={styles.container}>
    {console.log(props)}
    <div>
      Hi
    </div>
  </Grid>
);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  updateOnMountAndKeysChange(),
)(Home);
