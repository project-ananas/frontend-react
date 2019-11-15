import React from 'react';
import GoogleMapReact from 'google-map-react';

function initMap() {
  const defaultProps = {
    center: {
      lat: 51.452248,
      lng: 5.48206
    },
    zoom: 4
  };

  return(
    <GoogleMapReact bootstrapURLKeys={{key: "AIzaSyCR6CXHswuFyCSGmMdk3rbGEj80HKpPQeA"}}
    defaultCenter={defaultProps.center}
    defaultZoom={defaultProps.zoom}
    ></GoogleMapReact>
  )
}

export default initMap;
