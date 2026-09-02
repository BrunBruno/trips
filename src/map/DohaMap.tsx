import Map, { type MapPlace } from "./Map";

const DOHA_PLACES: MapPlace[] = [
  {
    name: "Doha",
    position: {
      lat: 25.2854,
      lng: 51.531,
    },
  },
];

const DOHA_CENTER = {
  lat: 25.2854,
  lng: 51.531,
};

function DohaMap() {
  return <Map center={DOHA_CENTER} zoom={11} places={DOHA_PLACES} />;
}

export default DohaMap;
