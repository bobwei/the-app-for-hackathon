import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import styles from './index.scss';

const Search = props => (
  <Grid className={styles.container}>
    {console.log(props)}
    <Row className={styles.main}>
      <Col md={4} className={styles.panel} style={{ backgroundColor: '#E9573F' }}>e</Col>
      <Col md={8} className={styles.map} style={{ backgroundColor: '#F6BB42' }}>d</Col>
    </Row>
  </Grid>
);

export default compose(
  connect(),
)(Search);
