import React from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    {...props}
  />
));

const MyMap = () => (
  <SimpleMapExampleGoogleMap
    containerElement={
      <div style={{ height: '100%' }} />
    }
    mapElement={
      <div style={{ height: '100%' }} />
    }
  />
);

export default MyMap;
