import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import MyMap from '../../components/Map';
import styles from './index.scss';
import mapStateToProps from './mapStateToProps';

// eslint-disable-next-line no-unused-vars
const Search = ({ children, params, photos }) => (
  <Grid className={styles.container}>
    <Row className={styles.main}>
      <Col md={4} className={styles.panel}>
        {children}
      </Col>
      <Col md={8} className={styles.map} >
        <MyMap
          {...params}
          photos={photos}
        />
      </Col>
    </Row>
  </Grid>
);

Search.propTypes = {
  photos: React.PropTypes.arrayOf(React.PropTypes.shape({
    photo: React.PropTypes.string,
    lat: React.PropTypes.number,
    lon: React.PropTypes.number,
  })),
};

export default compose(
  connect(mapStateToProps),
)(Search);
