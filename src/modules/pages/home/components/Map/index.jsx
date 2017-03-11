/* eslint-disable react/prop-types */
import React from 'react';
import compose from 'recompose/compose';

import { withGoogleMap, GoogleMap } from 'react-google-maps';

const SimpleMapExampleGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={8}
    {...props}
  />
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
