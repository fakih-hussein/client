import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { feature } from 'topojson-client';
import worldData from 'world-atlas/countries-110m.json';
import './Map.css';

const WorldMap = () => {
  const countries = feature(worldData, worldData.objects.countries).features;

  const handleMouseEnter = (geo, event) => {
    const { pageX, pageY } = event;
    setTooltip({
      name: geo.properties.name,
      x: pageX,
      y: pageY,
    });
  };

  const handleMouseMove = (event) => {
    const { pageX, pageY } = event;
    setTooltip((prev) => ({ ...prev, x: pageX, y: pageY }));
  };

  const handleMouseLeave = () => {
    setTooltip({ name: '', x: 0, y: 0 });
  };
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