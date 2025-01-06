import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { feature } from 'topojson-client';
import worldData from 'world-atlas/countries-110m.json';
import './Map.css';
import "./../../ui/styles/base.css"

const WorldMap = () => {
  const countries = feature(worldData, worldData.objects.countries).features;
  const [tooltip, setTooltip] = useState({ name: '', x: 0, y: 0 });

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
    <div className="map-container flex center">
      <ComposableMap className="map">
        {/* <ZoomableGroup center={[0, 20]} zoom={1} minZoom={1} maxZoom={8} translateExtent={[[0, 0], [1000, 1000]]}> */}
          <Geographies geography={countries}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={(event) => handleMouseEnter(geo, event)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    default: { fill: '#D6D6DA', outline: 'none' },
                    hover: { fill: '#28A745', outline: 'none' },
                    pressed: { fill: '#28A745', outline: 'none' },
                  }}

                />
              ))
            }
          </Geographies>
        {/* </ZoomableGroup> */}
      </ComposableMap>
      {tooltip.name && (
        <div
          style={{
            position: 'absolute',
            left: tooltip.x + 10, // Offset to avoid overlapping with the cursor
            top: tooltip.y + 10,
            backgroundColor: 'white',
            border: '1px solid #ccc',
            padding: '5px',
            borderRadius: '5px',
            pointerEvents: 'none',
            zIndex: 1000,
          }}
        >
          {tooltip.name}
        </div>
      )}
    </div>
  );
}

export default WorldMap;