"use strict";
mapboxgl.accessToken =
  "pk.eyJ1IjoiaGFicmxlc25pIiwiYSI6ImNraGE3cnRzNzAwd2YydHFuNjVsYzB2MWwifQ.Wg2NZpX88VuN1kClTX-UWg";
const map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
  center: [24, 60], // starting position [lng, lat]
  zoom: 13, // starting zoom
});

const addMarker = (coords) => {
  map.setCenter(coords);
  const marker = new mapboxgl.Marker().setLngLat(coords).addTo(map);
};
