import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import mapStateToProps from './mapStateToProps';
import styles from './index.scss';

const CitySearch = ({ photos }) => (
  <div>
    <div>
      <h3>
        Your Collection
      </h3>
    </div>
    <div className={styles.photosContainer}>
      {photos.map(({ image }) => (
        <div
          style={{ backgroundImage: `url(${image})` }}
          className={styles.photo}
        />
      ))}
    </div>
  </div>
);

CitySearch.propTypes = {
  photos: React.PropTypes.arrayOf(React.PropTypes.shape({
    photo: React.PropTypes.string,
    lat: React.PropTypes.number,
    lon: React.PropTypes.number,
  })),
};

export default compose(
  connect(mapStateToProps),
)(CitySearch);
