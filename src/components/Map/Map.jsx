import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { feature } from 'topojson-client';
import worldData from 'world-atlas/countries-110m.json';
import './Map.css';

const WorldMap = () => {
  const countries = feature(worldData, worldData.objects.countries).features;
  return (
    <div className="map-container">
      <ComposableMap className="map">
        <ZoomableGroup center={[0, 20]} zoom={1} minZoom={1} maxZoom={8} translateExtent={[[0, 0], [1000, 1000]]}>
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
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}

export default WorldMap;