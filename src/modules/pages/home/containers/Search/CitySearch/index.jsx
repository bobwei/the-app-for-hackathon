/* eslint-disable no-underscore-dangle, jsx-a11y/no-static-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import R from 'ramda';
import compose from 'recompose/compose';
import withState from 'recompose/withState';
import withHandlers from 'recompose/withHandlers';

import mapStateToProps from './mapStateToProps';
import styles from './index.scss';

const CitySearch = ({ photos, selectedPhotos, toggleSelect }) => (
  <div>
    <div className={styles.collectionBlock}>
      <h3 className={styles.title}>
        Your Collection
      </h3>
      <div className={styles.collectionContainer}>
        {selectedPhotos.map(image => (
          <div
            style={{ backgroundImage: `url(${image})` }}
            className={styles.smallPhoto}
          />
        ))}
      </div>
      <Button type="button" className={styles.button} block>Plan a trip</Button>
    </div>
    <div className={styles.photosContainer}>
      {photos.map(({ image }) => (
        <div
          style={{ backgroundImage: `url(${image})` }}
          className={styles.mediumPhoto}
          id={image}
          onClick={toggleSelect}
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
  selectedPhotos: React.PropTypes.arrayOf(React.PropTypes.string),
  toggleSelect: React.PropTypes.func,
};

export default compose(
  connect(mapStateToProps),
  withState('selectedPhotos', 'setSelectedPhoto', []),
  withHandlers({
    toggleSelect: ({ setSelectedPhoto: onChange, selectedPhotos: value }) => R.compose(
      onChange,
      R.ifElse(
        R.contains(R.__, value),
        selected => R.filter(R.compose(R.not, R.equals(selected)))(value),
        R.compose(R.concat(value), R.of),
      ),
      R.path(['target', 'id']),
    ),
  }),
)(CitySearch);
