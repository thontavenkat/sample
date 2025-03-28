import * as React from 'react';
import Map, {NavigationControl, Marker} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const FullScreenMap = () => {
  return (
    <div>
        
        <Map mapLib={maplibregl} 
        initialViewState={{
          longitude:  78.3794,
          latitude: 17.4532,
          zoom: 14
        }}
        style={{width: "100%", height: " calc(100vh - 77px)"}}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=y694Rqw1SfcpYen1M06N"
      >
         <Marker longitude={78.3794} latitude={17.4532} color='#00000'/>
        <NavigationControl position="top-left" />
      </Map>
    </div>
  );
};

export default FullScreenMap;
