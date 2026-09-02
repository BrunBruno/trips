import Map, { type MapPlace } from "./Map";

const EUROPEAN_UNION_PLACES: MapPlace[] = [
  {
    name: "Wiedeń",
    position: {
      lat: 48.2082,
      lng: 16.3738,
    },
  },
  {
    name: "Chur",
    position: {
      lat: 46.8508,
      lng: 9.532,
    },
  },
  {
    name: "Zurych",
    position: {
      lat: 47.3769,
      lng: 8.5417,
    },
  },
  {
    name: "Mediolan",
    position: {
      lat: 45.4642,
      lng: 9.19,
    },
  },
  {
    name: "Cannes",
    position: {
      lat: 43.5528,
      lng: 7.0174,
    },
  },
  {
    name: "LLoret de Mar",
    position: {
      lat: 41.6996,
      lng: 2.8457,
    },
  },
  {
    name: "barcelona",
    position: {
      lat: 41.3851,
      lng: 2.1734,
    },
  },
  {
    name: "paryż",
    position: {
      lat: 48.8566,
      lng: 2.3522,
    },
  },
  {
    name: "Berlin",
    position: {
      lat: 52.52,
      lng: 13.405,
    },
  },
  {
    name: "Praga",
    position: {
      lat: 50.0755,
      lng: 14.4378,
    },
  },
  {
    name: "Katowice",
    position: {
      lat: 50.2649,
      lng: 19.0238,
    },
  },
];

const EUROPEAN_UNION_CENTER = {
  lat: 46.5,
  lng: 11.5,
};

function EuropeanUnionMap() {
  return (
    <Map
      center={EUROPEAN_UNION_CENTER}
      zoom={5}
      places={EUROPEAN_UNION_PLACES}
    />
  );
}

export default EuropeanUnionMap;
