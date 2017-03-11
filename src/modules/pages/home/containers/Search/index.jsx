import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import MyMap from '../../components/Map';
import styles from './index.scss';

const Search = ({ children, params }) => (
  <Grid className={styles.container}>
    <Row className={styles.main}>
      <Col md={4} className={styles.panel}>
        {children}
      </Col>
      <Col md={8} className={styles.map} >
        <MyMap
          {...params}
        />
      </Col>
    </Row>
  </Grid>
);

export default compose(
  connect(),
)(Search);
