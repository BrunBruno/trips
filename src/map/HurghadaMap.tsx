import Map, { type MapPlace } from "./Map";

const HURGHADA_PLACES: MapPlace[] = [
  {
    name: "Desert Rose",
    image: "/trips/egypt-hurghada/001.jpg",
    position: {
      lat: 27.0877,
      lng: 33.8358,
    },
  },
];

const HURGHADA_CENTER = {
  lat: 27.0877,
  lng: 33.8358,
};

function HurghadaMap() {
  return (
    <Map
      center={HURGHADA_CENTER}
      zoom={14}
      zoomPortrait={12}
      places={HURGHADA_PLACES}
    />
  );
}

export default HurghadaMap;