import React from 'react';
import data from './data/small.json';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: Number(41.575841),
  lng: Number(-101.699544),
};

function App() {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  // const [map, setMap] = React.useState(null);

  // const onLoad = React.useCallback((m) => {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   m.fitBounds(bounds);
  //   setMap(m)
  // }, [])

  // const onUnmount = React.useCallback(() => {
  //   setMap(null)
  // }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    // onLoad={onLoad}
    // onUnmount={onUnmount}
    >
      {data.map((device) => {
        const [lat, lng] = device.coordinates;
        return (
          <Marker
            key={device.id}
            position={{ lat, lng }}
            draggable={true}
            onDragEnd={(e) => console.log(e)}
          />
        )
      })}
    </GoogleMap>
  ) : <h1>Loading........</h1>
}

export default App;
