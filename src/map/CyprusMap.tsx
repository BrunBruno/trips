import Map, { type MapPlace } from "./Map";

const CYPRUS_PLACES: MapPlace[] = [
  {
    name: "Paphos",
    position: {
      lat: 34.7758,
      lng: 32.4218,
    },
  },
  {
    name: "Pano Platres",
    position: {
      lat: 34.8872,
      lng: 32.8643,
    },
  },
  {
    name: "Larnaca",
    position: {
      lat: 34.9167,
      lng: 33.6266,
    },
  },
];

const CYPRUS_CENTER = {
  lat: 34.8465,
  lng: 33.0242,
};

function CyprusMap() {
  return <Map center={CYPRUS_CENTER} zoom={9} places={CYPRUS_PLACES} />;
}

export default CyprusMap;
