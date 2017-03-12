/* eslint-disable */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import compose from 'recompose/compose';
import getContext from 'recompose/getContext';

import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';

import styles from './index.scss';

const getImageGrid = photos =>
  <div>
    <span style={{ color: 'Grey' }}>{photos[0].name.toUpperCase()}</span>
    <Row>
      <Col md={6} className={styles.customPadding}>
        <div
          style={{ backgroundImage: `url(${photos[0].image})` }}
          className={styles.photo}
        />
      </Col>
      <Col md={6} className={styles.customPadding}>
        <div
          style={{ backgroundImage: `url(${photos[1].image})` }}
          className={styles.xsPhoto}
        />
        <div
          style={{ backgroundImage: `url(${photos[2].image})` }}
          className={styles.xsPhoto}
        />
      </Col>
    </Row>
  </div>;

const generateInitialMarkers = (photos) => {
  const markers = [
    {
      name: 'taipei',
      position: { lat: 25.04, lng: 121.52 },
      showInfo: true,
      infoContent: getImageGrid(photos.filter(item => item.name === 'taipei')),
    },
    {
      name: 'taoyuan',
      position: { lat: 24.97, lng: 121.21 },
      showInfo: true,
      infoContent: getImageGrid(photos.filter(item => item.name === 'taoyuan')),
    },
    {
      name: 'hsinchu',
      position: { lat: 24.79, lng: 121.06 },
      showInfo: true,
      infoContent: getImageGrid(photos.filter(item => item.name === 'hsinchu')),
    },
  ];

  return markers;
};

const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={new google.maps.LatLng(25.064879, 121.531089)}
    center={new google.maps.LatLng(25.064879, 121.531089)}
    zoom={11 - (parseInt(props.filter && props.filter.days, 10) || 0)}
    {...props}
  >
    {console.log(props.filter)}
    { generateInitialMarkers(props.photos).map(marker =>
      <Marker position={marker.position} key={marker.name}>
        { marker.showInfo &&
          <InfoWindow>
            <div onClick={() => props.router.replace(`${props.router.location.pathname}?selectedCity=${marker.name}`)}>
              {marker.infoContent}
            </div>
          </InfoWindow>
        }
      </Marker>)
    }
  </GoogleMap>
));

const MyMap = ({ lat, lng, photos, router, filter }) => (
  <SimpleMapExampleGoogleMap
    containerElement={
      <div style={{ height: '100%' }} />
    }
    mapElement={
      <div style={{ height: '100%' }} />
    }
    photos={photos}
    router={router}
    defaultCenter={{ lat: parseFloat(lat), lng: parseFloat(lng) }}
    filter={filter}
  />
);

export default compose(
  connect(state => ({
    filter: getFormValues('filter')(state),
  })),
  getContext({
    router: React.PropTypes.object,
  }),
)(MyMap);
