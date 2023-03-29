import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-110.0, -10.0, 0],
        center: [-2, -3],
        scale: 1200
      }}
      style={{width: "100%", height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#1caf97"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[101.9758, 4.2105]} //[ E coord, N coord ]
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#ece7e6",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#f0eceb">
          {"Malaysia"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
