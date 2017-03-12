/* eslint-disable react/prop-types */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import compose from 'recompose/compose';

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
  // for (let i = 0; i < 5; i++) {
  //   const position = new google.maps.LatLng(
  //     southWest.lat() + latSpan * Math.random(),
  //     southWest.lng() + lngSpan * Math.random()
  //   );
  //   markers.push({
  //     position,
  //     content: `This is the secret message`.split(` `)[i],
  //     showInfo: false,
  //   });
  // }
  return markers;
};

const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    {...props}
  >
    { generateInitialMarkers(props.photos).map(marker =>
      <Marker position={marker.position} key={marker.name}>
        { marker.showInfo &&
          <InfoWindow>
            <div>{marker.infoContent}</div>
          </InfoWindow>
        }
      </Marker>)
    }
  </GoogleMap>
));

const MyMap = ({ lat, lng, photos }) => (
  <SimpleMapExampleGoogleMap
    containerElement={
      <div style={{ height: '100%' }} />
    }
    mapElement={
      <div style={{ height: '100%' }} />
    }
    photos={photos}
    defaultCenter={{ lat: parseFloat(lat), lng: parseFloat(lng) }}
  />
);

export default compose()(MyMap);
