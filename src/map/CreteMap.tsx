import Map, { type MapPlace } from "./Map";

const CRETE_PLACES: MapPlace[] = [
  {
    name: "Agios Nikolaos",
    position: {
      lat: 35.1911,
      lng: 25.7149,
    },
  },
  {
    name: "Chersonisou",
    position: {
      lat: 35.3162,
      lng: 25.3908,
    },
  },
  {
    name: "Heraklion",
    position: {
      lat: 35.3387,
      lng: 25.1442,
    },
  },
  {
    name: "Trachilos",
    position: {
      lat: 35.5132,
      lng: 23.6334,
    },
  },
];

const CRETE_CENTER = {
  lat: 35.3,
  lng: 24.8,
};

function CreteMap(path: string) {
  return (
    <Map path={path} center={CRETE_CENTER} zoom={8} places={CRETE_PLACES} />
  );
}

export default CreteMap;
