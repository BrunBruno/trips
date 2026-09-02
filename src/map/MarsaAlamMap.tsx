import Map, { type MapPlace } from "./Map";

const MARSA_ALAM_PLACES: MapPlace[] = [
  {
    name: "Marsa Alam",
    position: {
      lat: 25.0719,
      lng: 34.8931,
    },
  },
  {
    name: "Luxor",
    position: {
      lat: 25.6872,
      lng: 32.6396,
    },
  },
];

const MARSA_ALAM_CENTER = {
  lat: 25.3795,
  lng: 33.7663,
};

function MarsaAlamMap() {
  return <Map center={MARSA_ALAM_CENTER} zoom={8} places={MARSA_ALAM_PLACES} />;
}

export default MarsaAlamMap;
