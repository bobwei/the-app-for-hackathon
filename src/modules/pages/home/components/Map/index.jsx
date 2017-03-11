/* eslint-disable react/prop-types */
import React from 'react';
import compose from 'recompose/compose';

import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const generateInitialMarkers = () => {
  // const southWest = new google.maps.LatLng(-31.203405, 125.244141);
  // const northEast = new google.maps.LatLng(-25.363882, 131.044922);

  // const lngSpan = northEast.lng() - southWest.lng();
  // const latSpan = northEast.lat() - southWest.lat();

  const markers = [
    { lat: 25.04, lng: 121.52 },

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
generateInitialMarkers();
const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    {...props}
  >
    <Marker
      position={{ lat: 25.04, lng: 121.52 }}
    />
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
