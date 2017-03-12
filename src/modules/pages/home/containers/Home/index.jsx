import React from 'react';
import { Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

// import updateOnMountAndKeysChange from 'modules/utils/decorators/updateOnMountAndKeysChange';

import mapDispatchToProps from './mapDispatchToProps';
import mapStateToProps from './mapStateToProps';
import styles from './index.scss';

const Home = ({ contents }) => (
  <Grid className={styles.container}>
    {console.log(contents)}
    <div />
  </Grid>
);

Home.propTypes = {
  contents: React.PropTypes.arrayOf(React.PropTypes.object),
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  // updateOnMountAndKeysChange(),
)(Home);
