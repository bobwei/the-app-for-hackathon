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

const getImageGrid = () =>
  <Row>
    <Col md={6}>
      <img
        src="https://www.w3schools.com/css/trolltunga.jpg"
        alt="fuck"
        height="60"
        width="60"
      />
    </Col>
    <Col md={6}>
      <Row>
        <img
          src="https://www.w3schools.com/css/trolltunga.jpg"
          alt="fuck"
          height="30"
          width="30"
        />
      </Row>
      <Row>
        <img
          src="https://www.w3schools.com/css/trolltunga.jpg"
          alt="fuck"
          height="30"
          width="30"
        />
      </Row>
    </Col>
  </Row>;

const generateInitialMarkers = () => {
  // const southWest = new google.maps.LatLng(-31.203405, 125.244141);
  // const northEast = new google.maps.LatLng(-25.363882, 131.044922);

  // const lngSpan = northEast.lng() - southWest.lng();
  // const latSpan = northEast.lat() - southWest.lat();

  const markers = [
    {
      position: { lat: 25.04, lng: 121.52 },
      showInfo: true,
      infoContent: getImageGrid(),
    },
    {
      position: { lat: 24.97, lng: 121.21 },
    },
    {
      position: { lat: 24.79, lng: 121.06 },
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
    { generateInitialMarkers().map(marker =>
      <Marker position={marker.position}>
        { marker.showInfo &&
          <InfoWindow>
            <div>{marker.infoContent}</div>
          </InfoWindow>
        }
      </Marker>)
    }
  </GoogleMap>
));

const MyMap = ({ lat, lng }) => (
  <SimpleMapExampleGoogleMap
    containerElement={
      <div style={{ height: '100%' }} />
    }
    mapElement={
      <div style={{ height: '100%' }} />
    }
    defaultCenter={{ lat: parseFloat(lat), lng: parseFloat(lng) }}
  />
);

export default compose()(MyMap);
