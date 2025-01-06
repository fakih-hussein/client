import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { feature } from 'topojson-client';
import worldData from 'world-atlas/countries-110m.json';
import './Map.css';

const WorldMap = () => {
  const countries = feature(worldData, worldData.objects.countries).features;
  return (
    <div className="map-container">
      <ComposableMap className="map">
        <Geographies geography={countries}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
               
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}

export default WorldMap;